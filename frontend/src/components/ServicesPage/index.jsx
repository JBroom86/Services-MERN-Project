import { useState, useEffect } from "react"
import { getServices } from "../../../utils/backend"

function ServicesPage() {
    const [services, setServices] = useState([])
    useEffect(() => {
        getServices().then(data => setServices(data))
    }, [])

    return (
        <>
            <div>
                {services.length > 0 && services.map((service, i) => <h2 key={i}>{service.serviceName}</h2>)}
                
            </div>
        </>
    )
}

export default ServicesPage