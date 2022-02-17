import Layout from "../../components/layout";

export async function getStaticPaths() {
    const paths = getStaticPaths()
    return {paths, fallback: false}
}

export default function Post() {
    return <Layout>...</Layout>
}