require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Josh Coles`,
    description: `Toronto Web Developer`,
    author: `Josh Coles`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
        host: `preview.contentful.com`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:400,500,600`,
          `Lora\:400, 400i`
        ],
        display: 'swap'
      }
    }
  ]
}