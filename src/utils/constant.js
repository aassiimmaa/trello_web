let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8017'
} else if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://trello-api-yuuf.onrender.com'
}

export const API_ROOT = apiRoot
// export const API_ROOT = 'http://localhost:8017'
// export const API_ROOT = 'https://trello-api-yuuf.onrender.com'
