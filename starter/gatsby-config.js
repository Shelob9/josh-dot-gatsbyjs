module.exports = {
  siteMetadata: {
    title: `Future Capable`,
    description: `Just Another Headless WordPress Site`,
    author: `@shelob9`,
    wordPressUrl: `https://cms.futurecapable.dev`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `https://cms.futurecapable.dev`
      }
    }
  ],
	plugins: [
		{
			resolve: `gatsby-plugin-polyfill-io`,
			options: {
				features: [`fetch`, `IntersectionObserver` ]
			},
		},
	],
};
