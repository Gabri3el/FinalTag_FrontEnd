<template>
    <header class="header">
        <a class="toggle" @click="toggleBtnMenu">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <h1 class="title">
            <i class="fa fa-angle-left">
                <router-link to="/">{{'/'+title}}</router-link>
            </i>
        </h1>
        <UserDropDown v-if="!hideUserDropdown" />
        <router-link v-else to="/auth"><b-button variant="primary">Login/Registro</b-button></router-link>    
    </header>
</template>

<script>
import UserDropDown from './UserDropDown.vue'
export default {
    name:'Header',
    components:{UserDropDown},
    props:{
        title: String,
        hideToggleBtn: Boolean,
        hideUserDropdown: Boolean
    },
    computed:{
        icon(){
            return this.$store.state.isMenuVisiable ? "fa-angle-left" : "fa-angle-down" 
        }
    },
    methods:{
        toggleBtnMenu(){
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
    .header{
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        font-size: 1.2rem;
        color: #fff;
        font-weight: 100;
        flex-grow: 1;
        text-align: center;
    }
    .title a{
        color: #fff;
        text-decoration: none;
    }
    .title a:hover{
        color: #fff;
    }
    header.header > a.toggle{
        width: 60px;
        height: 100%;
        color: #fff;
        justify-self: flex-start;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    header.header > a.toggle:hover{
        background-color: rgba(0, 0, 0, 0.2);

    }
</style>