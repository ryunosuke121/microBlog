import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'
import utilStyles from "../styles/utils.module.css"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div>
        <section className={utilStyles.headingMd}>
          <p>私はフルスタックエンジニアです/男です</p>
        </section>
        <section>
          <h2>🗒エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/posts/firstPost">
                <img src="/imgs/thumbnail01.jpg" 
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="//posts/firstPost">
                <p className={utilStyles.boldText}>SSGとSSRの使いわけの場面はいつなのか？</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2022
              </small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img src="/imgs/thumbnail01.jpg" 
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="//posts/firstPost">
                <p className={utilStyles.boldText}>SSGとSSRの使いわけの場面はいつなのか？</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2022
              </small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img src="/imgs/thumbnail01.jpg" 
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="//posts/firstPost">
                <p className={utilStyles.boldText}>SSGとSSRの使いわけの場面はいつなのか？</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2022
              </small>
            </article>
            <article>
              <Link href="/posts/firstPost">
                <img src="/imgs/thumbnail01.jpg" 
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="//posts/firstPost">
                <p className={utilStyles.boldText}>SSGとSSRの使いわけの場面はいつなのか？</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2022
              </small>
            </article>
          </div>
        </section>
      </div>
    </Layout>

  )
}
