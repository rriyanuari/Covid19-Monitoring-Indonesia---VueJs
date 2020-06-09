/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {},
  variants: {},
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-monokai-black': {
          color: '#282C34',
        },
        '.text-monokai-red': {
          color: '#F92672',
        },
        '.text-monokai-green': {
          color: '#A6E22E',
        },
        '.text-monokai-blue': {
          color: '#66D9EF',
        },
        '.text-monokai-orange': {
          color: '#FD971F',
        },
        '.text-monokai-purple': {
          color: '#AE81FF',
        },
        
        '.bg-monokai-black': {
          background: '#282C34',
        },
        '.bg-monokai-red': {
          background: '#F92672',
        },
        '.bg-monokai-green': {
          background: '#A6E22E',
        },
        '.bg-monokai-blue': {
          background: '#66D9EF',
        },
        '.bg-monokai-orange': {
          background: '#FD971F',
        },
        '.bg-monokai-purple': {
          background: '#AE81FF',
        },

      }

      addUtilities(newUtilities)
    })
  ]
}
