import Layout from '../components/organism/Layout'
import GeneralSeo from '../components/seo/GeneralSeo'
import { Client, Prismic } from '../api/prismic'
import { RichText } from 'prismic-reactjs'


export default class extends React.Component {

    static async getInitialProps({ req, res }) {
        try {

            let slug = 'pablopvsky'

            const page = await Client(req).query(Prismic.Predicates.at('my.paginas.uid', `${slug}`))

            return { page, statusCode: 200 }
        } catch (e) {
            res.statusCode = 503
            return { page: null, statusCode: 503 }
        }
    }

    render() {

        const { page } = this.props

        return (
            <Layout seo={<GeneralSeo />}>
                <div className="content">
                    <div className="smash">
                        <div className="pad">
                            <div className="header">
                                <h1>{RichText.asText(page.results[0].data.subtitle)}</h1>
                            </div>
                            <div className="content h6">
                                {RichText.asText(page.results[0].data.excerpt)}
                                {RichText.render(page.results[0].data.content)}
                                <span className="typewriter">
                                    <span className="typewriter-text">...</span>
                                </span>

                                <h2>Aptitudes</h2>

                                <h3>Arte</h3>
                                <ul className="smosh mod-detail list">
                                    <li>Dibujo</li>
                                    <li>Poesía</li>
                                </ul>

                                <h3>Publicidad</h3>
                                <ul className="smosh mod-detail list">
                                    <li>Creación de marca</li>
                                    <li>Estrategias de comunicación</li>
                                    <li>Redacción de contenidos publicitarios</li>
                                </ul>

                                <h3>Web</h3>
                                <ul className="smosh mod-detail list">
                                    <li>UI/UX</li>
                                    <li>Frontend</li>
                                    <li>SEO</li>
                                    <li>Wordpress</li>
                                    <li>Next JS</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout >

        )
    }
}