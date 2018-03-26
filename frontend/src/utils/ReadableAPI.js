const api = process.env.REACT_APP_READABLE_API_URL || 'http://localhost:3001'


// get token from local storage
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories

export const getAllCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(response => response.json())
    .then(data => data.categories)
}

