const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/houston/',

  siteMetadata: {
    title: '',
    description: 'Eduzz Houston Design System',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          search: true,
          mainContainer: { fullscreen: false, align: 'center' },
          header: { icons: 'minimal', fixed: false },
          footer: { navigation: false },
          logo: { src: '/public/logo.svg', width: 150 },
          menu: {
            search: false,
            headings: { rightSide: true, scrollspy: true, depth: 3 },
          },
          showPlaygroundEditor: false,
          showDarkModeSwitch: false,
          colors: {
            header: {
              bg: '#F9FAFB',
              text: '37474F',
              button: { bg: 'red', color: 'green' },
            },
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {
          searchPatterns: [
            './**/*.{ts,tsx}',
            '../packages/ui-components/**/*.{ts,tsx}',
            '!**/node_modules',
            '!**/doczrc.js',
          ],
        },
        menu: ['Início', 'Como Contribuir'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/michele/Projects/Eduzz/houston/docs/.docz',
        base: '/houston/',
        source: './',
        'gatsby-root': null,
        files: ['./**/*.mdx', '../CONTRIBUTING.md', '../packages/**/*.mdx'],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '',
        description: 'Eduzz Houston Design System',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/michele/Projects/Eduzz/houston/docs',
          templates:
            '/home/michele/Projects/Eduzz/houston/node_modules/docz-core/dist/templates',
          docz: '/home/michele/Projects/Eduzz/houston/docs/.docz',
          cache: '/home/michele/Projects/Eduzz/houston/docs/.docz/.cache',
          app: '/home/michele/Projects/Eduzz/houston/docs/.docz/app',
          appPackageJson:
            '/home/michele/Projects/Eduzz/houston/docs/package.json',
          appTsConfig:
            '/home/michele/Projects/Eduzz/houston/docs/tsconfig.json',
          gatsbyConfig:
            '/home/michele/Projects/Eduzz/houston/docs/gatsby-config.js',
          gatsbyBrowser:
            '/home/michele/Projects/Eduzz/houston/docs/gatsby-browser.js',
          gatsbyNode:
            '/home/michele/Projects/Eduzz/houston/docs/gatsby-node.js',
          gatsbySSR: '/home/michele/Projects/Eduzz/houston/docs/gatsby-ssr.js',
          importsJs:
            '/home/michele/Projects/Eduzz/houston/docs/.docz/app/imports.js',
          rootJs:
            '/home/michele/Projects/Eduzz/houston/docs/.docz/app/root.jsx',
          indexJs:
            '/home/michele/Projects/Eduzz/houston/docs/.docz/app/index.jsx',
          indexHtml:
            '/home/michele/Projects/Eduzz/houston/docs/.docz/app/index.html',
          db: '/home/michele/Projects/Eduzz/houston/docs/.docz/app/db.json',
        },
        groups: { '': [], API: ['Components', 'UI'] },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)