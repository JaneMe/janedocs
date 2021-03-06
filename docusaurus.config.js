// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Janedocs',
  tagline: 'Dinosaurs are cool',
  url: 'https://janeme.github.io',
  baseUrl: '/janedocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'JaneMe', // Usually your GitHub org/user name.
  projectName: 'Janedocs', // Usually your repo name.
  trailingSlash: false,

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Janedocs',
        logo: {
          alt: 'Jane Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '??????',
          },
          {to: '/blog', label: '??????', position: 'left'},
          {
            href: 'https://github.com/JaneMe/janedocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JaneMe/janedocs',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      }
    }),
    plugins: [
      // async function pluginAlias(context, options) {
      //   return {
      //     name: 'zain-alias-plugin',
      //     configureWebpack() {
      //         return {
      //             resolve: {
      //                 alias: {
      //                   // ?????????????????????????????????????????????????????? import * from 'src/*';
      //                   // ??? tsconfig.json ????????? "paths": {"src/*": ["./src/*"]}
      //                   src: path.resolve(__dirname, './src/'),
      //                 },
      //             },
      //         };
      //     },
      //   };
      // },
      // ?????????????????????????????????????????????????????????, ???????????????????????????
      ['./plugin/alias.js', {
        alias: {
          src: path.resolve(__dirname, './src/'),
        }
      }],
    ]
};

module.exports = config;
