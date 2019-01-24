export const addCategories = (token,name) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': token
    }

    return fetch(`http://localhost:3000/categories`, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            category: {name}
        })
    })
    
    .then(response => response.json())
    .then(res => {
    
        return Promise.resolve(res)
    })
}

export const fetchCategories = (token) => {
   
    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token
       
        
    }

    return fetch(`http://localhost:3000/categories`, {
        headers
    })
    
    
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}

export const deleteCategorie = (token,_id) => {
   
    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token
       
        
    }

    return fetch(`http://localhost:3000/categories/${_id}`, {
        headers,
        method: 'DELETE'
    })
    
    
    
}
export const categorieInfo = (token,_id) => {
   
    if (!token) {
        throw new Error()
    }

    const headers = {
       
        'Content-Type': 'application/json',
        'token': token,
        'Request-Type': 'MAINTENANCE',
        "x-apicache-bypass": "true",
    }


    return fetch(`http://localhost:3000/categories/` + _id, {
        headers
        
    })
   
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}


export const editCategory = (token,category) => {
    if (!token) {
        throw new Error()
    }

    const headers = {
        "x-apicache-bypass": true,
        'Content-Type': 'application/json',
        'token': token,
        'Request-Type': 'MAINTENANCE',
        
    }

    return fetch(`http://localhost:3000/categories/` + category._id, {
        headers,
        method: 'PUT',
        body: JSON.stringify(category)

    })
    
   
    .then(response => response.json())
    .then(res => {
        return Promise.resolve(res)
    })
}
