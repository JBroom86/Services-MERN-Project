import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getServicesId } from "../../../utils/backend";
import { deleteService, updateService } from "../../../utils/backend";

function ServiceDetailsPage() {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [updatedService, setUpdatedService] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getServicesId(serviceId).then((data) => {
      setService(data);
      setUpdatedService(data);
    });
  }, [serviceId]);

  function handleDelete() {
    deleteService(serviceId).then(() => {
      navigate("/services");
      window.location.reload();
    });
  }

  function handleUpdate() {
    updateService(serviceId, updatedService).then((data) => {
      setService(data);
      setUpdatedService(data);
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedService({ ...updatedService, [name]: value });
    window.location.reload();
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
          <textarea
            type="text"
            name="serviceDescription"
            value={updatedService.serviceDescription || ""}
            className="mt-4 w-3/4 rounded-md"
            rows="6"
            onChange={handleChange}
          />

          <p className="mt-4 font-medium">{service.servicePrice}</p>
          <button
            className="px-4 py-2 w-1/16 bg-red-500 rounded-lg"
            onClick={handleDelete}
          >
            Delete Service
          </button>
          <button
            className="px-4 py-2 w-1/16 bg-blue-500 rounded-lg"
            onClick={handleUpdate}
          >
            Update Service
          </button>
        </div>
      )}
    </>
  );
}

export default ServiceDetailsPage;
