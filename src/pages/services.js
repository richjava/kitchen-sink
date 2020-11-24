import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import MediaCover2 from "./../components/media-cover-2"
 import MediaBlock2 from "./../components/media-block-2"
 import Banner1 from "./../components/banner-1"
 const analyticsScriptTag = () => {
    return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-XXXXXXX-X');
      `
    };
};

const Page = () => (
    <>
        <Head>
            <title>Services</title>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
            />
            <script dangerouslySetInnerHTML={analyticsScriptTag()} />
        </Head>
        <main>
         <MediaCover2 />
           <MediaBlock2 />
           <Banner1 />
          </main>

    </>
);

export default withRouter(Page);
