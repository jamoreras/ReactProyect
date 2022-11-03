import axios from 'axios'

const allUsers = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/users?skip=0&limit=100')
    state(peticion.data.users)

}

const userId = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/users/${id}`)
    state(peticion.data)
}

const allCarts = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/carts')
    state(peticion.data.carts)

}

const cartId = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/carts/${id}`)
    state(peticion.data.products)
}

const allComments = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/comments')
    state(peticion.data.comments)

}

const allProducts = async (state) => {
    const peticion = await axios.get('https://dummyjson.com/products?skip=0&limit=100')
    state(peticion.data.products)

}

const productId = async (id, state) => {
    const peticion = await axios.get(`https://dummyjson.com/products/${id}`)
    state(peticion.data)
}

export {
    allUsers,
    userId,
    allCarts,
    cartId,
    allComments,
    allProducts,
    productId
}