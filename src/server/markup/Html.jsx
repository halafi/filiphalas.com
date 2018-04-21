/* @flow */
/* eslint-disable react/no-danger */
import * as React from 'react'

import themes from '../../client/common/consts/styles/themes'

const theme = themes[0]

const globalCss = `
  @font-face {
    font-family: 'Roboto';
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    // color: ${theme.colorPrimary};
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    display: none; 
  }
`

type Props = {
  root: string,
  css: React.Node[],
  assets: Object,
}

const Html = (props: Props) => (
  <html lang="en">
    <head>
      <title>Filip Halas | Frontend Developer</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      {/*<link rel="manifest" href="manifest.json" />*/}
      {/*<link rel="shortcut icon" href="images/favicon.ico" />*/}
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      <link
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        rel="stylesheet"
        integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
        crossOrigin="anonymous"
      />
      {/*{props.assets.vendor && <link rel="preload" href={props.assets.vendor.js} as="script" />}*/}
      <link rel="preload" href={props.assets.bundle.js} as="script" />

      {/*<link*/}
      {/*href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"*/}
      {/*rel="stylesheet"*/}
      {/*/>*/}
      <style dangerouslySetInnerHTML={{ __html: globalCss }} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.__TEST__ = 'ok';
         `,
        }}
      />
      {props.css}
    </head>
    <body>
      <div id="react" dangerouslySetInnerHTML={{ __html: props.root }} />

      {/*{props.assets.vendor && <script src={props.assets.vendor.js} />}*/}
      <script src={props.assets.bundle.js} />
    </body>
  </html>
)

export default Html
