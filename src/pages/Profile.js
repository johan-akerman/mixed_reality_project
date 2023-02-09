import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="mx-auto w-1/2 text-center">
      <h1>Profile goes here</h1>
      <Link to="/map">Go back to map</Link>
    </div>
  );
}
