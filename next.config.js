module.exports = {
    trailingSlash: false,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/contact': { page: '/contact' },
            '/services': { page: '/services' },
            '/gmp-mandatory-testing': { page: '/gmp-mandatory-testing' },
            '/soil-and-water-testing': { page: '/soil-and-water-testing' },
        }
    },
    images: {
        loader: 'cloudinary',
        path: 'daapillp5'
    }
};