/* @flow */
import * as React from 'react'
import { renderToString, renderToStaticNodeStream } from 'react-dom/server'
// eslint-disable-next-line import/no-extraneous-dependencies
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from 'styled-components'

import Root from '../../client/scenes/Root'
import Html from './Html'
import { assets } from '../config'
import themes from '../../client/common/consts/styles/themes'

const theme = themes[0]

function markup(url: string) {
  const sheet = new ServerStyleSheet()
  const context = {}
  const root = renderToString(
    <StaticRouter location={url} context={context}>
      <StyleSheetManager sheet={sheet.instance}>
        <ThemeProvider theme={theme}>
          <Root />
        </ThemeProvider>
      </StyleSheetManager>
    </StaticRouter>,
  )

  return renderToStaticNodeStream(
    <Html root={root} css={sheet.getStyleElement()} assets={assets} />,
  )
}

export default markup
