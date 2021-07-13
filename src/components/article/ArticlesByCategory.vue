<template>
  <div class="articlesByCategory">
      <PageTitle icon="fa fa-folder-o"
      :main="category.name" sub="Categoria" />
      <ul>
          <li v-for="article in articles" :key="article.id">
              <ArticleItem :article="article"/>
          </li>
      </ul>
      <div class="loadMore">
          <b-button v-if="loadMore" class="btn btn-lg btn-outline-primary"
          @click="getArticle">
            Carregar Mais Artigos
          </b-button>
      </div>
  </div>
</template>

<script>
import {baseApiUrl} from '@/global'
import Axios from 'axios'
import PageTitle from '../template/PageTitle.vue'
import ArticleItem from './ArticleItem.vue'
export default {
    name:'ArticlesByCategory',
    components:{PageTitle,ArticleItem},
    data(){
        return{
            category:{},
            articles: [],
            page: 1,
            loadMore: true
        }
    },methods:{
        getCategory(){
            const url = `${baseApiUrl}/categories/${this.category.id}`
            Axios(url).then(res => this.category = res.data)
        },
        getArticle(){
            const url = `${baseApiUrl}/categories/${this.category.id}/articles?page=${this.page}`
            Axios(url).then(res => {
                this.articles = this.articles.concat(res.data)
                this.page++
                if(res.data.length === 0) this.loadMore = false
            })    
        }
    },
     watch:{
        $route(to){
            this.category.id = to.params.id
            this.articles = []
            this.page = 1,
            this.loadMore = true
            
            this.getCategory()
            this.getArticle()
        }
    },
    mounted(){
        this.category.id = this.$route.params.id
        this.getCategory();
        this.getArticle();
    }
}
</script>

<style>
    .articlesByCategory ul{
        list-style-type: none;
        padding: 0;
    }
    .articlesByCategory .loadMore{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 25px;
    }
</style>