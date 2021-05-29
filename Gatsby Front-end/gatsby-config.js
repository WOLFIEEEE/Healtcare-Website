module.exports = {
  siteMetadata: {
    title: "Health-care Project",
    author: "Khushwant , Manav , Anuradha",
    description: "A health care website with a collection of different disease Prediction Models"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Health-Care Website',
        short_name: 'Healtcare',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
