export default {
  typescript: true,
  base: "/houston/",
  title: "",
  description: "Eduzz Houston Design System",
  files: ["./**/*.mdx"],
  propsParser: false,
  debug: true,
  src: "./packages",
  menu: [
    'Início'
  ],
  groups: {
    '': [],
    API: ['Components', 'UI'],
  },
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: false,
    },
    logo: {
      src: '/public/logo.svg',
      width: 170,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
    showPlaygroundEditor: false,
    showDarkModeSwitch: false,
    colors: {
      header: {
        bg: '#0D47A1',
        text: 'white',
        button: {
          bg: 'red',
          color: 'green',
        }
      }
    }
  },
  docgenConfig: {
    searchPatterns: [
      "./**/*.{ts,tsx}",
      "!**/node_modules",
      "!**/doczrc.js",
    ]
  }
}