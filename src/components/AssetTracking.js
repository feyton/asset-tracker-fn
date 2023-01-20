import React, { useState } from "react";
import { coordinates as coordinate } from "../data/coordinates";

export default function AssetTracking({ asset }) {
  const coords = coordinate[Math.floor(Math.random())];
  const [started, setStarted] = useState(false);
  const [loading, setloading] = useState(false);
  const [coordinates, setCoordinates] = useState();

  let locationHistory =
    JSON.parse(localStorage.getItem("progres" + asset.code)) || [];
  const handleTrack = async () => {
    try {
      const { num } = asset;
      const locationUpdate = setInterval(() => {
        if (num > coor?.length - 2) {
          socket.emit("finished", {
            id: serverId,
            bus,
            code: bus.route.code,
            history: locationHistory,
          });
          clearInterval(locationUpdate);
          setCoordinates(null);
          return;
        }
        num++;
        setCoordinates(JSON.parse(coor[num]));
        socket.emit("location_update", {
          asset,
          num,
          location: JSON.parse(coor[num]),
        });
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <div>
      <p>Asset name: {asset.code}</p>
      <button disabled={started} className="px-2 py-1 rounded-md">
        {started ? "Start" : "Ongoing"}
      </button>
      <h4>Location</h4>
      <div>
        <p>Lat: {coordinates.lat}</p>
        <p>Lon: {coordinates.lon}</p>
      </div>
    </div>
  );
}
