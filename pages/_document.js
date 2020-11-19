import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta property="og:title" content="TryTech"/>
          <meta property="og:url" content="https://www.trytech.com.tw/"></meta>
          <meta id="keywords" name="keywords" content="新創團隊,專業,經驗足夠,年輕工程師,資訊,土木,嘗試,機器學習,深度學習,網頁架設,平台架設,APP開發,資料庫管理,BIM,二次開發,參數化設計,人工智慧,全端開發,建築資訊塑模,物聯網,營建產業,專屬介面,架設後台,完善操作,客製化服務,影像辨識,專業服務,台北市,大安區,嘗試科技"></meta>
          <meta name="description" content="TryTech是個由跨足資訊與土木領域的年輕工程師組成的新創團隊，熱愛科技，樂於嘗試不同可能。我們致力於發展機器學習、深度學習的各式應用，熟悉網頁平台架設、APP開發、資料庫管理等技術，有豐富BIM軟體二次開發、參數化設計經驗。針對您的需求，我們為您提供合適的技術服務。只要您有想法，讓我們替您實現。"></meta>
          <meta itemProp="description" content="TryTech是個由跨足資訊與土木領域的年輕工程師組成的新創團隊，熱愛科技，樂於嘗試不同可能。我們致力於發展機器學習、深度學習的各式應用，熟悉網頁平台架設、APP開發、資料庫管理等技術，有豐富BIM軟體二次開發、參數化設計經驗。針對您的需求，我們為您提供合適的技術服務。只要您有想法，讓我們替您實現。"></meta>
          <meta property="og:description" content="TryTech是個由跨足資訊與土木領域的年輕工程師組成的新創團隊，熱愛科技，樂於嘗試不同可能。我們致力於發展機器學習、深度學習的各式應用，熟悉網頁平台架設、APP開發、資料庫管理等技術，有豐富BIM軟體二次開發、參數化設計經驗。針對您的需求，我們為您提供合適的技術服務。只要您有想法，讓我們替您實現。"></meta>

          <meta name="image" content="https://i.imgur.com/wz0WfJa.png"></meta>
          <meta property="og:image" content="https://i.imgur.com/wz0WfJa.png"></meta>
          <meta itemProp="image" content="https://i.imgur.com/wz0WfJa.png"></meta>
          
          <meta property="og:type" content="website"></meta>
          <link rel="shortcut icon" href={require("assets/img/logo/logo.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/logo/logo.png")}
          />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  };
};

export default MyDocument;
