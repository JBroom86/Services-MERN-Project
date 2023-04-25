import axios from "axios";

export async function getServices() {
    const {data} = await axios.get('http://localhost:3000/services')
    return data
}