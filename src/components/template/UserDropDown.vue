<template>
    <div class="userDropdown">
        <div class="userBtn">
            <span class="d-none d-sm-block">{{user.name}}</span>
            <div class="userDropdownImg">
                <Gravatar :email="user.email" alt="user"></Gravatar>
            </div>
             <i class="fa fa-angle-down"></i>
        </div>
    <div class="userDropdownContent">
        <a href="/admin" v-if="user.admin"><i class="fa fa-cogs"></i>Admistração</a>
        <a href @click.prevent="logout"><i class="fa fa-cogs"></i>Desconectar</a>

    </div>
       
    </div>
</template>

<script>
import {userKey} from '@/global'
import {mapState} from 'vuex'
import Gravatar from 'vue-gravatar'
export default {
    name: 'UserDropDown',
    components:{Gravatar},
    computed: mapState(['user']),
    methods:{
        logout(){
            localStorage.removeItem(userKey)
            this.$store.commit('setUser',null)
            this.$router.push({name: ''})
        }
    }
}
</script>

<style>
    .userDropdown{
        position: relative;
        height: 100%;
    }
    .userBtn{
        display: flex;
        align-items: center;
        color: #fff;
        height: 100%;
        padding: 0px 20px;
    }
    .userDropdown:hover{
        background-color: rgba(0, 0, 0, 0.2);

    }
    .userDropdownImg{
        margin: 0px 10px;
    }
    .userDropdownImg > img{
        max-height: 37px;
        border-radius: 5px;
    }

    .userDropdownContent{
        position: absolute;
        right: 0;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0,5 linear;
    }

    .userDropdown:hover .userDropdownContent{
        visibility: visible;
        opacity: 1;
    }
    .userDropdownContent a{
        text-decoration: none;
        color: #000;
        padding: 10px;
    }
    .userDropdownContent a:hover{
        background-color: #ededed;
    }
</style>