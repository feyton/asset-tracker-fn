import React, { useEffect, useState } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { axiosBase } from "../utils/api.js";

function Landing() {
  const [data, setData] = useState([]);
  const { BaseLayer } = LayersControl;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosBase.get("/assets");
      setData(res.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="p-2">
      <h2 className="font-bold text-center underline text-xl">Assets on map</h2>
      <div className="map">
        <div className="flex flex-col items-center z-10">
          <MapContainer
            center={{ lat: -1.936671, lng: 30.053524 }}
            zoom={13}
            zoomControl={false}
            className="h-screen md:h-[88vh] w-[95vw]"
          >
            <LayersControl>
              <BaseLayer checked name="Open Street">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </BaseLayer>
              <BaseLayer name="Google Sattelite">
                <TileLayer
                  url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                  maxZoom={20}
                  subdomains={["mt1", "mt2", "mt3"]}
                />
              </BaseLayer>
            </LayersControl>
            <ZoomControl position="topright" />
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default Landing;
