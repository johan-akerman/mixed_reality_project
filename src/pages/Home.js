import { Link } from "react-router-dom";
import bat from "../images/bat.png";

export default function Home() {
  return (
    <div className="h-screen w-full bg-batYellow">
      <div className="mx-auto w-1/2 text-center py-32">
        <img src={bat} className="w-56 mx-auto" />

        <h1 className="text-6xl font-black uppercase">Wayne Manor</h1>
        <h2 className="text-5xl font-semibold uppercase tracking-normal">
          Behind The Scenes
        </h2>
        <p className="text-xl pt-4 ">
          In this locative media based game you will explore the film set of
          Batman's mansion located in Wollaton Park in Nottingham. Go for a walk
          around the park and unlock movie scenes by battling the bats that are
          guarding the mansion.
        </p>

        <Link
          to="/onboarding"
          className="mt-8 inline-block text-center rounded-lg px-5 py-2 -translate-y-1.5 hover:-translate-y-2.5 duration-300  text-white bg-black shadow-md  font-bold bg-accent-primary"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}
