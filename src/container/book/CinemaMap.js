
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';



import 'mapbox-gl/dist/mapbox-gl.css';


const storeList = [
  { name: 'CU', location: [37.565964, 126.986574] },
  { name: '할리스', location: [37.564431, 126.986591] },
  { name: '세븐일레븐', location: [37.565188, 126.983238] },
  { name: '파리바게트', location: [37.564869, 126.984450] },
  { name: '스타벅스', location: [37.562003, 126.985829] }
];



const CinemaMap = () => {
  const MAP_TOKEN = 'pk.eyJ1Ijoic2VqaW4xMDMxIiwiYSI6ImNrMmlrMndjZjFoaXozYm8waTFvOTFoMG4ifQ.TC3FfNggGE7thAmIe2k_AA';
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 126.024612,
    width: '30vw',
    height: '100vh',
    zoom: 4
    });
  
  return (
    <div className="Mapbox">
      <ReactMapGL
        {...viewport}
        transitionDuration={10}
        transitionInterpolator={new FlyToInterpolator()}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => {
        setViewport(viewport);
        }}
        >
        {
        storeList.map((store, i) => (
        <Marker
        key={i}
        latitude={store.location[0]}
        longitude={store.location[1]}
        >
        <button
        className="btn-marker"
        />
        </Marker>
        ))
        }
     </ReactMapGL>
    </div>


  );


};
export default CinemaMap;


