import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import { Link } from 'gatsby'
import Banner from "../components/Banner"
export default function error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="There are no things to do here!">
                    <Link to='/' className="btn-white">Back to Homepage</Link>
                </Banner>
                 </header>
        </Layout>
    )
}
