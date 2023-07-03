/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
  
}

module.exports = {
  // ...
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}

module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
}

module.exports = {
  // ...
  presets: [
    require('@acmecorp/base-tailwind-config')
  ],

  // Project-specific customizations
  theme: {
    //...
  },
}

module.exports = {
  prefix: 'tw-',
}

module.exports = {
  important: true,
}

module.exports = {
  // ...
  important: '#app',
}

module.exports = {
  separator: '_',
}

module.exports = {
  corePlugins: {
    float: false,
    objectFit: false,
    objectPosition: false,
  }
}

module.exports = {
  corePlugins: [
    'margin',
    'padding',
    'backgroundColor',
    // ...
  ]
}
module.exports = {
  corePlugins: []
}




