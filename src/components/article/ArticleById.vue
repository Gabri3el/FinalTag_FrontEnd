<template>
    <div class="articleById">
        <PageTitle icon="fa fa-file-o" :main="article.name" :sub="article.description"/>
        <div class="articleContent" v-html="article.content">

        </div>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import Axios from 'axios'
import PageTitle from '../template/PageTitle.vue'
export default {
    name:'ArticleById',
    components:{PageTitle},
    data(){
        return{
            article: {}
        }
    },
    mounted(){
        const url = `${baseApiUrl}/articles/${this.$route.params.id}`
        Axios.get(url).then(res => this.article = res.data)
    }
}
</script>

<style>
    .articleContent{
        background-color: #fff;
        border-radius: 8px;
        padding: 25px;
    }
    .articleContent pre{
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #fff;
    }
    .articleContent img{
        max-width: 100%;
    }
    .articleContent :last-child{
        margin-bottom: 0px;
    }
</style>