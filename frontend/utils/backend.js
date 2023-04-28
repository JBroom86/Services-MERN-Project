import axios from 'axios';

const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }


// the await needs to be before the axios request because it is an async function
export async function getServices() {
    const {data} = await axios.get('/services')
    return data
}

export async function getServicesId(id) {
    const {data} = await axios.get('/services/' + id) 
    return data
}

export async function deleteService(id) {
    axios.delete(`/services/${id}`)
    
} 

export async function createService(serviceData) {
  const { data } = await axios.post("/services", serviceData);
  return data;
}

export async function updateService(id, updatedServiceData) {
    const { data } = await axios.put(`/services/${id}`, updatedServiceData);
    return data;
  }

  export async function signUp(user) {
    const { data } = await axios.post('/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('/users/login', user)
    return data
}

  