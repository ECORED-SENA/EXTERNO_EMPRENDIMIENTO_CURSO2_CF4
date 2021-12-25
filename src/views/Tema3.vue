<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Diseño de un plan de acción
    figure
      img(src='@/assets/template/tema-3-1.png', alt='Texto que describa la imagen')
    .row.px-5.mt-n5
      .col-12.p-4.bg-gris-deg.rounded-15
        p La puesta en marcha de una estrategia, por lo general, requiere una cantidad considerable de acciones. Por eso es importante traducir esas acciones en los pasos que se deben llevar a cabo para cumplir con los objetivos propuestos. La finalidad de un plan de acción es plasmar las tareas a realizar de forma ordenada y de una manera lógica, que permitan alcanzar unos resultados concretos.
    .h5.text-center.mt-5 Entre los beneficios que ofrece un plan de acción podemos enumerar los siguientes:
    .row.mt-4.position-relative
      .col-12.col-lg-7.offset-lg-4
        ul.lista-ul--color
          li 
            i.lista-ul__vineta
            | Es posible dividir las actividades más grandes en pasos más pequeños, lo cual hace que sea más factible lograrlo, lo que se conoce como victorias tempranas.
          li.mt-2 
            i.lista-ul__vineta
            | Se definen prioridades y plazos, algunas acciones son más urgentes, necesarias o prerrequisito de otras.
          li.mt-2 
            i.lista-ul__vineta
            | Permite optimizar y gestionar el tiempo y recursos, incrementando las posibilidades de hacer lo correcto en el momento oportuno.
          li.mt-2 
            i.lista-ul__vineta
            | Se organiza una rutina de trabajo, fomentando la disciplina y ampliando las oportunidades de éxito.
      .col-12.bg-gris-oscuro.p-4.rounded-15
        .row.mt-xl-5
          .col-12.col-lg-8.offset-lg-4
            p.border-left-azul-6.ps-4 El plan de acción es una herramienta muy utilizada en el ámbito organizacional y a nivel personal; es por ello, que se encuentra una variedad de aplicaciones que permiten la elaboración de un plan de acción; también se puede utilizar una hoja de cálculo tradicional (Excel), Google Calendar o aplicaciones de productividad.
      figure.position-absolute(style="top: 10%;left: 0%;").d-none.d-lg-flex
        img(src='@/assets/template/tema-3-2.png', alt='Texto que describa la imagen').w-31
    .row.mt-5.fondo-img-2
      .h4.text-center Existen muchas maneras de graficar un plan de acción, un ejemplo de estas es la que se relaciona a continuación.
      .col-12.col-lg-10.offset-lg-1.text-white.mt-4
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-3-4.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="8%" y="13%" numero="+")
            p #[strong Metas: ] Defina la aspiración o deseo que quieran cumplir en el futuro.
          .tarjeta.color-acento-botones.p-3(x="11%" y="25%" numero="+")
            p #[strong Objetivos:] Defina el propósito concreto que se espera ejecutar para alcanzar una meta.
          .tarjeta.color-acento-botones.p-3(x="21%" y="36%" numero="+")
            p #[strong Estrategias:] Determine el camino que deberá seguir durante la ejecución del plan de acción.
          .tarjeta.color-acento-botones.p-3(x="45%" y="36%" numero="+")
            p #[strong Acciones:] Establezca las tareas concretas a desarrollar, deberán ser lo más específicas y detalladas posibles.
          .tarjeta.color-acento-botones.p-3(x="69%" y="36%" numero="+")
            p #[strong Recursos:] determine los elementos, herramientas o bienes necesarios para llevar a cabo las tareas.
          .tarjeta.color-acento-botones.p-3(x="94%" y="36%" numero="+")
              p #[strong Indicadores:] Exprese con datos cuantitativos o cualitativos si se está logrando los objetivos y meta propuesta.
    .row.mt-3
      .col-12.col-lg-10.offset-lg-1
        .cajon.color-acento-contenido.p-4.mb-4
          p #[strong Plan de contingencia.] ¿Qué hacer en caso de que las cosas salgan mal?; cuando se elabora el plan de acción es necesario contemplar que, a pesar de la planeación, hay eventos que no se pueden controlar y que pueden poner en riesgo cumplir la meta propuesta; sin embargo, no se debe desistir, por el contrario, se debe determinar qué hacer si el plan de acción no se cumple; aquí es donde se tiene en cuenta el comúnmente llamado plan B, el cual permite alcanzar el mismo fin, a través de otros medios. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.lista-ul__vineta:before
  color: #4DD0E1 !important
.fondo-img-2
  background-image: url(../assets/template/tema-3-fondo.png)
  background-repeat: no-repeat
  background-size: cover
</style>
