
const createPosts = require(`./utils/createPosts`)
const createPages = require(`./utils/createPages`)
const createUsers = require(`./utils/createUsers`)
const createCategories = require(`./utils/createCategories`)
const createTags = require(`./utils/createTags`)

exports.createPages = async ({actions, graphql}) => {
	await createPosts({actions, graphql})
	await createPages({actions, graphql})
	await createUsers({actions, graphql})
	await createCategories({actions, graphql})
	await createTags({actions, graphql})
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /quill/,
						use: loaders.null(),
					},{
						test: /whatwg-fetch/,
						use: loaders.null(),
					},
				],
			},
		})
	}
}
