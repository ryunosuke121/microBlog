import Head from "next/head";
import { ReactElement } from "react";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"

const name  = "Ryunosuke";
export const siteTitle = "Next.js blog"

type LayoutProps = Required<{
    readonly children: ReactElement
}>

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className = {styles.header}>
                <img src="/imgs/profile.png" className = {utilStyles.borderCircle}/>
                <h1 className={utilStyles.headingXl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}

export default Layout;