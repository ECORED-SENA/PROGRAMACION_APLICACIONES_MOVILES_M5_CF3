<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Diseño De Interfaces Para Aplicaciones Móviles
    p.mb-5 Con base en la teoría que fundamenta la creación de interfaces gráficas para páginas web y aplicaciones móviles (Vilchis, 1999) el diseño y la comunicación gráfica buscan proyectar los mensajes que el ser humano requiere para generar y establecer un orden jerárquico, estructural y significativo. Por esa razón se hace uso de los denominados códigos visuales, los cuales permiten estructurar, de manera lógica y significativa, grupos de elementos con los que se representan los mensajes visuales. Se pueden, según Vilchis, establecer seis códigos visuales: 
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Tabla 2 
        | Códigos más Comunes para el Diseño de Interfaces Gráficas
    .tarjeta1.color-3-claro.bfaf.p-3(data-aos="flip-up")
      SlyderA.px-5
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 El código morfológico
            p Son los elementos gráficos  que el diseñador usa para generar las estructuras y el lenguaje gráfico que utilizará en el entorno, algunos en su forma más básica ya están predefinidos y son comprendidos; estos pueden ser figuras geométricas, regulares, etc. ejemplo  IPhone distancia y forma de los iconos. 
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img13.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 El código cromático
            p Enmarca los esquemas de color que se utilizan en determinados diseños. Encierra la selección de intensidad, contraste, luminosidad y demás atributos que contienen la cromaticidad. 
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img14.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 El código tipográfico
            p Se entiende como las propiedades y atributos de los textos y sus caracteres, determinando las particularidades tales como tamaño forma peso orientación. 
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 El código fotográfico
            p Define las imágenes y fotografías que serán trabajadas y abordadas bajo el mismo patrón, determinadas por el tipo de toma, por el encuadre y por las escalas, entre otras.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 Códigos Visuales
            p Los códigos visuales están compuestos por todos los elementos mencionados anteriormente pero ya integrados y estructurados bajo un estilo particular alfabeto, tipografía, iconos, esquemas, ilustración, fotografía.
        .row.m-5.align-items-center
          .col-md-3
            figure
              img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen')
          .col-md-9.mb-4.mb-md-0
            h4 Códigos Secuenciales
            p Está compuesto por animaciones, video, zonas sensibles, estructuras de interacción.
    figcaption.mt-3.mb-5 Nota. https://bit.ly/3AIoC6X
    p.mb-5 En este mismo sentido y habiendo conocido los elementos gráficos más utilizados, es importante comprender cómo deben ser distribuidos en el espacio de trabajo, con el fin de realizar una correcta organización de los elementos necesarios para una buena visualización y navegabilidad.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 1
        | Contraste De Color
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-7: img(src="@/assets/curso/img18.jpg")
    p.mb-5 La “ley de la buena forma”, demuestra que las personas usuarias buscan establecer su apreciación de la manera más clara y simple posible, minimizando todo a formas constantes y sencillas. Por esta razón los usuarios interpretan mejor lo que está sucediendo y el mensaje que se está ofreciendo en la interfaz si la información está organizada en formas sencillas.
    .row.mb-5.justify-content-center
      .col-lg-7
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Las organizaciones en estructuras simples y jerarquizando los elementos de la interfaz, contribuyen a que el usuario pueda organizar y comprender mejor la información. Esto favorece la toma de decisiones para realizar una tarea. La utilización del contraste de color, por ejemplo, logra separar grandes bloques de información.
            i.fas.fa-quote-right
          p.text-end Según Sosa y Siegel (2015)
    #t_2_1.titulo-segundo
      h2 2.1 Legibilidad y Contraste
    p.mb-5 Es importante definir los colores y los tamaños del texto, al momento de realizar una lectura; el contraste debe permitir realizar esta actividad con facilidad. También se deben considerar temas como interlineados, espacios, entre otras, para realizar una lectura cómoda y fácil.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 2
        | Contraste 
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-5: img(src="@/assets/curso/img19.jpg")
      figcaption Nota. Adaptado de Cuello y Vittone (2013)
    .row.mb-5
      .col-lg-4.col-md-5.col-sm-6.col-xs-auto: img(src="@/assets/curso/img20.svg").mb-4(data-aos="slide-right")
      .col-lg-8.col-md-7.col-sm-6.col-xs-auto(data-aos="slide-left")
        h4 Manejo y estructura de la información
        p Es fundamental el manejo de la organización de la información, de manera jerárquica iniciando con los títulos, los subtítulos, los pies de foto y algunos otros tipos de textos. Deben tener, desde luego, variadas configuraciones que permitan distinguir un texto de otro, de forma sencilla y que, también, sean de fácil reconocimiento para el usuario. Todos los elementos utilizados en la aplicación como los textos, los gráficos, íconos y todos los elementos adicionales, deben tener una consistencia y equilibrio, favoreciendo así la consistencia de estilo al sistema.
    .row.mb-5
      .col-lg-4.col-md-5.col-sm-6.col-xs-auto: img(src="@/assets/curso/img21.svg").mb-4(data-aos="slide-right")
      .col-lg-8.col-md-7.col-sm-6.col-xs-auto(data-aos="slide-left")
        h4 Familias tipográficas
        p De acuerdo con Sosa y Siegel (2015): 
          br
          |Entre más completa esté una familia tipográfica se tendrá un mayor campo de acción, ya que se dispondrá de más variantes que se adecuen a textos largos, títulos, números en el cuerpo del texto, números en encabezados, pies de página, etcétera, estableciendo así los niveles jerárquicos dentro de la interfaz gráfica de usuario.
    .row.mb-5
      .col-lg-4.col-md-5.col-sm-6.col-xs-auto: img(src="@/assets/curso/img22.svg").mb-4(data-aos="slide-right")
      .col-lg-8.col-md-7.col-sm-6.col-xs-auto(data-aos="slide-left")
        h4 Tipografías limpias
        p Cuello y Vittone (2013): 
          br
          |Recomiendan el uso de tipografías limpias abiertas como por ejemplo la fuente llamada sans-serif, porque es mucho más fácil visualizarlas dentro de las pequeñas pantallas que proporcionan los Smartphones para la realización de lecturas largas.
        a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true")
          span Tipo y Tamaño de Fuente
          .indicador--click(v-if="mostrarIndicador")
      ModalA(:abrir-modal.sync="modal1")
        .row.justify-content-center
          .col-lg-5.mb-4
            img(src="@/assets/curso/img30.svg")
    .row.mb-5
      .col-lg-4.col-md-5.col-sm-6.col-xs-auto: img(src="@/assets/curso/img23.svg").mb-4(data-aos="slide-right")
      .col-lg-8.col-md-7.col-sm-6.col-xs-auto(data-aos="slide-left")
        h4 Tamaño de tipografía en cada S.O
        p El tamaño de la tipografía se mide en scaled Pixels o píxeles escalados; el tamaño utilizado en aplicaciones móviles va desde 12sp hasta 22sp. Es así como los títulos principales podrían medir hasta 34px. De esta manera, el tamaño en las etiquetas, dentro de botones importantes, es de 28px, aproximadamente. Partiendo de allí, va en disminución jerárquicamente hasta alcanzar el tamaño más pequeño que es muy cercano a los 14px. No obstante, la recomendación es no usar dimensiones que sean inferiores a los 20px en los textos que sean de lectura. 
    #_2_2.titulo-segundo
      h2 2.2 Retícula
    .row.mb-5.justify-content-between
      .col-lg-5
        p De acuerdo 
          br
          |Estos elementos se utilizan para determinar la zona donde estará ubicada la información. Define las áreas y la división del espacio disponible, estableciendo las proporciones espacios y tamaños que tendrán los diferentes componentes de la interfaz. 
          br
          br
          |Una retícula bien estructurada permite asegurar que los elementos contenidos podrán ser accedidos y tocados con el dedo de forma clara y sin problemas. Este es un tema fundamental para el correcto funcionamiento de la aplicación; definir correctamente el espacio de contacto de cada elemento dentro de la pantalla. Se debe, entonces, usar para el espaciado y la separación, un módulo de 8dp. En los márgenes laterales es muy común tener 16dp.
      .col-lg-3
        .titulo-sexto.color-acento-contenido
          h5.fw-normal 
            b Figura 4 
            | Retícula Organización De Contenidos
        img.d-block(src="@/assets/curso/img24.jpg" style="width: 255px").m-auto
        figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
      .col-lg-3
        .titulo-sexto.color-acento-contenido
          h5.fw-normal 
            b Figura 5  
            | Márgenes y Tamaños de Elementos Gráficos
        img.d-block(src="@/assets/curso/img25.jpg").m-auto
        figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020) 
    #t_2_3.titulo-segundo
      h2 2.3 Color
    p.mb-5 Cuello y Vittone (2013) definen los colores en categorías. Especialmente en el diseño gráfico para páginas web y aplicaciones móviles se utilizan, sobre todo, los llamados colores reservados que son: el rojo, el amarillo y el verde; incluyendo los colores señaléticos como el blanco, negro y azul. Estos colores tienen la particularidad que son, al mismo tiempo, color y signo porque implican, bajo su propio contexto, un significado.
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img26.svg' alt='AvatarTop').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-rojo.w-100
            .p-4.text-center
              h2 Rojo
              p Se utiliza para identificar errores y generar alertas importantes; consecuentemente indica peligro y esta tonalidad llama la atención rápidamente. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img27.svg' alt='AvatarTop').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-amarillo.w-100
            .p-4.text-center
              h2 Amarillo
              p Se emplea para indicar prevención; marca que las actividades a desarrollar o la acción a realizar implica la toma de una decisión que tendrá una consecuencia, generando una alerta al usuario. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img28.svg' alt='AvatarTop').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-verde.w-100
            .p-4.text-center
              h2 Verde
              p Se utiliza especialmente para mostrar mensajes de éxito y revalidación, indicando que una acción o actividad se ha realizado correctamente.
    #t_2_4.titulo-segundo
      h2 2.4 Ícono
    p.mb-5 Los íconos son los elementos más utilizados en el ámbito del desarrollo de aplicaciones móviles ya que, por su tamaño y composición, permiten una fácil ubicación e interacción. Estos deben ser diseñados cuidadosamente para que las visualizaciones transmitan el mensaje correcto y el usuario entienda, de manera intuitiva, su intencionalidad. Pierce categorizó a los signos en tres grupos: los íconos, los índices y los símbolos.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Tabla 3 
        | Los íconos, los índices y los símbolos
    figure.mb-5(data-aos="flip-up")
      img(src='@/assets/curso/img29.svg' alt='Infografia').mb-3
      figcaption Nota. https://bit.ly/3wr4sLA
    p.mb-5 Habría que agregar también que los íconos son un lenguaje de signos y diseñar un signo implica, semióticamente, tres dimensiones. Según Royo (2004), estas dimensiones son:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-1-claro2.p-4(titulo="Dimensión Semiótica")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img31.jpg', alt='Texto que describa la imagen').m-auto
          .col-xl-8
            h4 Dimensión Semiótica 
            p Es la relación directa de la imagen con su significado explícito. Existe una relación directa entre el ícono, la imagen y el mensaje. Como, por ejemplo: la papelera de reciclaje.
      .tarjeta.color-1-claro2.p-4(titulo="Dimensión semántica")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img32.jpg', alt='Texto que describa la imagen').m-auto
          .col-xl-8
            h4 Dimensión semántica
            p Define un sistema visual en el cual todos los elementos están relacionados y permite identificarlos como una sola estructura.
      .tarjeta.color-1-claro2.p-4(titulo="Dimensión funcional")
        .row
          .col-xl-4.mb-4
            figure
              img(src='@/assets/curso/img33.jpg', alt='Texto que describa la imagen').m-auto
          .col-xl-8
            h4 Dimensión funcional
            p Busca relacionar el icono con la utilidad que el usuario puede identificar, relacionando su significado de manera directa. Respondiendo  a qué tan legible es el ícono para los usuarios y la acción a gestionar.
    #t_2_5.titulo-segundo
      h2 2.5 Ícono de lanzamiento
    .row.mb-5
      .col-lg-7
        p.mb-5 Se propone el ícono de lanzamiento como el símbolo que identifique a la aplicación. Este ícono será el referente gráfico que relaciona a los usuarios con el producto. Es de suma importancia generar un elemento gráfico con la mejor definición simbólica posible, que sea distintiva, que tenga elementos de originalidad, que también favorezca hacer distinción de la app con respecto a las demás, que tenga visibilidad y resalte en el stock de la tienda de descargas y en la lista de aplicaciones que hayan sido instaladas, por el usuario, en su teléfono inteligente. 
        .cajon.color-acento-contenido.p-4.mb-4
          p En definitiva, las características de orden visual, han de comunicar expresa y efectivamente, el objetivo principal que tenga la aplicación y el estilo que define a la aplicación.
      .col-lg-5: img(src='@/assets/curso/img34.jpg', alt='Texto que describa la imagen')


















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
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
.tarjeta1
  border-radius: 10px
  position: relative
  &:before
    content: ""
    position: absolute
    height: 100%
    width: 85px
    top: 0
    left: 0
    border-radius: 10px 0px 0px 10px
    background-color: $color-acento-contenido
  &:after
    content: ""
    position: absolute
    height: 100%
    width: 85px
    top: 0
    right: 0
    border-radius: 0px 10px 10px 0px
    background-color: $color-acento-contenido
.bloque-texto-b
  &:before
    background-color: #D2F3F8 !important
.bg-rojo
  background-color: #FCB9B9
.bg-amarillo
  background-color: #FEECB6
.bg-verde
  background-color: #B7FCB5
</style>
