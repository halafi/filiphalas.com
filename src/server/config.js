// @flow
export type Route = {
  url: string,
  filepath: string,
}

export const routes: Route[] = [
  {
    url: '/',
    filepath: '',
  },
]

export const assets: Assets = {
  bundle: { js: '../../bundle.js' },
}
