import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getServices } from "../../../utils/backend";

function ServicesPage() {
  const [services, setServices] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getServices().then((data) => setServices(data));
  }, []);

  function handleCreateService() {
    navigate("/services/create");
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 inline-block w-1/4 shadow-lg"
          onClick={handleCreateService}
        >
          Add Service
        </button>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.length > 0 &&
          services.map((service, i) => (
            <div
              key={i}
              //   serviceData={service}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-2"
            >
              <Link to={`/services/${service._id}`}>
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
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default ServicesPage;
