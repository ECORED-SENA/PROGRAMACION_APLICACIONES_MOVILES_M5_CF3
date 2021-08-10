<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1  Interfaz 
    p.mb-5 Una interfaz permite la intercomunicación entre un sistema informático implementado en algún dispositivo electrónico y su usuario. Este término proviene del inglés <i>interface</i>, que traduce 
      b “superficie de contacto”. 
      br
      br
      |La finalidad es entregar una herramienta que permita, de manera sencilla, visualizar, introducir y editar información generando un mecanismo de interacción de uso. 
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Tabla 1 
        | <i>Tipos de interfaz de usuario</i>
    .row.mb-5(data-aos="fade-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img2.svg' alt='AvatarTop' style='width: 111px').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h2 Interfaces de usuario
              p Comunicación entre el usuario y un sistema informático implementado en un aparato electrónico: 
                b ejemplo a pantalla en los <i>Smartphone</i>
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img3.svg' alt='AvatarTop' style='width: 82px')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h2 Interfaces físicas
              p Permite la conexión física de dos o más dispositivos. Los puertos como por 
                b ejemplo los puertos USB de computadoras.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img4.svg' alt='AvatarTop' style='width: 111px')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-1-claro.w-100
            .p-4.text-center
              h2 Interfaces lógicas
              p Permite realizar comunicaciones entre dos o más programas por medio de <i>software</i> que maneja protocolos de interacciones lógicas.  
                b Por ejemplo, una <i>Api</i>.
    #t_1_1.titulo-segundo
      h2 1.1 Interfaz De Usuario
    p.mb-5 La interfaz de usuario o el <i>FrontEnd</i> de las aplicaciones móviles, programas y páginas web, sirve de mediador con el usuario de los computadores, <i>Smartphones</i> o todo aquel dispositivo electrónico que cuente con un <i>software</i>. Su función es ofrecer un entorno visual compuesto por gráficos, imágenes, iconos, y animaciones que contribuyen en la integración, visualización y comprensión de la información que brinda la aplicación y generando las herramientas necesarias   para realizar las acciones de interacción.
      br
      br
      |La interfaz de usuario (UI) también se define como el conjunto de elementos gráficos que permite la interacción funcionando como controles y canales, por medio de los cuales los usuarios se comunican con el dispositivo electrónico. En el diseño de aplicaciones móviles es importante establecer una interfaz de usuario que permita la transferencia de información entre el usuario y la aplicación de manera fluida y sencilla, logrando una buena navegabilidad e interacción.
    h4 Categorías
    p.mb-5 Es posible encontrar varias categorías de interfaces de usuarios; estas se clasifican según la interacción que permite con el usuario y lo que se busca es facilitar la interacción entre la máquina y el receptor. Las personas suelen estar familiarizadas con las interfaces gráficas, pero existen otras formas de interacción que serán mostradas a continuación.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz gráfica")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img5.jpg', alt='Texto que describa la imagen' style='width: 122px').m-auto
          .col-xl-8
            h4 Interfaz gráfica
            p Permite visualizar la información en una pantalla. La mayoría de programas poseen una interfaz visual, que genera la interacción entre el usuario y el <i>software</i>, permitiendo así la visualización, introducción y manipulación de datos. 
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz de voz (VUI)")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz de voz (VUI)
            p Son programas desarrollados para identificar e interpretar el habla humana. Los ejemplos más claros que se encuentran en el mercado, actualmente, son <i>Siri</i> y <i>Cortana</i> que, utilizando inteligencia artificial, logran comprender órdenes y dar respuesta clara a las preguntas y consultas de los usuarios.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz de texto")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img7.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz de texto
            p Es una interfaz simple que, por medio de una pantalla o línea de comando, permite visualizar y entregar la información. Su uso, en la mayoría de los casos, se lleva a cabo en entornos de programación de bajo nivel o configuración y operación de sistemas operativos.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz natural")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img8.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz natural
            p Se utiliza para capturar e interpretar los movimientos del cuerpo humano convirtiéndolos en acciones que se interpretan como órdenes. Es muy popular en los videojuegos que permiten este tipo de interacción por medio de la interfaz <i>kinética</i>. También se está implantando en entornos de realidad virtual y realidad aumentada.
      .tarjeta.color-1-claro2.p-4(titulo="Interfaz Cerebro-Ordenador")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img9.jpg', alt='Texto que describa la imagen')
          .col-xl-8
            h4 Interfaz Cerebro-Ordenador
            p Es una tecnología relativamente nueva. Se están realizando muchas investigaciones al respecto especialmente en el ámbito médico, donde se utiliza con pacientes con prótesis biónicas y por medio de la captura de ondas cerebrales pueden dar instrucciones sencillas a un <i>software</i> conectado al <i>hardware</i>.
    #t_1_2.titulo-segundo
      h2 1.2 Historia de las interfaces
    .row.justify-content-between.mb-5
      .col-lg-6
        p El inicio de las interfaces gráficas se da en el mismo momento que los computadores personales se ofrecieron de manera comercial, en la década de los años 70; antes de esto sólo se utilizaba interfaz de texto que hacía el proceso de comunicación más tedioso, por su complejidad. Gracias al trabajo de <i>IBM, Microsoft y Apple</i>, en poco tiempo se lograron concebir unas herramientas gráficas que facilitaron la interacción con sus sistemas operativos y el <i>software</i> que se utilizaba en ese momento, utilizando la metáfora del escritorio de oficina como símil del entorno gráfico.
          br
          br
          |Los primeros productos de <i>Apple</i> y <i>Microsoft</i> e <i>IBM</i> contribuyeron en gran medida con las bases de diseño e interacción que aún son utilizadas, proponiendo al usuario un lenguaje claro y un entorno interactivo, basado en señales, íconos, hipervínculos y también en otras dinámicas que son propias y que representan las acciones del sistema informático. 
          br
          br
          |Se lograron, entonces, entornos de trabajo mucho más familiares y comprensibles para la gran mayoría de usuarios, pasando de tener una pantalla en negro y con una línea de texto de comando, a un entorno totalmente grafico e interactivo agradable que invita a la interacción.
      .col-lg-5: img(src="@/assets/curso/img10.jpg")(data-aos="flip-left")
    p.mb-5 Para tener mayor información sobre la historia y evolución de las interfaces de usuario, se le recomienda visitar el enlace siguiente: 
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.ps-5
              img(src="@/assets/curso/img11.svg" style="width:50px")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ps-5
                  h3.mb-1 Enlace web
                  p.text-small HISTORIA DE LAS INTERFACES | Sutori
                .col-sm-auto.pe-5
                  a.boton.color-acento-botones(:href="('https://www.sutori.com/story/historia-de-las-interfaces--NTbnEdSjkFagkT7KH42RZYF2')" target="_blank")
                    span Enlace Web
                    i.fas.fa-link

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
}
</script>

<style lang="sass" scoped>
.bg-gradient
  background:linear-gradient(180deg, rgba(77,208,225,1) 0%, rgba(3,155,229,1) 100%) !important
</style>
