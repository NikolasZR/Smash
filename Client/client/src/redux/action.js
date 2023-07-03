//actions 
import axios from 'axios';

// get all products 

export function getAllProducts(){
    return (dispatch) => {
        return axios.get('http://localhost:3000/products')
        .then(response => {
            dispatch({
                type: 'GET_ALL_PRODUCTS',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

// get products by id 

export function getProductById(id){
    return (dispatch) => {
        return axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
            dispatch({
                type: 'GET_PRODUCT_BY_ID',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//get products by name 

export function getProductByName(name){
    return (dispatch) => {
        return axios.get(`http://localhost:3000/products?name=${name}`)
        .then(response => {
            dispatch({
                type: 'GET_PRODUCT_BY_NAME',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//add to cart

export function addToCart(id){
    return (dispatch) => {
        return axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
            dispatch({
                type: 'ADD_TO_CART',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

//remove to cart "REMOVE_FROM_CART"

export function removeFromCart(id){
    return (dispatch) => {
        return axios.get(`http://localhost:3000/products/${id}`)
        .then(response => {
            dispatch({
                type: 'REMOVE_FROM_CART',
                payload: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
}

