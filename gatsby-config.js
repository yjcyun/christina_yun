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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
