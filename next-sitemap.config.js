/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.pampagrillmalaga.com/',
    exclude: ['/restaurant/*', '/terms'],
    additionalPaths: async (config) => {
        const result = []

        // using transformation from the current configuration
        result.push(await config.transform(config, '/restaurant/gallery'))
        result.push(await config.transform(config, '/restaurant/the-menu'))

        return result
    },
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            }
        ]
    }
}