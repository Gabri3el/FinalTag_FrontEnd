<template>
  <aside class="menu" v-show="isMenuVisiable">
      <div class="menuFilter">
          <i class="fa fa-search fa-lg"></i>
          <input class="filterField" type="text" placeholder="Digite Para filtrar..." v-model="treeFilter">
      </div>
      <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
  </aside>
</template>

<script>
import {mapState} from 'vuex'
import Tree from 'liquor-tree'
import {baseApiUrl} from '@/global'
import Axios from 'axios'

export default {
    name: 'Menu',
    components:{ Tree},
    computed: mapState(['isMenuVisiable']),
    data(){
        return{
            treeData: this.getTreeData(),
            treeOptions:{
                propertyNames:{'text' : 'name'},
                filter:{emptyText: 'Categoria Não Encontrada'}
            },
            treeFilter:''
        }
    },
    methods:{
        getTreeData(){
            const url = `${baseApiUrl}/categories/tree`
            return Axios.get(url).then(res => res.data)
        },
        onNodeSelected(node){
            this.$router.push({
                name: 'ArticleByCategory',
                params:{ id: node.id }
            })

        }
    },
    mounted(){
        this.$refs.tree.$on('node:selected', this.onNodeSelected)
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .menu a, .menu a:hover{
        color: #3B87B4;
        text-decoration: none;
    }

    .menu .tree-node-selected > .tree-content,
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.5);
    }

    .tree-arrow.has-child{
        filter: brightness(2)
    }
    .menu .menuFilter{
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #aaa;
    }
    .menu .menuFilter i{
        color: #aaa;
        margin-right: 10px;
    }
    .menu input{
        color: #ccc;
        font-size: 1.3rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }
    .tree-filter-empty{
        color: #3B87B4;
        margin-left: 20px;
        font-size: 1.3rem;
    }
</style>