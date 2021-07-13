<template>
    <div class="authContent">
        <div class="authModal">
            <img src="@/assets/images/logo.png" alt="logo" width="200" />
            <hr>
            <div class="authTitle">
                {{showSignUp ? 'Cadastro' : 'login' }}
            </div>
            <input v-if="showSignUp" v-model="user.name" type="text" placeholder="Nome">
        <input v-model="user.email" type="text" placeholder="E-mail">
        <input v-model="user.password" type="password" placeholder="Senha">
        <input v-if="showSignUp" v-model="user.confirmPassword" type="text" placeholder="Confirme sua senha"> 
        <b-button v-if="showSignUp" @click="signUp">Registrar</b-button>
        <b-button v-else @click="signIn">Entrar</b-button>

        <a href @click.prevent="showSignUp = !showSignUp">
            <span v-if="showSignUp">Já tem cadastro? Acesse o Login!</span>
            <span v-else>Não tem cadastro? Acesse aqui!</span>
        </a>
        </div>
    </div>
</template>

<script>
import {baseApiUrl, showError, userKey} from '@/global'
import Axios from 'axios'

export default {
    name: 'Auth',
    data(){
        return{
            showSignUp: false,
            user:{}
        }
    },
    methods:{
        signIn(){
            Axios.post(`${baseApiUrl}/signin`,this.user)
                .then(res => {
                    this.$store.commit('setUser', res.data)
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.$router.push({path: '/'})
                })
                .catch(showError)
        },
        signUp(){
            Axios.post(`${baseApiUrl}/signup`,this.user)
                .then(()=>{
                    this.$toasted.global.defaultSuccess()
                    this.user = {}
                    showSignUp: false
                })
                .catch(showError)                
        }
    }
}
</script>

<style>
    .authContent{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .authModal{
        background-color: #fff;
        width: 350px;
        padding: 35px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .authTitle{
        font-size: 1.2rem;
        font-weight: 100;
        margin-bottom: 15px;
    }

    .authModal input{
        border: 1px solid #bbb;
        width: 100%;
        margin-bottom: 15px;
        padding: 3px 8px;
    }
    .authModal button{
        align-self: flex-end;
        background-color: #2460ae;
        color: #fff;
        padding: 5px 15px;
    }

    .authModal a{
        margin-top: 35px;
    }
    .authModal hr{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right rgba(120,120,120,0) rgba(120,120,120,0.75)  rgba(120,120,120,0));
    }
</style>