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
