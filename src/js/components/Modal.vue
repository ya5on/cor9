<template>
    <div class="modal-wrap hide">
        <div class="modal-project">
            <order></order>
            <button @click="closeModal" class="modal-project-close">✕</button>
        </div>
    </div>
</template>

<script>
    import Order from '../components/Order.vue'
    export default {
        name: 'modal-block',
        components: {
            Order
        },
        methods: {
            closeModal() {
                document.querySelectorAll('.modal-wrap').forEach(function (element) {
                    element.classList.add('hide');
                });
            },
        },
    };
</script>
