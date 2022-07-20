module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Udie Quest`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "raids_wings",
        path: `${__dirname}/content/raids/ailes`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "raids_builds",
        path: `${__dirname}/content/raids/builds`,
      },
    },
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
