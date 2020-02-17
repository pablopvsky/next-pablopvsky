import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'
import GaritmicConfig from '../../garitmic.config.json'


Router.onRouteChangeStart = () => {
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


export default class Layout extends React.Component {
    render() {
        const { children, seo } = this.props
        return <main>

            <Head>
                <link rel='shortcut icon' sizes='16x16 24x24 32x32 48x48 64x64' href='/favicon.ico' />
                <link rel='icon' type='image/x-icon' href='/favicon.ico' />
                <link rel='apple-touch-icon' sizes='57x57' href={`${GaritmicConfig.favIcon}&w=57&h=57`} />
                <link rel='apple-touch-icon-precomposed' sizes='57x57' href={`${GaritmicConfig.favIcon}&w=57&h=57`} />
                <link rel='apple-touch-icon' sizes='72x72' href={`${GaritmicConfig.favIcon}&w=72&h=72`} />
                <link rel='apple-touch-icon' sizes='114x114' href={`${GaritmicConfig.favIcon}&w=114&h=114`} />
                <link rel='apple-touch-icon' sizes='120x120' href={`${GaritmicConfig.favIcon}&w=120h=120`} />
                <link rel='apple-touch-icon' sizes='144x144' href={`${GaritmicConfig.favIcon}&w=144&h=144`} />
                <link rel='apple-touch-icon' sizes='152x152' href={`${GaritmicConfig.favIcon}&w=152&h=152`} />
                <link href='https://auradesignsystem.com/static/style.css' rel='stylesheet' />
                <link href='/style.css' rel='stylesheet' />
                <meta content='yes' name='apple-mobile-web-app-capable' />
                <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

            </Head>

            <Navbar />

            <div className='page snow'>
                <div className='page-body '>
                    {children}
                </div>
            </div>

            <Footer />

            {seo}

        </main>
    }
}
