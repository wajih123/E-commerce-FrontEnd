export const addProduct = (token,name,available_stock,price,categories) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
    }

    return fetch(`http://localhost:3000/products`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            product: {
                name,
                available_stock,
                price,
                categories:categories.join(',')
            }
        })
    })
    
    .then(response => response.json())
    .then(res => {
    
        return Promise.resolve(res)
    })
}

export const fetchProducts = (token) => {
   
    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token
       
        
    }

    return fetch(`http://localhost:3000/products`, {
        headers
    })
    
    
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}

export const deleteProduct = (token,_id) => {
   
    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token
       
        
    }

    return fetch(`http://localhost:3000/products/${_id}`, {
        headers,
        method: 'DELETE'
    })
    
    
    
}

export const editProduct = (token,product) => {
    if (!token) {
        throw new Error()
    }

    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token,
        'Request-Type': 'MAINTENANCE',
        
    }

    return fetch(`http://localhost:3000/products/` + product._id, {
        headers,
        method: 'PUT',
        body: JSON.stringify(product)

    })
    
   
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}
