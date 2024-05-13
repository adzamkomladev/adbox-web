const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '20': 'repeat(20, minmax(0, 1fr))'},
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        black: {
          900: '#000000', //LIGHT L1 TEXT
          800: '#0A0A0A',
          700: '#282828',
          850: '#383838', //LIGHT L2 TEXT
          600: '#2E2E2E',
          500: '#505050',
          400: '#666666',
          300: '#787878',
          200: '#8c8c8c',
          100: '#a0a0a0',
          60:'#EDEDED',
          40:'#F2F2F2', //LIGHT HOVERS
          20:'#FAFAFA', //LIGHT L2 BG
          0:"#FFF"      //LIGHT L1 TEXT
        },
        dim: {
          0:'#085ecc',
          100: '#0755b8',
          200: '#064ba3',
          300: '#06428f',
          400: '#05387a',
          500: '#085ECC',
          600: '#042f66',
          700: '#032652',
          800: '#021c3d',
          900: '#010d1d',
          'full':'#010914'
        },
        sky:{
          100: '#e6effa',
          200: '#cedff5',
          300: '#b5cff0',
          400: '#9cbfeb',
          500: '#84afe6',
          600: '#6b9ee0',
          700: '#528edb',
          800: '#397ed6',
          900: '#216ed1',

        },
        ekos:{
          0: '#cfc2ef',
          100: '#cfc2ef',
          200: '#b09ae5',
          300: '#9071da',
          400: '#7049d0',
          500: '#7049d0',
          600: '#572fb6',
          700: '#44258e',
          800: '#301a65',
          900: '#1d103d',
          'full': '#0a0514'
        },
        moon:{
          100: '#fff0e3',
          200: '#1c0e00',
          300: '#ffb671',
          400: '#ff9939',
          500: '#ff7b00',
          600: '#c66000',
          700: '#8e4400',
          800: '#552900',
          900: '#1c0e00',
        },
        red:{
          100: '#ffe5e5',
          200: '#ffb3b3',
          300: '#ff8080',
          400: '#ff4d4d',
          500: '#ff1a1a',
          600: '#e60000',
          700: '#b30000',
          800: '#800000',
          900: '#4d0000',
          'full': '#1a0000'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};
