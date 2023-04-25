import { useState, useEffect } from "react";
import { getServices } from "../../../utils/backend";

function ServicesPage() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices().then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="flex flex-wrap -mx-4">
        {services.length > 0 &&
          services.map((service, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-2"
            >
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-medium">{service.serviceName}</h2>
                <img
                  src={service.servicePhoto}
                  alt={service.serviceName}
                  className="mt-4 rounded-md"
                />
                <p className="mt-4 text-gray-700 truncate text-overflow overflow-hidden">
                  {service.serviceDescription}
                </p>
                <p className="mt-4 font-medium">{service.servicePrice}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ServicesPage;
