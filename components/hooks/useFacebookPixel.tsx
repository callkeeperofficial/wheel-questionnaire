import React, { useEffect } from 'react';
import { useRouter } from "expo-router";


export const useFacebookPixel = () => {
    const router = useRouter();

    useEffect(() => {
        const script = document.createElement('script');
        script.innerText = `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '251411004273206');`;
        document.head.appendChild(script);

        const noscript = document.createElement('script');
        noscript.innerHTML = `<img height="1" width="1" style="display:none"
                     src="https://www.facebook.com/tr?id=251411004273206&ev=PageView&noscript=1"/>`;
        document.head.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
};

export const useViewContentFacebook = () => {
    if ("fbq" in window) {
        useEffect(() => {
            // @ts-ignore
            fbq('track', 'ViewContent');
        }, []);
    }
};

export const usePageViewFacebook = () => {
    if ("fbq" in window) {
        useEffect(() => {
            // @ts-ignore
            fbq('track', 'PageView');
        }, []);
    }
};