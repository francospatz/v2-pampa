/* module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-nested': {
      unwrap: ['screen'],
    },
    tailwindcss: {},
    autoprefixer: {},
  },
} */

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-nested': {
      unwrap: ['screen'],
    },
    tailwindcss: {},
    autoprefixer: {},
  }
}