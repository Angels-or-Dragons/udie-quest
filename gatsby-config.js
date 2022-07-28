module.exports = {
  siteMetadata: {
    siteUrl: `https://udie.quest`,
    title: `Udie Quest`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    // Chemin des json de configuration
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `configs`,
        path: `${__dirname}/src/configs/`,
      },
    },
    // Creation des pages grace aux MDX
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content`,
        ignore: {
          patterns: [`**/!*(index).(js|ts|md)?(x)`]
        },
      },
    },
    // sourceInstanceName for filter
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "raids_guides",
        path: `${__dirname}/content/raids/guides`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "raids_builds",
        path: `${__dirname}/content/raids/builds`,
      },
    },
    // Parametrage des layouts pour les MDX
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
          raids_builds: require.resolve("./src/components/build_layout.js"),
        },
      },
    }, 
  ],
}
