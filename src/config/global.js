export default {
  global: {
    componenteFormativo:
      'Herramientas para el diseño y desarrollo móvil híbrido.',
    descripcionCurso:
      'En este componente el aprendiz se afianzará en conceptos fundamentales sobre herramientas de diseño, fortaleciendo bases para el desarrollo de una interfaz gráfica móvil, enfocada en el usuario. Se profundizará en los principios, estructuras y modelos gráficos funcionales para el desarrollo de una aplicación y reconocerá la naturaleza cambiante y evolutiva del desarrollo de aplicaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Interfaz',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interfaz de usuario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Historia de las interfaces',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño de interfaz para aplicaciones móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Legibilidad y contraste',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Retícula',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Color',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Íconos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Ícono de lanzamiento',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Usabilidad y funcionalidad de las aplicaciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Diseño centrado en el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Fases del diseño de las aplicaciones',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: ' Principios del diseño centrado en usuarios',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Técnicas para el diseño centrado en usuarios',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Ventajas del DCU',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Análisis jerárquico de tareas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Secuencia',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Perceptiva',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'La Hipermedia',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Estructuras de navegación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Dispositivos Y visualización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gothelf, J., Seiden, J., & López Manzano, J. (2014). Lean UX. Logroño: UNIR Editorial.',
    },
    {
      referencia:
        'Jacobson, I., Booch G., Rumbaugh, J.(2007). El lenguaje unificado de modelado: manual de referencia. Madrid: Pearson Educación',
    },
    {
      referencia:
        'Kendall, K., Kendall, J., & Kendall, J. (2011). Análisis y diseño de sistemas. México, DF: Pearson Educación.',
    },
    {
      referencia:
        'Klein, L. (2014). Experiencia de usuario para lean startups. Logroño: UNIR Editorial.',
    },
    {
      referencia:
        'Krug, S. (2015). No me hagas pensar, "actualización". Madrid: Anaya Multimedia.',
    },
    {
      referencia:
        'Pohl, K. & Rupp, C. (2011). Requirements engineering fundamentals. Santa Barbara, CA: Rocky Nook.',
    },
    {
      referencia:
        'Pressman, R., Campos Olguín, V., & Enríquez Brito, J. (2010). Ingeniería del software. México: McGraw-Hill.',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del software. México: Addison-Wesley',
    },
    {
      referencia:
        'Fernández Casado, Pablo E, 2019. Usabilidad web, teoría y uso. Bogotá, Madrid: Ediciones de la U, Ra-Ma Editorial.',
    },
    {
      referencia:
        'Luján Castillo, José Dimas, 2017. HTML5, CSS y Javascript. Crea tu web y apps con el estándar de desarrollo. Bogotá: Alfaomega Colombiana RC Libros.',
    },
    {
      referencia:
        'Recio García, Juan Antonio, 2018. HTML5, CSS3 y JQuery Curso práctico. Bogotá: Ediciones de la U.',
    },
  ],
  glosario: [
    {
      termino: 'Benchmarking',
      significado:
        'Se trata del proceso de creación, recopilación, comparación y de análisis de indicadores, que posibilite hacer medición del avance de los procesos y de las funciones de mayor importancia, dentro de una organización. Tales indicadores son conocidos como <i>“benchmarks”</i> y suelen servir como un estándar de éxito de las compañías.',
    },
    {
      termino: 'Estándar ISO 13407',
      significado:
        '<i>Human-centred design processes for interactive systems</i> [ISO99] constituye un marco que sirve de guía para conseguir el desarrollo de sistemas interactivos usables incorporando el DCU durante el ciclo de vida del desarrollo.',
    },
    {
      termino: 'Hipermedia',
      significado:
        'La hipermedia ayuda a hacer la designación del conjunto de métodos o de procedimientos del proceso de escritura, diseño o composición de contenidos que conforman soportes. Estos pueden ser: imágenes, videos, textos, audios, mapas y otros soportes emergentes, de información; así, lo que se obtiene como resultado, también, da la probabilidad de nuevas interacciones para los usuarios.',
    },
    {
      termino: 'Ley de Fitts',
      significado:
        'Hace referencia a la rapidez y precisión con que ocurre el movimiento de los músculos en los humanos, cuando se está apuntando a un objetivo físico. Esta ley de <i>fitts</i> es utilizada para, por ejemplo, modelar el acto de apuntar con la mano o los dedos y, en el contexto de los ordenadores, para apuntar o dirigir mientras se hace uso de un <i>mouse</i>.',
    },
    {
      termino: 'Navegabilidad',
      significado:
        'Es la facilidad con la que un usuario puede desplazarse por todas las páginas o ventanas que componen un sitio web o una App. Para lograr este objetivo, el sitio web o la aplicación debe proporcionar un conjunto de recursos y estrategias de navegación diseñados para conseguir un resultado óptimo en la localización de la información y en la orientación para el usuario.',
    },
    {
      termino: 'Pixel',
      significado:
        'Es la abreviatura de <i>Picture Element</i> y puede definirse como la unidad más pequeña de color que componen una imagen digital, ya sea una fotografía, vídeo o un fotograma.',
    },
    {
      termino: 'Skeumorfismo',
      significado:
        'Su definición estricta es objeto evolucionado/derivado que mantiene detalles del diseño del objeto original con el objetivo de hacerlo más familiar. Viene de las palabras en griego <i>skeuos</i> (herramienta o contenedor) y <i>morphe (shape)</i>.',
    },
  ],
  complementario: [
    {
      texto:
        'Diseño de materiales. Componentes de la interface gráfica para móviles. MATERIAL.IO. ',
      tipo: 'Página Web',
      link: 'https://material.io/components?platform=android',
    },
    {
      texto:
        'Campus Party. (2012). CPQuito2 - Principios de diseño de experiencia de usuario para Mobile [Video]. Youtube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vVZ2F89MiyI ',
    },
    {
      texto:
        'Jose Rafael Rojas B. (2021). Diseño y Desarrollo de Aplicaciones Móviles 01 – Introducción [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/2STnjpA8XQc ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor',
        centro: ' Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Edición y corrección de estilo',
        centro:
          'Centro para la industria de la Comunicación gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ospina   ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
