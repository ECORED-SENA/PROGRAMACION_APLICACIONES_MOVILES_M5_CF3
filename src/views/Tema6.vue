<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Estructuras de navegación
    figure.mb-5 
      img(src='@/assets/curso/img61.jpg')(data-aos="zoom-in-up")
    p.mb-5 Los servicios ideales que ha de prestar una aplicación móvil o cualquier sitio web, suponen para el usuario, la posibilidad de derivar de un punto a otro dentro del entorno, incluso fuera de él hacia otros entornos, para acercarse o acceder directamente a información, acciones, servicios, material, entre otras. Royo (2004) clasifica a las estructuras de navegación en tres tipos: lineales, jerárquicas y aleatorias.
    h4 Estructuras Lineales
    p.mb-5 Generan una lectura secuencial y son usadas para tareas muy bien definidas, por ejemplo, los tutoriales que muchos programas y apps ejecutan en su primera ejecución, para instruir al usuario sobre su funcionamiento.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 8  
        | Estructura Lineal Messenger Secuencia Lineal Para Iniciar Sesión 
    figure.mb-5 
      img(src='@/assets/curso/img62.jpg')
      figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
    h4 Estructuras Jerárquicas
    p.mb-5 Generan una lectura secuencial y son usadas para tareas muy bien definidas, por ejemplo, los tutoriales que muchos programas y apps ejecutan en su primera ejecución, para instruir al usuario sobre su funcionamiento.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 9  
        | Estructura jerárquica
    figure.mb-5 
      img(src='@/assets/curso/img63.svg')
      figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
    h4 Estructuras Aleatorias
    p.mb-5 Estas estructuras son utilizadas especialmente en el diseño de videojuegos o sistemas abiertos de interacción, donde el aprendizaje es complejo y se lucha contra el sistema o contra otros jugadores en red. Por ejemplo, al cargar una imagen o un escenario diferente, en cada actualización de la pantalla.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 10 
        | Estructura de una App
    figure.mb-5 
      img(src='@/assets/curso/img64.svg')
      figcaption Nota. http://appdesignbook.com/es/ 

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
