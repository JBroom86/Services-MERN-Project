import axios from 'axios';

const authHeader = { headers: { 'Authorization': localStorage.getItem('userToken') } }


// the await needs to be before the axios request because it is an async function
export async function getServices() {
    const {data} = await axios.get('http://localhost:3000/services')
    return data
}

export async function getServicesId(id) {
    const {data} = await axios.get('http://localhost:3000/services/' + id) 
    return data
}

export async function deleteService(id) {
    axios.delete(`http://localhost:3000/services/${id}`)
    
} 

export async function createService(serviceData) {
  const { data } = await axios.post("http://localhost:3000/services", serviceData);
  return data;
}

export async function updateService(id, updatedServiceData) {
    const { data } = await axios.put(`http://localhost:3000/services/${id}`, updatedServiceData);
    return data;
  }

  export async function signUp(user) {
    const { data } = await axios.post('http://localhost:3000/users/signup', user)
    return data
}

export async function logIn(user) {
    const { data } = await axios.post('http://localhost:3000/users/login', user)
    return data
}

  