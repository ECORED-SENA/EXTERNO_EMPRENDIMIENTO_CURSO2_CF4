<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Concepto

    figure
      img(src='@/assets/template/tema-1-1.png', alt='Texto que describa la imagen')
    .row.px-5.mt-n5
      .col-12.p-4.bg-gris-deg.rounded-15
        p La creatividad es una de las capacidades más importantes que tienen todos los seres humanos, el talento más común y presente en nuestra vida, además es clave en la generación de ideas originales que aportan valor y permiten hallar nuevos caminos hacia objetivos trazados.
      p.mt-4 La creatividad es de gran importancia en la toma de decisiones porque genera oportunidad de implementar estrategias de diferenciación frente a la solución de los desafíos que retan al ser humano a lo largo de su vida.
      .h5.mt-4 Profundiza sobre la creatividad emprendedora en el siguiente video:
    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://youtu.be/TweiZdMxh9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-4
      .col-4.d-none.d-lg-flex
        figure
          img(src='@/assets/template/tema-1-2.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.align-self-center
        .h5 Factores que afectan la creatividad
        p.mt-4 Existen factores que pueden bloquear la fluidez de la creatividad, conozcamos cuales son:
        ul.lista-ul.mt-4.ps-2
          li 
            i.fas.fa-database
            | El miedo a errar, dificulta experimentar.
          li.mt-2
            i.fas.fa-database
            | Baja autoestima, impide confiar en tus capacidades.
          li.mt-2
            i.fas.fa-database
            | Utilizar la misma solución en varias ocasiones para problemas similares.
          li.mt-2
            i.fas.fa-database
            | Ser muy crítico, afecta la generación de nuevas ideas.
          li.mt-2
            i.fas.fa-database
            | Seguir la rutina, impide ver los problemas de manera diferente.
        p.mt-4 Si la creatividad es la generación de ideas originales, la puesta en práctica y desarrollo de las mismas para dar soluciones diferentes a lo ya existente es lo que se conoce como innovación.
    .row.mt-4
      .col-12.col-lg-8.offset-lg-2
        figure
          img(src='@/assets/template/tema-1-3.png', alt='Texto que describa la imagen')
    separador.mt-3
    
    .titulo-segundo.mt-5.color-acento-contenido
      #t_1_1.h2 1.1 Tipos y niveles
    p.mt-4 De acuerdo con el manual de Oslo (2018) se definen los tipos y niveles de innovación.
    .row.mt-4
      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-4.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8.align-self-center
        .row
          .col-3.col-xl-2.bg-azul.px-3.py-2.text-center
            .h5.text-white.mb-0.text-center Tipos
        LineaTiempoD.color-primario.mt-4
          .row(numero="1" titulo="Incremental").px-3
            p.px-0 Se crea un valor sobre un producto y/o servicio existente, añadiendo nuevas mejoras (agregar, suprimir o combinar). Las mejoras son tendientes a satisfacer la experiencia de usuario, e involucran un grado de novedad estética u otras cualidades subjetivas al producto o servicio.
            .col-12.border-gris-1.rounded-15.bg-blanco.p-4.mt-4
              p #[strong Ejemplo: ] la elaboración de la cerveza sin alcohol, solo a base de cebada, con la misma calidad y de la misma línea de bebidas, pero sin alcohol.
          .row(numero="2" titulo="Sustancial").px-3
            p.px-0 Presenta novedades frente a la funcionalidad y en menor medida al diseño y presentación o viceversa.
            .col-12.border-gris-1.rounded-15.bg-blanco.p-4.mt-4
              p #[strong Ejemplo: ] El motor eléctrico (alto valor tecnológico) en comparación al motor diésel en los vehículos. También podemos citar como ejemplo las actualizaciones permanentes de los teléfonos móviles añadiendo nuevas mejoras y funcionalidades a lo largo del tiempo.
          .row(numero="3" titulo="Radical").px-3
            p.px-0 Se incorpora al mercado un producto o servicio que en sí mismo es capaz de generar una categoría que no se conocía antes, al enfocarse en la base de un nuevo producto o servicio no conocido con anterioridad. Así también, este tipo de innovación supone un alto riesgo; si se tiene en mente una innovación radical vale la pena preguntarse: ¿será rentable?, ¿por qué alguien no lo ha pensado antes?
            .col-12.border-gris-1.rounded-15.bg-blanco.p-4.mt-4
              p #[strong Ejemplo: ] La empresa Amazon que visionó la venta de libros virtuales, o la invención de la imprenta.
    .row.mt-5.border-top-gris
      .col-12.col-lg-8.align-self-center.mt-5
        .row
          .col-3.col-xl-2.bg-azul.px-3.py-2.text-center
            .h5.text-white.mb-0.text-center Niveles
        LineaTiempoD.color-primario.mt-4
          .row(numero="1" titulo="Innovación en producto/servicio").px-3
            p.px-0 El reto estratégico para las empresas es generar cambios significativos a sus productos o servicios que conlleven a la mejora de sus características, funciones o resultados. 
            p.mt-3 Uno de los ejemplos más representativos que existen es el iPhone, revolucionando la industria de la telefonía celular, el cual posee muchas versiones que se lanzan anualmente, con distintas mejoras.
          
          .row(numero="2" titulo="Innovación en proceso").px-3
            p.px-0 Otra manera de innovar es transformar la forma en que se hacen las cosas dentro de una organización mediante la implementación o adecuación de procesos de fabricación, logística o distribución, que conlleva a minimizar los costos de producción, mejorar la calidad, disminuir los tiempos; entre otros. 
            p.mt-3 Un ejemplo es la empresa de correos DHL, que implementó el uso de drones para el servicio de entrega de paquetes (hasta de 5 kg) a una distancia máxima de 8 km dentro del perímetro urbano, permitiendo un ahorro hasta de 80% en los costos por entrega, además de una reducción de consumo energético y huella de carbono.
            
          .row(numero="3" titulo="Innovación en la gestión (organizacional y marketing").px-3
            p.px-0 Redefinir nuevos métodos organizacionales que incluyen mejoras en las actividades de gestión de la empresa. (gestión del conocimiento, recursos humanos, gestión de la cadena de valor, administración, sistema de calidad, etc.). 
            p.mt-3 Un ejemplo para citar es la entidad bancaria Bancolombia, la cual ha creado diferentes soluciones tecnológicas no sólo para digitalizar sus servicios sino también para mejorar la gestión financiera y contable propia y de sus clientes.

      .col-4.d-none.d-lg-flex.align-self-center
        figure
          img(src='@/assets/template/tema-1-5.png', alt='Texto que describa la imagen')
    separador.mt-3

    .titulo-segundo.mt-5.color-acento-contenido
      #t_1_2.h2 1.2 Design thinking
    p.mt-4 Es un proceso creativo que consiste en definir el problema que se pretende abordar para entenderlo y, posteriormente, implementar las soluciones, siempre enfocando el proceso hacia las necesidades del usuario (Benet, 2017). Es importante que las soluciones que se diseñan ofrezcan al usuario un valor añadido reconocible y que, al mismo tiempo, sea técnicamente viable y financieramente sostenible a largo plazo, en otras palabras, que sean soluciones innovadoras (denkmodell, 2019, Pág.3).
    .h5.text-center.mt-5 Este proceso se desarrolla en las siguientes etapas:
    .row.mt-5
      .col-12.col-lg-10.offset-lg-1
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-1-6.png', alt='Texto que describa la imagen')

          div(x="10%" y="66%" tooltip="Click para más información" numero="+")
            p #[strong Explorar:] Esta etapa se centra en la generación de una pregunta de búsqueda, permite identificar un problema, centrado en el QUIÉN (usuario).
          
          div(x="30%" y="19%" tooltip="Click para más información" numero="+")
            p #[strong Comprender: ] Se enfoca en conocer a quien se le va a resolver el problema, planteando preguntas básicas como: edad, sexo, nivel de ingresos, estrato y preguntas más específicas relacionadas con intereses, dificultades y expectativas; el objetivo es identificar las necesidades y oportunidades de los usuarios.
            .row.mt-4
              .col-10.col-lg-8.offset-1.offset-lg-2
                figure
                  img(src='@/assets/template/tema-1-7.png', alt='Texto que describa la imagen')
          div(x="50%" y="66%" tooltip="Click para más información" numero="+")
            p #[strong Idear: ] Como lo indica el nombre, esta fase consiste en la generación de ideas innovadoras para la solución al problema planteado. Para este fin se reúne un equipo multidisciplinar, normalmente a través de talleres de cocreación. Contar con personas con diferentes perfiles permite ampliar el espectro y enriquecer las soluciones.  La ideación suele iniciar con un brainstorming o lluvia de ideas.

          div(x="70%" y="19%" tooltip="Click para más información" numero="+")
            p #[strong Prototipar: ] Esta etapa se describe cómo “pensar con las manos”. El objetivo es desarrollar diseños de prueba, con el fin de verificar la viabilidad de las ideas de manera fácil, rentable y efectiva, corregir defectos antes de generar un proyecto piloto.  Los prototipos deben ser tangibles para animar al usuario a probarlos.
          
          div(x="90.5%" y="66%" tooltip="Click para más información" numero="+")
            p #[strong Testar (o fase de prueba): ] En esta etapa se ponen a prueba las ideas, se recibe retroalimentación del usuario para descartar fallas, mejorar el prototipo y presentar una versión mejorada. La validación del prototipo es necesaria, cuantas más pruebas se realicen mayores serán las oportunidades de éxito. Generalmente se siguen los siguientes pasos:
            .row.mt-4
              .col-10.col-lg-8.offset-1.offset-lg-2
                figure
                  img(src='@/assets/template/tema-1-8.png', alt='Texto que describa la imagen')
    .cajon.color-acento-contenido.p-4.mb-4
        .h5.mb-1 Después de la fase de prueba, puede ser necesario:
        p Descartar, mejorar o adaptar el prototipo, retomando los anteriores pasos del proceso.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
  methods: {},
}
</script>

<style lang="sass">
.fa-database:before
  color: #039BE5

.comprender-button .img-infografica-b__item__dot::before
  background-color: red !important
</style>
