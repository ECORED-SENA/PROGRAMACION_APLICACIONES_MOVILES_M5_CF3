<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Dispositivos Y Visualización
    p.mb-5 El elemento primordial de la visualización en un dispositivo es la resolución de pantalla; para comprender qué es la resolución, es importante definir qué son píxeles: estos definen e indican cuál es la resolución de una pantalla. De la cantidad total de píxeles del teléfono, tableta, televisor o monitor, dependen las resoluciones de vídeo que se pueda llegar a alcanzar.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 11  
        | <i>Tamaño de dispositivos y visualización</i>
    figure.mb-5 
      img(src='@/assets/curso/img65.jpg')
      figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
    .row.mb-5
      .col-lg-6
        h4 Píxeles
        p La pantalla viene dividida en 
          b pequeños puntos llamados píxeles
          |; elemento de imagen que consiste en puntos diminutos presentes en toda el área de la pantalla, y permiten que se visualice una imagen. Se puede entender un píxel como el tamaño más pequeño que una imagen puede tener.
      .col-lg-6: img(src='@/assets/curso/img66.jpg')
    .row.mb-5
      .col-lg-6
        h4 Imagen y dimensiones de la pantalla
        p Una manera clara de comprenderlo es: si tenemos una resolución HD de 1280 x 720, quiere decir que la resolución de pantalla está conformada por 1280 columnas de 720 píxeles por columna. Es como una matriz. Por regla general, el primer número hace referencia a la anchura; el segundo, a la altura de la pantalla. 
      .col-lg-6: img(src='@/assets/curso/img67.jpg')
    .row.mb-5
      .col-lg-6
        h4 Estándar de resolución
        p Las resoluciones de las pantallas están definidas por estándares de resoluciones VGA, XGA, HD, Full HD, 1440p y 4K, entre otros, cuanto mayor sea la resolución, mejor será la calidad.
      .col-lg-6: img(src='@/assets/curso/img68.jpg')
    .row.mb-5
      .col-lg-6
        h4 Tamaño de la pantalla
        p De forma predeterminada, el tamaño de la pantalla se mide en pulgadas (inch, en inglés). Cada pulgada equivale a 2,54 centímetros o 25,4 mm y también puede ser representada con comillas posteriores a la cifra, por ejemplo: 3,2″ (3,2 pulgadas).
      .col-lg-6: img(src='@/assets/curso/img69.jpg')
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
