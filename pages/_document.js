import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    return { html, head }
  }

  render () {
    return (
     <html>
       <Head>
          <title>Thomas "Ajax" Davis, Web Developer, Melbourne</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet" />
          <link href="/static/main.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Asul:400,700|Open+Sans:400,400i,700,700i" rel="stylesheet" />
       </Head>
       <body className="custom_class">
       <div className="header">
         <div className="wrap">
         <h1>Thomas "Ajax" Davis</h1>
         </div>

         </div>
         <div className="wrap">
         <h2>Web Developer - Melbourne</h2>
         </div>

       <div className="menu">
         <div className="wrap">
           <a href="/">Home</a>
           <a href="/blog">Blog</a>
           <a href="/experiments">Experiments</a>
         </div>
       </div>
         {this.props.customValue}
         <Main />
         <div className="wrap">
         <h3>Contact</h3>
         <a href="https://twitter.com/ajaxdavis">twitter.com/ajaxdavis</a>
         <br />
         <a href="https://github.com/thomasdavis">github.com/thomasdavis</a>
         <br />
         <p>Currently not looking for work, but I am looking to hire! -> <a href="https://listium.com/jobs">listium.com/jobs</a></p>
         </div>

         <NextScript />
       </body>
     </html>
    )
  }
}
