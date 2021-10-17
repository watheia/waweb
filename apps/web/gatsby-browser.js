/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/* eslint-disable import/prefer-default-export */
import React from 'react'
import { CacheProvider } from '@emotion/react'
import getEmotionCache from './src/utils/getEmotionCache'
import TopLayout from './src/components/TopLayout'

import "./src/styles/index.css"

const cache = getEmotionCache()

export const wrapRootElement = ({ element }) => {
  return <CacheProvider value={cache}><TopLayout>{element}</TopLayout></CacheProvider>
}
