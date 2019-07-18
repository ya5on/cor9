<template>
    <section class="contacts">
        <div class="contacts__content">
            <order-form></order-form>
        </div>
    </section>
</template>

<script>
    import OrderForm from '../components/Order.vue'
    export default {
        name: 'contact',
        components: {
            OrderForm
        },


    };
</script>
