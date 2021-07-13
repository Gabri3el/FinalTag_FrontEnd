import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisiable: true,
        user: null
    },
    mutations:{
        toggleMenu(state, isVisiable){
            if(isVisiable === undefined){
                state.isMenuVisiable = !state.isMenuVisiable
            }else{
                state.isMenuVisiable = isVisiable
            }
        },
        setUser(state, user){
            state.user = user
            if(user){
                Axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
    
            } else{
                delete Axios.defaults.headers.common['Authorization']
            }
        }
    }
})