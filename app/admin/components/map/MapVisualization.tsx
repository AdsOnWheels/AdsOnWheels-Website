export {};
// import React, { useRef, useState, useEffect } from "react";
// import ReactMapGL, { MapRef } from "react-map-gl";
// import MapboxGlLanguage from "@mapbox/mapbox-gl-language";

// interface ViewportState {
//   width: number;
//   height: number;
//   latitude: number;
//   longitude: number;
//   zoom: number;
// }

// const MapVisualization: React.FC = () => {
//   const [viewport, setViewport] = useState<ViewportState>({
//     width: 100,
//     height: 400,
//     latitude: 52.132633,
//     longitude: 5.291266,
//     zoom: 8,
//   });

//   const mapRef = useRef<MapRef>(null);

//   const handleViewportChange = (nextViewport: ViewportState) => {
//     setViewport(nextViewport);
//   };

//   useEffect(() => {
//     const map = mapRef.current?.getMap();
//     if (map) {
//       map.addControl(
//         new MapboxGlLanguage({
//           defaultLanguage: "zh",
//         })
//       );
//     }
//   }, []);

//   return (
//     <div className="h-full w-full">
//       <ReactMapGL
//         {...viewport}
//         onViewportChange={handleViewportChange} // Corrected prop name here
//         mapboxApiAccessToken="your_mapbox_access_token_here"
//         ref={mapRef}
//       />
//     </div>
//   );
// };

// export default MapVisualization;
