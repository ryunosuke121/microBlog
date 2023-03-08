import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <h1>さいしょ</h1>
            <Link href  = '/'>ホームに戻る</Link>
        </div>
    );
}