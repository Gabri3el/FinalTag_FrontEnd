<template>
  <div class="pageTitle">
      <h1><i v-if="icon" :class="icon"></i>{{main}}</h1>
      <h2><i v-if="icon" :class="icon"></i>{{sub}}</h2>
      <hr>
  </div>
</template>
    
<script>
export default {
    name:'PageTitle',
    props:['icon', 'main', 'sub']
}
</script>

<style>
    .pageTitle h1{  
        margin: 0;
    }
    .pageTitle h2{
        color: #7777;
        margin-top: 5px;
        font-size: 1.3rem;
    }
</style>