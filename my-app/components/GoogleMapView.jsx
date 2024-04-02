'use client';

import { useEffect, useState } from "react";
import { LoadScript, MarkerF } from "@react-google-maps/api";
import { GoogleMap } from "@react-google-maps/api";

export function GoogleMapView() {
  const [userLocation, setUserLocation] = useState([]);
  
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(pos) {
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      });
    });
  };

  return (
    <div style={{ width: "100vw", height: "70vh" }} className="flex-center">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={['ab30dff87ec2701b']}
      >
        <GoogleMap
          mapContainerStyle={{ width: "90%", height: "100%" }}
          center={userLocation}
          options={{ mapId: 'ab30dff87ec2701b' }}
          zoom={16}
        >
          <MarkerF position={userLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}