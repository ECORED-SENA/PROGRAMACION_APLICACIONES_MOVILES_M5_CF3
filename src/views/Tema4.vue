<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Diseño centrado en el usuario
    .row.mb-5
      .col-lg-7
        p Contar con información previa sobre las necesidades de consumo, estilos y tendencias en el plano tecnológico, entre otras, son factores clave en el diseño centrado en el usuario.
          br
          br
          |Esta información es relevante para la fase de producción y soluciones de diseño. En ella, por ejemplo, se determina cómo será la estructura principal de la aplicación, definiendo cada una de las funciones y tareas que debe realizar la aplicación móvil para cumplir con los requerimientos solicitados e identificados con el cliente o los usuarios.
      .col-lg-5
        img(src="@/assets/curso/img38.jpg")(data-aos="slide-left")
        figcaption Nota. https://bit.ly/3qZQGyq
    #t_4_1.titulo-segundo
      h2 4.1 Fases del diseño de las aplicaciones
    p.mb-5 Existen cuatro fases establecidas para el diseño de aplicaciones móviles, definidas por la norma ISO 13407, que integran el proceso del DCU, diseño centrado en el usuario y que están, además, concebidas bajo seis principios que deben caracterizar una interfaz centrada en el usuario. Las dos primeras fases tienen especial intención de documentar las necesidades y requerimientos del usuario.
    figure.mb-5
      img(src='@/assets/curso/img39.jpg', alt='Texto que describa la imagen')(data-aos="zoom-in-up")
      figcaption Nota. https://bit.ly/3hNyDXS
    .row.mb-3
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0 Comprender y hacer específico el contexto de uso. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0 Especificar los requisitos de usuario y de la organización.
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0 Producir soluciones de diseño.
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0 Evaluar los diseños en base a los requisitos.
    #t_4_2.titulo-segundo
      h2 4.2 Principios del diseño centrado en usuarios
    p.mb-5 Los seis principios que deben caracterizar una interfaz centrada en el usuario apuntan, sin lugar a dudas, a una satisfacción plena del usuario con las aplicaciones que tenga a su disposición.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 6 
        | <i>Principios Que Caracterizan Al DCU</i>
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        h4.text-center Diseño centrado en el usuario
        figure
          img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen')
          figcaption Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
      .tarjeta.color-secundario.p-3(x="44%" y="25%")
        .h5.mb-0.text-center Planificación
      .tarjeta.color-secundario.p-3(x="58%" y="20%")
        .h5.mb-0.text-center Evaluación
      .tarjeta.color-secundario.p-3(x="42.7%" y="40%")
        .h5.mb-0.text-center Especificación de requisitos
      .tarjeta.color-secundario.p-3(x="54.2%" y="46%")
        .h5.mb-0.text-center Cumple con los requerimientos 
      .tarjeta.color-secundario.p-3(x="39.2%" y="61%")
        .h5.mb-0.text-center Especificación del contexto de uso
      .tarjeta.color-secundario.p-3(x="60%" y="70%")
        .h5.mb-0.text-center Genera la solución del diseño
    p.mb-5 Esta responsabilidad con las personas que hacen uso de los teléfonos inteligentes y los servicios de las aplicaciones responde, además, a las demandas de la dinámica de consumo actual, a la creciente oferta de servicios que conectan a los individuos con el mundo, con las otras personas, con sus intereses y que, entre otras, dinamizan y facilitan su vida y actividades diarias.
    #t_4_3.titulo-segundo
      h2 4.3 Técnicas para el diseño centrado en usuarios
    p.mb-5 Conocer y comprender las necesidades, limitaciones, comportamiento y características del usuario, sumado al modelo de las tres etapas; análisis, diseño y evaluación, desarrollado en cuatro fases específicas, ya mencionadas, abren la puerta para considerar las técnicas para un óptimo diseño de aplicaciones centradas en el usuario.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Figura 7 
        | Técnica por fases para el desarrollo de un diseño centrado en el usuario
    .row.mb-5.justify-content-center
      .col-lg-8
        h4.text-center Proceso del DCU y las técnicas por fases
        img(src="@/assets/curso/img41.jpg")
      figcaption.mt-3 Nota. Presentación Introducción Al Desarrollo De Aplicaciones Móviles. (2020)
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Conocimiento directo y real")
        .col-md-4
          figure
            img(src='@/assets/curso/img42.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El diseño se centra en el conocimiento directo y real de los usuarios las tareas a realizar y el entorno. Es preciso comprender a los usuarios, conocer lo que quieren hacer con el sistema y comprender el entorno en el que se va a utilizar el sistema. 
      .row(titulo="Usuarios involucrados")
        .col-md-4
          figure
            img(src='@/assets/curso/img43.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Los usuarios son partícipes a través del diseño y desarrollo. Este principio permite que el equipo de trabajo involucre de manera directa a los usuarios en todas las fases, no solo en la ejecución de un <i>focus group</i> en el inicio del diseño o mediante la aplicación de una encuesta al final de la implementación sino durante todo el proceso de desarrollo. 
      .row(titulo="Evaluación centrada en el usuario")
        .col-md-4
          figure
            img(src='@/assets/curso/img44.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El diseño es depurado y pulido por la evaluación centrada en el usuario. Las pruebas deben llevarse durante todo el transcurso de diseño, por lo que también sirve para probar diseños preliminares, como prototipos en papel. 
      .row(titulo="Proceso interactivo")
        .col-md-4
          figure
            img(src='@/assets/curso/img45.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es complejo que los usuarios manifiesten de manera clara y sencilla lo que quieren de un sistema. Por esa razón para definir lo que requieren los usuarios, se debe mostrar algo que probablemente no quieren y luego, se irá expresando cómo mejorarlo.
      .row(titulo="Consideración de emociones del usuario")
        .col-md-4
          figure
            img(src='@/assets/curso/img46.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El diseño se debe ocupar de toda la experiencia del usuario. Este principio indica que el diseño ya no solo busca hacer a la interfaz usable y simple, sino que debe comprender los aspectos de percepción y emoción agrupados a la experiencia del usuario.
      .row(titulo="Participación de expertos")
        .col-md-4
          figure
            img(src='@/assets/curso/img47.svg', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p El equipo de diseño incluye habilidades y perspectivas multidisciplinares. Los conocimientos del diseñador y del programador no son los únicos necesarios para el correcto funcionamiento de la aplicación; se debe incluir la opinión de expertos en accesibilidad, el equipo de marketing, escritores técnicos, y especialmente la de los usuarios finales.
    #t_4_4.titulo-segundo
      h2 4.4 Ventajas del DCU
    p.mb-5 El diseño por fases y la observancia de los principios del diseño centrado en el usuario, favorecen un alto nivel de cumplimiento de expectativas no sólo para quien hace uso de las aplicaciones y sus servicios sino también para las compañías u operadores que las ofrecen. Sin embargo, hay algunas ventajas que se presentan con anterioridad a la oferta y uso de la aplicación móvil.
    .titulo-sexto.color-acento-contenido
      h5.fw-normal 
        b Tabla 6 
        | <i>Ventajas del diseño centrado en el usuario</i>
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-1-claro.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img48.svg' alt='AvatarTop' style='width: 94px').mb-4
          h3 Indagación
          p La indagación se realiza en la etapa de Especificación del contexto de uso y de los requisitos contextualizando el uso e identificando los requerimientos. Está enfocada en el levantamiento de información que permita definir las características principales del producto o servicio se trabaja con los métodos cualitativos de observación, entrevistas, dinámicas de grupo y métodos cuantitativos encuestas y cuestionarios. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-3-claro.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img49.svg' alt='AvatarTop' style='width: 94px').mb-4
          h3 Diseño conceptual
          p El diseño conceptual parte de la recolección y análisis realizado en la indagación 
            br
            |Permite entender y analizar las características de los  usuarios y sus necesidades definiendo el uso que le darán a la aplicación móvil es importante esta información porque permite orientar el diseño que se debe implementar para suplir la necesidad.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-2-claro.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img50.svg' alt='AvatarTop' style='width: 94px').mb-4
          h3 Diseño de prototipos
          p En esta fase se elaboran los prototipos de baja y alta resolución. Son actividades propias de los diseñadores, estos diseños permiten visualizar la solución de la interfaz. En este punto son relevantes los conocimientos sobre comunicación, semiótica y retórica.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-4-claro.w-100.p-4.h-100.hover-transform
          img(src='@/assets/curso/img51.svg' alt='AvatarTop' style='width: 94px').mb-4
          h3 Inspección y test
            br
            |con usuarios
          p Se utilizan las pruebas de usabilidad y test de navegación aplicados a los usuarios que permiten obtener información sobre los diseños para mejorarlos y validarlos.
    h3 B. <i>Words connected with tourism</i> // Términos relacionados con el turismo
    p.mb-5 A continuación, se podrán revisar diversos términos que se utilizan con frecuencia en el área del turismo:

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

<style lang="sass" scoped>
.h5
  color: $color-sistema-texto
</style>
