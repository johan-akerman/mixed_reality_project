import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Instructions() {
  return (
    <div className="h-screen w-full bg-batYellow">
      <Link to="/map" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faTimes} className="text-4xl" />
      </Link>
      <div className="mx-auto w-1/2 text-center py-32">
        <h1 className="text-4xl font-black">How To Play</h1>
        <p className="text-xl pt-4 ">1. Instruction goes here</p>
        <p className="text-xl pt-2 ">2. Instruction goes here</p>
        <p className="text-xl pt-2 ">3. Instruction goes here</p>
      </div>
    </div>
  );
}
