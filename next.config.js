module.exports = {
    trailingSlash: false,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/services': { page: '/services' },
            '/gmp-mandatory-testing': { page: '/gmp-mandatory-testing' },
        }
    },
    images: {
        loader: 'cloudinary',
        path: 'daapillp5'
    }
};