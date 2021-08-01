<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5 
      .col-lg-6
        .cajon-b.color-primario.p-3.abajo-derecha
          p.mb-0 Para dar inicio al desarrollo de una aplicación, lo primero que se debe hacer es definir a quiénes irá dirigida. Este proceso proporcionará bases sólidas para las labores de diseño porque será un trabajo centrado en el usuario. Se deberán considerar las necesidades que pretenden cubrir, las edades, las características del público; definir la interfaz de usuario es una de las actividades más complejas y para ello es fundamental una excelente planeación, correcto y profundo conocimiento de sus componentes para lograr el éxito buscado de la aplicación, también es necesario tener claras todas las variables que se van a utilizar comprendiendo que un solo error, falla, falencia o recurso mal utilizado, puede generar inconvenientes para el correcto funcionamiento.
      .col-lg-6: img(src="@/assets/curso/img1.jpg")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
