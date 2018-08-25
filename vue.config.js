module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/car-tco-calculator/'
    : '/'
  ,
  pwa: {
    name: '自動車TCO見積りツール',
    themeColor: '#646464',
    msTileColor: '#00aba9'
  }
}
