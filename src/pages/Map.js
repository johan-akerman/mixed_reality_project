import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9oYW5ha2VybWFuIiwiYSI6ImNsZHlmOXY1ZzBwdmgzcm52bG9lbnV5MmEifQ.HS7g6VOVsrFJKNRplKfyoQ";

export default function Map() {
  const mapContainer = useRef(null);

  var scenes = [
    {
      title: "scene 1",
      images: [],
      coordinates: [-1.2095947, 52.94788],
      direction: [180, 230],
      video: "",
    },
    {
      title: "scene 2",
      images: [],
      coordinates: [-1.209595, 52.947],
      direction: [180, 230],
      video: "",
    },
    {
      title: "scene 3",
      images: [],
      coordinates: [-1.21, 52.947],
      direction: [180, 230],
      video: "",
    },
  ];

  useEffect(() => {
    let map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-1.2095947, 52.94788],
      zoom: 17,
    });

    map.on("load", function (e) {
      scenes.forEach((scene) => {
        const marker = new mapboxgl.Marker();
        marker.setLngLat(scene.coordinates).addTo(map);
      });
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,

        showUserHeading: true,
      })
    );
  }, []);

  return (
    <div className="h-screen w-full bg-batYbellow">
      <Link to="/instructions" className="absolute top-5 left-5 z-10">
        <FontAwesomeIcon icon={faCircleQuestion} className="text-4xl" />
      </Link>

      <div ref={mapContainer} className="h-screen w-full absolute top-0 z-0" />

      <div class="w-64 mx-auto fixed bottom-5 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
        <h1 className="pb-2 font-bold">1 / 3 movie scenes discovered</h1>
        <div class="w-full bg-white h-4">
          <div class="bg-black h-4" style={{ width: 256 / 3 }}></div>
        </div>
      </div>
    </div>
  );
}
