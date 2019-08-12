<template>
    <form action="" @submit.prevent="formSubmit" class="order-form">
        <h2>Начать работу</h2>
        <div class="order-content">
            <div class="order-left">
                <div class="order__row">
                    <label class="down" :for="makeHash('order_name')">Имя*</label>
                    <input :id="makeHash('order_name')" type="text" v-model="orderName"/>

                    <label class="down" :for="makeHash('order_phone')">Телефон*</label>
                    <input :id="makeHash('order_phone')" type="tel" v-model="orderTel"/>

                    <label class="down" :for="makeHash('order_email')">Email</label>
                    <input :id="makeHash('order_email')" type="email" v-model="orderEmail"/>
                </div>
            </div>
            <div class="order-center">

            </div>
            <div class="order-right">
                <div class="order-right-pick">
                    Выберите услугу:
                </div>
                <ul class="order">
                    <li v-for="(feature, index) in features">
                        <input type="checkbox"
                               :id="makeHash('cb-feature-'+index)"
                               :value="feature"
                               v-model="selection.features" />
                        <label class="order-label" :for="makeHash('cb-feature-'+index)">{{feature}}</label>
                    </li>
                </ul>
            </div>
        </div>
        <div class="order__footer">
            <div class="border-btn-box pointer-large">
                <div class="border-btn-inner">
                    <button :submit="true" class="border-btn" data-text="Отправить">Отправить</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    import DOMPurify from 'dompurify';
    import MaskedInput from 'vue-masked-input';
    import swal from 'sweetalert';
    import axios from 'axios';

    export default {
        name: 'order',
        components: {
            MaskedInput
        },
        data() {
            return {
                orderName: '',
                orderEmail: '',
                orderTel: '',
                hash_id: null,
                errs: [],
                token: '721569016:AAGj-BkOM-ni_Pd-7tyRONMAs2jNVqLoRC8',
                chatId: '-354813176',
                features: ["Настройка", "Сопровождение", "Аудит"],
                selection: {
                    features: []
                },
            }
        },
        computed: {
            makeHash(name) {
                return (name) => `${name}_${this.hash_id}`
            },
        },

        mounted() {
            let i, hash = '',
                possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (i = 0; i < 8; i++) {
                hash += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            this.hash_id = hash;
        },
        methods: {
            formSubmit: function(){
                let name = this.orderName;
                let tel = this.orderTel;
                let email = this.orderEmail;
                let features = this.selection.features;

                if(name.length > 0){
                    this.removeError('name');
                } else {
                    this.addError('name');
                }


                if(tel.length > 0){
                    this.removeError('tel');
                } else {
                    this.addError('tel');
                }

                if(this.checkErrors()){
                    let msg =	'<b>Новая заявка от ' + name + '!</b>\n';
                    msg +=	'Номер телефона: ' + tel + '.\n';
                    msg +=	'Email: ' + email + '.\n';
                    msg +=  'Услуга: ' + features + '.';
                    this.sendMsg(msg);

                } else {
                    let msg = "";
                    Array.prototype.forEach.call(this.errs, function(err){
                        if(err == 'name'){
                            msg += 'Поле имя не должно быть пустое. ';
                        }
                        if(err == 'tel'){
                            msg += 'Поле телефон не должно быть пустое. ';
                        }
                    });
                    this.showErrorAlert(msg);
                }
            },
            sanitize: function(s){
                return DOMPurify.sanitize(s).trim().replace(/\s+/g,' ').replace(/_/g, '');
            },
            checkError: function(err){
                return this.errs.indexOf(err);
            },
            addError: function(err){
                if(this.checkError(err) == -1){
                    this.errs.push(err);
                }
            },
            removeError: function(err){
                if(this.checkError(err) != -1){
                    this.errs.splice(this.checkError(err), 1);
                }
            },
            checkErrors: function(){
                if(this.errs.length == 0){
                    return true;
                } else {
                    return false;
                }
            },
            showErrorAlert: function(msg){
                swal("Ошибка", msg, "error");
                console.log(msg);
            },
            showSuccessAlert: function(){
                swal("Успешно!", "Ok", "success");
                this.orderName = '';
                this.orderTel = '';
                this.orderEmail = '';
                this.selection.features = [];
            },
            sendMsg: function(msg){
                let url = 'https://api.telegram.org/bot' + this.token + '/sendMessage?chat_id=' + this.chatId + '&text=' + encodeURI(msg) + '&parse_mode=html';
                let $this = this;

                axios.get(url).then((response) => {
                    let ok = response.data.ok;
                    if(ok){
                        $this.showSuccessAlert();
                    } else {
                        $this.showErrorAlert('Случилась какая-то ошибка. Подождите немного и повторите еще раз.');
                    }
                }).catch((error) => {
                    console.log(error);
                    $this.showErrorAlert('Случилась какая-то ошибка. Подождите немного и повторите еще раз.');
                });
            },
        },
    };
</script>
