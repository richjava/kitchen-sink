import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import MediaCover1 from "./../components/media-cover-1"
 import MediaBlock1 from "./../components/media-block-1"
 import MediaBanner1 from "./../components/media-banner-1"
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
            <title>Home</title>
            {/* Global site tag (gtag.js) - Google Analytics */}
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
            />
            <script dangerouslySetInnerHTML={analyticsScriptTag()} />
        </Head>
        <main>
         <MediaCover1 />
           <MediaBlock1 />
           <MediaBanner1 />
          </main>

    </>
);

export default withRouter(Page);
