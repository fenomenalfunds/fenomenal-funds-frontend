const withImages = require('next-images');

module.exports = withImages({
	domain: '0.0.0.0',
	STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337',
	PORT: process.env.PORT || 3000
})