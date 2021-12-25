<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-a.color-primario.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/template/tema-0-1.png', alt='Texto que describa la imagen').w-75.margin-0-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Las grandes ideas han surgido en momentos inspiradores y creativos donde se combina el pensamiento divergente, lleno de ideas y el pensamiento convergente con la lógica que viabiliza y selecciona estas ideas. Todo lo anterior va de la mano con la innovación que transforma la vida de las personas e impacta de manera positiva a los emprendedores. En este contenido podrán encontrar aspectos importantes sobre la creatividad e innovación, una metodología conocida como Design Thinking o pensamiento de diseño y estrategias para optimizar los resultados obtenidos.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bloque-texto-a.color-primario:before
  background-color: #12263F
.bloque-texto-a.color-primario
  background-color: #F6F6F6
</style>
