import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'no-console': 'off',
    'curly': ['error', 'multi-line'],
    'style/comma-dangle': ['error', 'never']
  }
})
