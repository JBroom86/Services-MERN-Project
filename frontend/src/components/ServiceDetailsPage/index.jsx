import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate} from 'react-router-dom'
import { getServicesId } from "../../../utils/backend";
import { deleteService } from "../../../utils/backend";

function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(serviceId)
    getServicesId(serviceId).then((data) => setService(data));
  }, [serviceId]);

  function handleDelete() {
    deleteService(serviceId).then(() => {
      navigate('/services')
      window.location.reload()
    })
  }

  return (
    <>
      {service && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h1 className="text-lg font-medium">{service.serviceName}</h1>
          <img
            src={service.servicePhoto}
            alt={service.serviceName}
            className="mt-4 w-2/4 rounded-md"
          />
          <p className="mt-4 text-gray-700  text-overflow overflow-hidden w-2/4">
            {service.serviceDescription}
          </p>
          <p className="mt-4 font-medium">{service.servicePrice}</p>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default ServiceDetailsPage;
