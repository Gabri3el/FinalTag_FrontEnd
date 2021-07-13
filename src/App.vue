<template>
	<div id="app" :class="{'hideMenu': !isMenuVisiable }">
		<Header title="Final Tag | Gabriel Merino" 
		:toggleBtnMenu="true"
		:hideUserDropdown="!user"/>
		<Menu />
		<Loading v-if="validatingToken" />
		<Content v-else/>
		<Footer />
	</div>
</template>

<script>
import Axios from 'axios'
import {baseApiUrl, userKey} from '@/global'
import { mapState } from 'vuex'
import Header from './components/template/Header.vue'
import Content from './components/template/Content.vue'
import Menu from './components/template/Menu.vue'
import Footer from './components/template/Footer.vue'
import Loading from './components/template/Loading.vue'


export default {
	name: "App",
	components:{Header,Content,Menu,Footer,Loading},
	computed: mapState(['isMenuVisiable','user']),
	data(){
		return{
			validatingToken: true
		}
	},
	methods:{
		async validateToken(){
			this.validatingToken = true
			const json = localStorage.getItem(userKey)			
			const userData = JSON.parse(json)
			this.$store.commit('setUser',null)
			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: '' })
				return
			}
			const res = await Axios.post(`${baseApiUrl}/validateToken`,userData)
			if(res.data){
				await this.$store.commit('setUser',userData)
			}else{
				localStorage.removeItem(userKey)
				this.$router.push({name: ''})
			}

			this.validatingToken = false
		}
	},mounted(){
		this.validateToken()
	}
}
</script>

<style src="./style.scss" lang="scss">

</style>