import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/api"

export const apiService = {
    getProducts() {
        return axios.get(baseUrl + '/products')
    },
    getProduct(id) {
        return axios.get(baseUrl + `/products/${id}`)
    },
    createProduct(data) {
        return axios.post(baseUrl + '/products', data)
    },
    updateProduct(id, data) {
        return axios.put(baseUrl + '/products/' + id, data)
    },
    deleteProduct(id) {
        return axios.delete(baseUrl + '/products/' + id)
    },
}