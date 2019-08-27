<template>
    <div class="modal-wrap hide">
        <div class="modal-project">
            <OrderPPC></OrderPPC>
            <button @click="closeModal" class="modal-project-close">✕</button>
        </div>
    </div>
</template>

<script>
    import OrderPPC from './OrderPPC.vue'
    export default {
        name: 'modal-block',
        components: {
            OrderPPC
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