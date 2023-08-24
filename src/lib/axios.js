import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true
})

// // Function to fetch CSRF token
// async function fetchCsrfToken () {
//     // Make your API call to fetch the CSRF token from the server
//     const response = await axios.get('/sanctum/csrf-cookie') // Adjust the endpoint according to your API

//     // Assuming the CSRF token is returned in response.data.csrfToken
//     return response.data.csrfToken
// }

// // Set the CSRF token in the Axios instance headers
// axios.interceptors.request.use(async config => {
//     const csrfToken = await fetchCsrfToken()
//     config.headers['X-CSRF-TOKEN'] = csrfToken
//     return config
// })

export default axios
