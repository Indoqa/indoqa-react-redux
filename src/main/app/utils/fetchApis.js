import fetch from 'isomorphic-fetch'
import handleApiResponse from './handleApiResponse'

const prefixUrl = (url, property, defaultPrefix) => {
  const environmentProperty = window[property]

  if (!environmentProperty) {
    return `${defaultPrefix}${url}`
  }

  if (typeof environmentProperty === 'function') {
    return environmentProperty(url)
  }

  return `${environmentProperty}${url}`
}

export const fetchGeonames = (url, options) => {
  return fetch(prefixUrl(url, 'geonamesApiBaseUrl', '/geonames'), options).then(handleApiResponse)
}

// Add additional wrappers for every REST API

/*
export const fetch<API> = (url, options) => {
  return fetch(prefixUrl(url, '<API>ApiBaseUrl', '/<API>'), options).then(handleApiResponse)
}
*/
