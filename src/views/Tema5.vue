<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis jerárquico de tareas
    .row.mb-5.justify-content-between 
      .col-lg-7
        p El análisis jerárquico de tareas <i>HTA</i>, por sus siglas en inglés: <i>Hierarchical Task Analysis</i>, permite establecer y describir las acciones por realizar, paso a paso, de manera secuencial, identificando y describiendo cada una de las tareas y actividades, enfocando en las operaciones y procedimientos. 
          br
          br
          |Se prevé que, con el cumplimiento de una serie de tareas concretas, las personas, programas u organizaciones alcanzarán el logro de determinado objetivo o meta. Así mismo, el análisis jerárquico de tareas contempla la creación de un entorno suficiente y válido para poder ejecutar las acciones planeadas. El diseño de aplicaciones móviles, el desarrollo de la interfaz y todos los demás elementos que integran el proceso de programación de las mismas no escapa a este <i>HTA</i>.
      .col-lg-4
        img(src="@/assets/curso/img52.svg")
        figcaption Nota. https://bit.ly/3qWtctJ
    #t_5_1.titulo-segundo
      h2 5.1 Secuencia
    p.mb-5 Una secuencia es un conjunto de elementos que se ordenan en una determinada sucesión, unos detrás de otros o unos delante de otros. Estas secuencias, por lo general, se presentan como un conjunto de información ordenada. En ese sentido, se habla de tres variables de una secuencia: Selección, Interacción y Tarea unitaria. La primera de ellas, la Selección se refiere a cuando dentro de un conjunto de tareas se tiene que elegir una de ellas; por su parte, la Iteración tiene que ver con la repetición de un subconjunto de tareas y, finalmente la Tarea unitaria se trata de una actividad única que no tiene actividades subordinadas.
      br
      br
      |En el marco de la programación de aplicaciones para dispositivos móviles, la Secuencia busca responder:
    .row.mb-3
      .col-md-6.col-xl.mb-4.mb-xl-0.align-items-center.d-flex
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.px-5.py-3.w-100.h-100.align-items-center.d-flex
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 
            b Necesidad de información concreta.
            br
            b Por ejemplo: 
            span.sp-1.fw-bold “¿Qué costo tiene este producto?”
      .col-md-6.col-xl.mb-4.mb-xl-0.align-items-center.d-flex
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.px-5.py-3.w-100.h-100.align-items-center.d-flex
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 
            b Necesidad de información orientada a problemas.
            br
            b Por ejemplo: 
            span.sp-1.fw-bold “¿Cuál es la relación entre la usabilidad y la arquitectura de información?” 
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0.align-items-center.d-flex
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.px-5.py-3.w-100.h-100.align-items-center.d-flex
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 
            b Necesidad de información exploratoria.
            br
            b Por ejemplo: 
            span.sp-1.fw-bold “Quiero escoger un buen hotel para este fin de semana”
      .col-md-6.col-xl.mb-4.mb-xl-0.align-items-center.d-flex
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-primario.px-5.py-3.w-100.h-100.align-items-center.d-flex
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0 
            b Necesidad de información sobre búsquedas previas
            |, es decir, localizar información que ya había localizado previamente.
    .row
      .col-auto
        a.boton.color-acento-botones.mb-5.indicador__container(@click="modal1 = true")
          span Análisis Jerárquiqo de Tareas
          .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-md-12.mb-4.mb-md-0: img(src="@/assets/curso/img53.svg")
    #t_5_2.titulo-segundo
      h2 5.2 Perceptiva
    p.mb-5 La perceptiva se refiere a todos los elementos que hacen parte de la configuración del entorno, como los colores, las tipografías, logotipos y demás elementos gráficos que componen la interfaz. La perceptiva puede ser funcional, jerárquica o secuencial. Funcional, en tanto la atribución del rol que juegan dichos elementos, es decir, para qué sirven. Jerárquica porque busca distinguir cuáles son prescindibles y cuáles esenciales dentro del grupo de actividades. Por último, será secuencial en tanto toma información del flujo normal y lógico del proceso, permitiendo precisar al usuario una secuencia para lograr la realización de una actividad.
      br
      br
      |Estos son los pasos básicos para realizar una estructura o una arquitectura de información: 
    .row
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img54.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              h3 Revisión del material previo
              p Una exploración de los requerimientos y una investigación de los productos que se asimilen al producto a diseñar.  En palabras de Norman (1990): “las pistas acerca de cómo funcionan las cosas proceden de su estructura visible: en particular de sus prestaciones y limitaciones y de su topografía”.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img55.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              h3 Identificación de objetos
              p Es importante identificar cada uno de los componentes gráficos y de información que contendrá la aplicación móvil, generando una lista ordenada y clasificada por elementos a utilizar.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img56.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              h3 Evaluación del contenido
              p Es fundamental realizar una revisión previa de los objetos clasificados generando un inventario que servirá también como un repositorio de los elementos que componen el diseño.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/img57.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.d-flex.align-items-center
            .p-4
              h3 Aplicar la técnica de <i>card sorting</i>
              p Los resultados de esta técnica suelen ser representados en dendrogramas. Es una representación gráfica o diagrama de datos, en forma de árbol, que organiza los datos en subcategorías que se van dividiendo en otras hasta llegar al nivel de detalle deseado.
    #t_5_3.titulo-segundo
      h2 5.3 La hipermedia
    .row.mb-5
      .col-lg-6
        .color-4-claro.p-5
          p.fw-bold La hipermedia es entendida como una estructura ligada a la recuperación de la información y al diseño de los sistemas de búsqueda, de ayuda y de navegación; estos sistemas son las estrategias con las que el usuario cuenta para localizar la información y asimilar, y luego reformular su necesidad, hasta que considere que ha quedado resuelta.
      .col-lg-6: img(src="@/assets/curso/img57.jpg")
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img58.svg' alt='AvatarTop' style='width: 144px').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-4-claro.w-100
            .p-4.text-center
              h2 Búsqueda
              p El usuario utiliza la opción de búsqueda y analiza e interacciona con los resultados.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img59.svg' alt='AvatarTop' style='width: 144px').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-3-claro.w-100
            .p-4.text-center
              h2 Navegación
              p Se presenta cuando el usuario explora utilizando los enlaces hipertextuales.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          img(src='@/assets/curso/img60.svg' alt='AvatarTop' style='width: 144px').m-auto
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-4-claro.w-100
            .p-4.text-center
              h2 Ayuda
              p Es importante generar herramientas que permitan al usuario recurrir por una asistencia que le permita   solicitar una orientación y le señala en dónde se encuentra el contenido que necesita o cuál es el procedimiento a seguir para lograr un objetivo. 
</template>

<script>
export default {
  name: 'Tema3',
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
.sp-1
  color: $color-primario
</style>
