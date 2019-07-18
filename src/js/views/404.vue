<template>
    <div class="notFound">
        <navbar></navbar>
        <router-view ></router-view>
        <div class="notFound__content">
            404 <br>
            not found
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';

    export default {
        name: 'notFound',
        components: {
            Navbar
        },

    };
</script>

<style scoped>
    .notFound {
        height: 100vh;
        width: 100%;
    }
    .notFound__content{
        font-size: 26px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        text-align: center;
        text-transform: uppercase;
    }

</style>