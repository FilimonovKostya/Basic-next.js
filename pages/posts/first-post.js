import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return <>
        <Head><title>First Post title</title></Head>
        <h1>First post</h1>
        <h2><Link href={'/'}> Back Home </Link></h2>
    </>
}