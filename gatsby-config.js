/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "JPC Custom, LLC",
    author: "Madison Haradine",
    business: {
      name: "JPC",
      streetAddress: "2926 Paul Drive",
      cityAddress: "Elkhart, IN 46514",
      phone: "+1(574)293-8030",
      email: "jpccustom@gmail.com"
    }

  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

  ],
}
