/* @flow */
import fs from 'fs'
import path from 'path'

import markup from './markup/index'
import { routes } from './config'

const rootDir = path.join(__dirname, '../static')
const outputDir = path.join(rootDir, 'pages')
const locale = 'en'

function render() {
  if (!fs.existsSync(rootDir)) {
    fs.mkdirSync(rootDir)
    fs.mkdirSync(outputDir)
    fs.mkdirSync(path.join(outputDir, locale))
  }

  routes.forEach(route => {
    const outLocalePage = path.join(path.join(outputDir, locale), route.filepath)
    if (route.filepath) {
      fs.mkdirSync(outLocalePage)
    }
    const htmlStream = markup(route.url)
    const fileStream = fs.createWriteStream(path.join(outLocalePage, 'index.html'))

    htmlStream.pipe(fileStream)
    fileStream.on('close', () => {
      console.log(`[render] Done writing! url: ${route.url}`) // eslint-disable-line no-console
    })

    fileStream.on('error', err => {
      console.error('[render] Error!', err) // eslint-disable-line no-console
    })
  })
}

render()
