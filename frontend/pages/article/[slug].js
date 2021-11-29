import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Container from "../../components/container";
import Images from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/api";

const Article = ({ article, categories }) => {
    const seo = {
        metaTitle: article.title,
        metaDescription: article.description,
        shareImage: article.image,
        article: true,
    };

    return (
        <Container categories={categories}>
            <Seo seo={seo} />
            <div className="flex flex-col items-center">
                <div >
                    <h1>{article.title}</h1>
                </div>
                <div >
                    <Images image={article.image} />
                </div>
                <div>
                    <div>
                        <div>
                            <div>
                                {article.author.picture && (
                                    <Images
                                        image={article.author.picture}
                                        style={{
                                            position: "static",
                                            borderRadius: "50%",
                                            height: 30,
                                        }}
                                    />
                                )}
                            </div>
                            <div>
                                <p>By {article.author.name}</p>
                                <p>
                                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                                </p>
                            </div>
                            <div>
                                {article.content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export async function getStaticPaths() {
    const articles = await fetchAPI("/articles");

    return {
        paths: articles.map((article) => ({
            params: {
                slug: article.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articles = await fetchAPI(`/articles?slug=${params.slug}`)
    const categories = await fetchAPI("/categories");

    return {
        props: { article: articles[0], categories },
        revalidate: 1,
    };
}

export default Article;
