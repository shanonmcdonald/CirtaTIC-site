module.exports = {
    trailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/services': { page: '/services' },
            /* '/services/microbiology-screening': { page: 'services/microbiology-screening' },
            '/services/pesticides-screening': { page: 'services/pesticides-screening' },
            '/services/hemp-products-test': { page: 'services/hemp-products-test' },
            '/services/hemp-flower-potency': { page: 'services/hemp-flower-potency' },
            '/services/total-cannabis-cannabinoid-profile': { page: 'services/total-cannabis-cannabinoid-profile' },
            '/services/aflatoxin': { page: 'services/aflatoxin' } */
        }
    },
    images: {
        loader: 'cloudinary',
        path: 'daapillp5'
    }
};