import apisauce from 'apisauce'

const headers = {
    'Content-Type': 'application/json',
  }

// our "constructor"
const create = (baseURL = 'https://indonesia-covid-19.mathdro.id/api') => {
    const api = apisauce.create({
        // base URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: headers,
        // 10 second timeout...
        timeout: 10000
    })

    // api.addResponseTransform(response => {
    //     if (!response.ok) {

    //         let msgError = "No Internet Connection"
    //         if (response.data && response.data.data && response.data.data.message) {
    //             msgError = response.data.data.message
    //         }

    //         response.data = {
    //             response: {
    //                 status: 404,
    //                 message: msgError
    //             },
    //             data: {
    //                 message: msgError
    //             }
    //         }
    //     }
    // })

    const getTotal = (data) => api.get(`/`, data)
    const getHarian = (data) => api.get(`/harian`, data)

    return {
        getTotal,
        getHarian,

        api,
        headers,
    }
}

// let's return back our create method as the default.
export default {
    create
}