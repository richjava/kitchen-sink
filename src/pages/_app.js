import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import "../styles/index.css";

export default class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Head>
                    {/* Shared head elements */}
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width"
                        key="viewport"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        );
    }
}