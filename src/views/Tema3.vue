<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Usabilidad y funcionalidad de las aplicaciones
    p.mb-5 Para realizar el diseño de una oportuna interfaz gráfica para aplicaciones móviles, es necesario tener claros algunos parámetros importantes que se han utilizado y que mejoran el rendimiento y la usabilidad.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Tabla 4 
        | La usabilidad 
    .row.mb-5(data-aos="zoom-out-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-primario--borde.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img35.svg' alt='AvatarTop' style='width: 124px').mb-4
          h3 Eficacia o efectividad
          p La aplicación se considera efectiva cuando los usuarios logran concretar y realizar los objetivos específicos para los cuales fue desarrollada la aplicación. se puede medir con la tasa de errores detectados y la cantidad de soluciones ofrecidas. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido--borde.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img36.svg' alt='AvatarTop' style='width: 124px').mb-4
          h3 Eficiencia
          p Se trata de la correlación que existe entre el esfuerzo usado, con la precisión y la certeza con la que las personas usuarias de apps alcanzan a realizar sus actividades. Los esfuerzos y los recursos que se usen, han de ser menores y la eficiencia ha de ser mayor. Si se pretende valorar la eficiencia, algunos indicadores podrían ser el tiempo de tardanza en finalizar una tarea y el tiempo de aprendizaje.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-botones--borde.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img37.svg' alt='AvatarTop' style='width: 124px').mb-4
          h3 Satisfacción
          p  Es la respuesta positiva entregada por el usuario o cliente por la realización correcta y eficiente de las actividades se puede medir con la periodicidad que este la realiza y sus muestras positivas hacia el uso del producto.
      figcaption.mt-4 Nota.https://www.iso.org/obp/ui/#iso:std:iso:9241:-11:ed-1:v1
    .row.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="slide-right")
          .h5 Mejorar la usabilidad
          p Estas son las 10 reglas heurísticas propuestas por Nielsen y Molich, y que apuntan a una mejor usabilidad de las aplicaciones móviles.
        a.anexo.mb-4.mb-lg-0(href="https://www.nngroup.com/articles/usability-101-introduction-to-usability/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              b Enlace web. 
              |https://www.nngroup.com/articles/usability-101-introduction-to-usability/
              br
              |https://www.nngroup.com/
    .row.mb-5.justify-content-end
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="slide-left")
          .h5 Funcionalidad de interfaces
          p Al comprender la importancia que tiene el concepto de usabilidad, en la etapa de diseño, se evitarán muchos inconvenientes y retrasos porque se identificarán, a tiempo, las características principales que debe tener la aplicación.
    p.mb-5 Para conocer con más detalle, los principios que regulan la usabilidad y funcionalidad de una interface para páginas web y dispositivos móviles, según Williams, Sochats y Morse, le invitamos a ver el siguiente recurso:
    figure.mb-5
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video: Leyenda del video
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

<style lang="sass" scoped></style>
