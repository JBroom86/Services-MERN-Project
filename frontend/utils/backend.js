import axios from "axios";

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
