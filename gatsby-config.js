module.exports = {
  siteMetadata: {
    title: `Christina Yun`,
    description: `Frontend Web Developer With Passion🔥`,
    titleTemplate: `%s | Christina Yun`,
    url: `https://christinayun.ca`,
    image: `mainImg.png`,
    twitterUsername: `@xtina_yun`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./data/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `./data`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`600`, `800`],
          },
        ],
      },
    },
  ],
}
