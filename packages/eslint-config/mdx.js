module.exports = {
  'extends': ['./default', 'plugin:mdx/recommended'],
  'rules': {
    'max-len': [
      'warn',
      300,
      2,
      {
        'ignorePattern': '^(import|export|\\|)',
        'ignoreUrls': true
      }
    ]
  }
}
