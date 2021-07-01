export default {
    target: 'static',

    head: {
      title: 'Školení nás baví',
      htmlAttrs: {
        lang: 'cs'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.png' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'},
        { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'},
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.6.0.slim.min.js', body: true },
        { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', body: true },
        { src: '/js/main.js', body: true }
      ]
    },

    css: [
      '~/assets/css/style.css'
    ],
  }