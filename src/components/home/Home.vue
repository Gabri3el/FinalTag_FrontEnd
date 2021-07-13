<template>
<div class="home">
    <pageTitle icon="fa fa-home" main="Bem Vindo a Final Tag" 
    sub="Desenvolvido de um desenvolvedor para outros desenvolvedores" />
    <div class="container">
       <h4>Esse site foi criado para passar meus estudos e projetos para auxiliar novos desenvolvedores</h4>
       <cite>"Não é a linguagem de programação que define o programador, mas sim sua lógica."</cite>
       <hr>
       <h5>Essa frase parece até cliche, mas a pratica leva a perfeição, abaixo você pode acompanhar minha trajetoria, e a esquerda poderá ver todos os meus artigos de estudos.</h5>
       <br><br><br>
       <h1>Gabriel Merino</h1>
       <p>Desenvolvedor Junior</p>
       <p>Cursando o ultimo semestre de Ciencias da Computação</p>
       <p>Linguagens de programação: <cite>"Javascript, Java, Vuejs, ReactJS, Angular, NodeJs"</cite></p>
       <hr>
       <h4>JOBS: </h4>
       <P>Desenvolvedor Junior na A5 Solutions |  09/2020 - atualmente</P>
       <p>Skills: <cite>Back-End: Java, SpringBoot, Avaya, Convergys, C#</cite></p>
       <cite>Front-End: Javascript, HTML5 & CSS3, Jquery, ReactJs</cite>
        <br><br>
       <P>Estagiario na A5 Solutions |  02/2020 - 09/2020</P>
       <p>Skills: <cite>Back-End: Java Avaya, Convergys</cite></p>
       <cite>Front-End: Javascript, HTML5 & CSS3</cite>

    </div>
</div>
</template>

<script>
import pageTitle from '../template/PageTitle.vue'
export default {
    name: 'Home',
    components:{pageTitle}
}
</script>

<style>

</style>