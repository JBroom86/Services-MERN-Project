import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createService } from "../../../utils/backend";

function CreateServicePage() {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [servicePhoto, setServicePhoto] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newService = {
      serviceName,
      serviceDescription,
      servicePrice,
      servicePhoto
    };
    createService(newService).then(() => {
      navigate("/services");
    });
  }

  return (
    <>
      <h1 className="text-2xl font-medium mb-4">Create New Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="serviceName">
            Service Name
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            name="serviceName"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="serviceDescription">
            Service Description
          </label>
          <textarea
            className="border rounded-md p-2 w-full"
            name="serviceDescription"
            value={serviceDescription}
            onChange={(e) => setServiceDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="servicePrice">
            Service Price 
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            name="servicePrice"
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="servicePhoto">
            Service Photo
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            name="servicePhoto"
            value={servicePhoto}
            onChange={(e) => setServicePhoto(e.target.value)}
            required
          />
        </div>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Create Service
        </button>
      </form>
    </>
  );
}

export default CreateServicePage;
