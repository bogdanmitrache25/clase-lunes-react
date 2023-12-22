import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const UseEffectyFetch = () => {
  const [chargingStations, setChargingStations] = useState([]);

  useEffect(() => {
    const fetchChargingStations = async () => {
      try {
        const response = await fetch(
          "https://api.openchargemap.io/v3/poi?key=2e33ddd9-7540-4242-9f16-6feb657eaeb1&countrycode=ES"
        );
        const data = await response.json();
        setChargingStations(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChargingStations();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      {/* Estableciendo una altura relativa */}
      <h1>Estaciones de carga en España:</h1>
      <MapContainer
        center={[40.416775, -3.70379]}
        zoom={6}
        scrollWheelZoom={true}
        style={{
          height: "100%",
        }} /* Asegurando que el mapa ocupe todo el espacio disponible */
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {chargingStations.map((station) => (
          <Marker
            key={station.ID}
            position={[
              station.AddressInfo.Latitude,
              station.AddressInfo.Longitude,
            ]}
          >
            <Popup>
              <div>
                <h2>{station.AddressInfo.Title}</h2>
                <p>{station.AddressInfo.Town}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
