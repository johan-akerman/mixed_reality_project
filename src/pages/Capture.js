import { faArrowAltCircleUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useRef } from "react";
import bat from "../images/bat.png";
import { useNavigate } from "react-router-dom";

export default function Capture() {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const fps = 25;
  let batAngle = 0;
  let canvasWidth = 384;
  let canvasHeight = 384;
  let centerX = canvasWidth / 2;
  let centerY = canvasHeight / 2;
  let radius = 100;
  let offset = 35;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    setInterval(updateCanvas, 1000 / fps);
  }, []);

  function updateCanvas() {
    if (batAngle < 91 && batAngle > 89) {
      navigate("/scene_01");
    }
    batAngle++;
    clearCanvas();
    drawEnvironment();
    drawBat(batAngle);
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }

  function drawBat(angle) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    var img = document.getElementById("bat");
    ctx.drawImage(
      img,
      (radius + offset) * Math.cos(batAngle * (Math.PI / 180) * -1) +
        centerX -
        25,
      (radius + offset) * Math.sin(batAngle * (Math.PI / 180) * -1) +
        centerY -
        15,
      50,
      30
    );

    console.log(batAngle);
  }

  function drawEnvironment() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "yellow";
    ctx.setLineDash([0, 0]);

    ctx.beginPath();
    ctx.arc(centerX, 57, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - 29, 60);
    ctx.lineTo(centerX + 29, 60);
    ctx.fillStyle = "rgba(255, 255, 2, 0.4)";

    ctx.fill();

    ctx.beginPath();
    ctx.rect(centerX - 15, centerY - 15, 30, 40);
    ctx.fillStyle = "#eee";
    ctx.fill();
  }

  return (
    <div className="h-screen w-full bg-green">
      <Link to="/map" className="absolute top-10 right-10 text-black">
        <FontAwesomeIcon icon={faTimes} className="text-5xl" />
      </Link>
      <div className="mx-auto w-96 text-center pt-32 text-black">
        <img id="bat" src={bat} width="220" height="277" className="hidden" />
        <h1 className="text-5xl font-black">You are approaching a scene!</h1>
        <p className="text-lg pt-4 ">
          Unlock the scene by rotating your device until the lamp is aiming at
          the bat.
        </p>

        <canvas
          ref={canvasRef}
          className="w-full h-96 mt-8"
          width={canvasWidth}
          height={canvasHeight}
        />
      </div>
    </div>
  );
}
