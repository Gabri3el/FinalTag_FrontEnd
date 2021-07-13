<template>
  <div class="adminPages">
      <pageTitle icon="fa fa-cogs" main="Administração"
      sub="Novos Artigos e Categorias" />
    <div class="adminPagesTabs">
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Artigos" active>
                    <ArticleAdmin />
                </b-tab>
                <b-tab title="Categorias">
                    <CategoryAdmin />
                </b-tab>
                <b-tab title="Usuarios">
                    <UserAdmin />
                </b-tab>
            </b-tabs>
        </b-card>
    </div>
  </div>
</template>

<script>
import pageTitle from '../template/PageTitle.vue'
import ArticleAdmin from '../admin/ArticleAdmin.vue'
import CategoryAdmin from '../admin/CategoryAdmin.vue'
import UserAdmin from '../admin/UserAdmin.vue'

export default {
    name:'AdminPages',
    components:{pageTitle,ArticleAdmin,CategoryAdmin,UserAdmin}
}
</script>

<style>

</style>