import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import bat from "../images/bat.png";

export default function Capture() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState(0);

  return (
    <div className="h-screen w-full bg-batYellow">
      <Link to="/map" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faTimes} className="text-4xl" />
      </Link>
      <div className="mx-auto w-96 text-center py-32">
        <h1 className="text-4xl font-black">You are approaching a scene!</h1>
        <p className="text-xl pt-4 ">
          Capture the scene by looking in the right direction as it plays out.
          Be careful, if you go to far away this will close.
        </p>

        <div className="w-64 h-64 border-8 rounded-full mx-auto my-8 relative">
          <img
            src={bat}
            className="w-20 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <h1 className="absolute  top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">
            ~5m away
          </h1>
        </div>
      </div>
    </div>
  );
}
