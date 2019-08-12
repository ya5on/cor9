<template>
    <div class="modal-wrap hide">
        <div class="modal-project">
            <G_Order></G_Order>
            <button @click="closeModal" class="modal-project-close">✕</button>
        </div>
    </div>
</template>

<script>
    import G_Order from './G_Order.vue'
    export default {
        name: 'modal-block',
        components: {
            G_Order
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