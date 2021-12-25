export default {
  global: {
    componenteFormativo: 'Creatividad y estrategia emprendedora',
    descripcionCurso:
      'El emprender en cualquier situación plantea una serie de retos, dos aspectos esenciales son la creatividad e innovación para generar ideas que permitan encontrar nuevos caminos y maneras de solucionar diversas necesidades; pero ¿cómo se hace?, es necesario trazar una estrategia, es decir un conjunto de acciones, que alineadas entre sí, conllevan al logro de la meta.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
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
        titulo: 'Juventud capacidad creativa e innovadora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos y niveles',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Design thinking',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estrategia emprendedora juvenil',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos de una estrategia',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Diseño de un plan de acción',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
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
        'Benet, M. (21 de febrero de 2017). 5 aspectos en los que aplicar el design thinking. Sociedad de la innovación.',
      link:
        'https://www.sociedaddelainnovacion.es/5-aspectos-los-aplicar-design-thinking/',
    },
    {
      referencia:
        'Blooming potential educational consulting. (8 de febrero de 2016). La visión, cómo construir una vida con propósito.',
      link: 'https://www.youtube.com/watch?v=i9jaUL9dJJw',
    },
    {
      referencia:
        'Denkmodell. (2019). Manual Design Thinking. Publicación inédita.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, R., Martínez, L., Gómez, M., García, G., Caycedo, M. (2020).',
      link: '',
    },
    {
      referencia:
        'Niño, C. (2019). Empaques frutas en polvo y trozos. [fotografías].',
      link: '',
    },
    {
      referencia:
        'Organización de Cooperación y Desarrollo Económicos (OCDE). (2018).',
      link: '',
    },
    {
      referencia: 'Significados, s.f. Qué es estrategia.',
      link: 'https://www.significados.com/estrategia',
    },
  ],
  glosario: [
    {
      termino: 'Creatividad',
      significado:
        'Es la generación de ideas útiles y novedosas que tengan valor.',
    },
    {
      termino: 'Capacidad creativa',
      significado:
        'Conjunto de recursos y aptitudes que tiene un individuo para generar ideas.',
    },
    {
      termino: 'Design thinking',
      significado:
        'Proceso creativo que consiste en definir el problema que se pretende abordar para entenderlo y posteriormente, implementar las soluciones, siempre enfocando el proceso hacia las necesidades del usuario y generando valor. (Benet, 2017)',
    },
    {
      termino: 'Estrategia',
      significado:
        'Estrategia es un plan para dirigir un asunto. Una estrategia se compone de una serie de acciones planificadas que ayudan a tomar decisiones y a conseguir los mejores resultados posibles.  La estrategia está orientada a alcanzar un objetivo siguiente una pauta de actuación. (Significados, s.f.)',
    },
    {
      termino: 'Innovación',
      significado:
        'Poner las ideas en acción. Introducción de algo nuevo o una novedad que añade valor a un mercado, organización o sociedad.',
    },
    {
      termino: 'Plan',
      significado:
        'Un plan es una intención que se formula a corto o mediano plazo, se elabora antes de realizar una acción con el objetivo de dirigirla y viabilizarla.',
    },
    {
      termino: 'Producto/servicio',
      significado:
        'Productos materiales o servicios intangibles, que satisfacen las necesidades de los usuarios y que, por lo tanto, son adquiridos por ellos.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo SENA',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mónica Bibiana Gallego Madrid',
        cargo: 'Diseñador Instruccional Fundación CA',
        centro: 'Fundación CA',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo SENA',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhoana Hincapie Herrera',
        cargo: 'Diseño y desarrollo Fundación CA',
        centro: 'Fundación CA',
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
