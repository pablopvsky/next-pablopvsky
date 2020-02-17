import NextSeo from 'next-seo'
import GaritmicConfig from '../../garitmic.config.json'

export default class GeneralSeo extends React.Component {
    render() {
        return (
            <NextSeo
                config={{
                    title: `${GaritmicConfig.siteName}`,
                    titleTemplate: `%s`,
                    description: `${GaritmicConfig.siteDescription}`,
                    canonical: `${GaritmicConfig.siteURL}`,
                    openGraph: {
                        url: `${GaritmicConfig.siteURL}`,
                        title: `${GaritmicConfig.siteName}`,
                        description: `${GaritmicConfig.siteDescription}`,
                        type: 'Website',
                        images: [
                            {
                                url: 'https://images.prismic.io/garitma%2F6c1c4bbe-430e-457a-ae2b-fe45ba615466_featured-pablopvsky.jpg?auto=compress,format',
                                width: 1140,
                                height: 570,
                                alt: 'Open Graph logo Pablopvsky',
                            },
                        ],
                        site_name: `${GaritmicConfig.siteName}`,
                    },
                    twitter: {
                        cardType: 'summary_large_image',
                    }
                }}
            />
        )
    }
}