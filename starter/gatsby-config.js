module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Starter`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@muhsinlk`,
    wordPressUrl: `https://mtwoblog.com`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: { wordPressUrl: `https://mtwoblog.com` }
    }
  ]
};
