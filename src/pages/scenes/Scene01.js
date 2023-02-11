import { faCirclePlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Scene01() {
  return (
    <div className="h-screen w-full bg-green overflow-y-hidden">
      <Link to="/map" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faTimes} className="text-4xl" />
      </Link>
      <div className="text-center py-32 w-96 mx-auto">
        <h1 className="text-4xl font-black">Scene unlocked! 🔓</h1>
        <p className="text-lg pt-4 ">Description about the scene goes here</p>

        <video width="400" controls className="rounded-xl mt-8">
          <source
            src="https://www.youtube.com/watch?v=XawcLiI0HOg&ab_channel=CaptainDarrow"
            type="video/mp4"
          />
          <source
            src="https://www.youtube.com/watch?v=XawcLiI0HOg&ab_channel=CaptainDarrow"
            type="video/ogg"
          />
        </video>
      </div>
    </div>
  );
}
