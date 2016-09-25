import fetchApi from 'indoqa-react-restclient'

export const fetchGeonames = (url, options) => {
  const proxyOptions = {
    defaultPrefix: '/geonames',
    urlProperty: 'geonamesApiBaseUrl'
  }

  return fetchApi(url, proxyOptions, options)
}

// Add additional wrappers for every REST API
