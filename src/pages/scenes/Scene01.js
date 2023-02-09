import { faCirclePlay, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Scene01() {
  return (
    <div className="h-screen w-full bg-batYellow overflow-y-hidden">
      <Link to="/map" className="absolute top-10 right-10">
        <FontAwesomeIcon icon={faTimes} className="text-4xl" />
      </Link>
      <div className="text-center py-32 w-96 mx-auto">
        <h1 className="text-4xl font-black">Scene found!</h1>
        <p className="text-xl pt-4 ">Description about the scene goes here</p>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          />
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          />
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          />
          <img
            className="rounded-xl"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          />
        </div>

        <div
          to="/map"
          className="cursor-pointer mt-8 inline-block text-center rounded-lg px-5 py-2 -translate-y-1.5 hover:-translate-y-2.5 duration-300  text-white bg-black shadow-md  font-bold bg-accent-primary"
        >
          <FontAwesomeIcon icon={faCirclePlay} className="mr-2" />
          Watch scene
        </div>
      </div>
    </div>
  );
}
