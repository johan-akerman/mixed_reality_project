import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Map() {
  return (
    <div className="h-screen w-full bg-batYellow">
      <Link to="/" className="absolute top-10 left-10">
        <FontAwesomeIcon icon={faArrowLeftLong} className="text-4xl" />
      </Link>

      <Link to="/instructions" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faCircleQuestion} className="text-4xl" />
      </Link>

      <div className="py-32">
        <Link to="/scene_01">Scene!</Link>
        <Link to="/capture">Capture!</Link>
      </div>
      <div class="w-64 mx-auto fixed bottom-5 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="pb-2 font-bold">1 / 3 scenes discovered</h1>
        <div class="w-full bg-white h-4">
          <div class="bg-black h-4" style={{ width: 256 / 3 }}></div>
        </div>
      </div>
    </div>
  );
}
