import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Instructions() {
  return (
    <div className="h-screen w-full bg-batYellow">
      <Link to="/map" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faTimes} className="text-4xl" />
      </Link>
      <div className="mx-auto w-96 py-32 text-left">
        <h1 className="text-4xl font-black">How To Play</h1>
        <p className="text-xl pt-4 ">
          <strong>Step 1:</strong> Unlock movie scenes by walking close to the
          🦇 located around Wollaton Park. Each bat is located at the exact
          location of a scene from the movie.
        </p>
        <p className="text-xl pt-2 ">
          <strong>Step 2:</strong> Once you approach a 🦇 you will be prompted
          to catch it by rotating your device until a 🔦 is aimed at the bat.
        </p>
        <p className="text-xl pt-2 ">
          <strong>Step 3:</strong> Once the 🦇 is captured, you unlock a movie
          scene. You can now read more about the scene and watch the clip.{" "}
        </p>
        <p className="text-xl pt-2 ">
          <strong>Step 4:</strong> Complete the game by capturing all the 🦇
          around the park.
        </p>
      </div>
    </div>
  );
}
