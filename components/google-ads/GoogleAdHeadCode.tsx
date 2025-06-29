export default function GoogleAdHeadCode() {
  return (
    <>
      {/* Microsoft Clarity */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
             (function(c,l,a,r,i,t,y){
               c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
               t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
               y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
               })(window, document, "clarity", "script", "nedsxhc991");
               `,
        }}
      />

      {/* Google AdSense */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9835678201672444"
        crossOrigin="anonymous"
      ></script>

      {/* Google Site Verification */}
      <meta
        name="google-site-verification"
        content="Q5vf4BwqS69WGAaE2QZF_ovxGAVtgW_Jdq6kC_8zY7M"
      />

      {/* Google Tag Manager */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-84FJZDM7NS"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-84FJZDM7NS');
             `,
        }}
      />
    </>
  );
}
