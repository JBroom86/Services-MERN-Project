import { useState, useEffect } from "react";
import { getServices } from "../../../utils/backend";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div class="flex justify-center items-center mt-8">
        <Link to={"/services"}>
          <img
            src="..\src\assets\photos\IMG_6922.jpg"
            
            class="rounded-full w-3/4 mx-auto hover:shadow-2xl focus:shadow-lg hover:rotate-45 transform transition-all duration-500 ease-in-out"
          />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
