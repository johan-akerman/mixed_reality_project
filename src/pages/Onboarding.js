import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Onboarding() {
  return (
    <div className="h-screen w-full bg-batYellow">
      <Link to="/" className="absolute top-10 left-10">
        <FontAwesomeIcon icon={faArrowLeftLong} className="text-4xl" />
      </Link>{" "}
      <div className="mx-auto w-1/2 text-center py-32">
        <h1 className="text-4xl font-black">How To Play</h1>
        <p className="text-xl pt-4 ">1. Instruction goes here</p>
        <p className="text-xl pt-2 ">2. Instruction goes here</p>
        <p className="text-xl pt-2 ">3. Instruction goes here</p>

        <Link
          to="/map"
          className="mt-8 inline-block text-center rounded-lg px-5 py-2 -translate-y-1.5 hover:-translate-y-2.5 duration-300  text-white bg-black shadow-md  font-bold bg-accent-primary"
        >
          Start game
        </Link>
      </div>
    </div>
  );
}
