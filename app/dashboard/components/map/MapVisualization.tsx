import React, { useRef } from "react";
import {
  Map,
  Source,
  Layer,
  MapRef,
  GeoJSONSource,
  MapLayerMouseEvent,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import {
  clusterLayer,
  clusterCountLayer,
  unclusteredPointLayer,
} from "./layers";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZ2dnNnIzNHQiLCJhIjoiY2x1MWUydjJjMGxmbDJqcXN0emc2bTNzNSJ9.WlN5diRDuBtsseunIzhC4A";

console.log("MAPBOX_TOKEN:", MAPBOX_TOKEN);

const MapVisualization: React.FC = () => {
  const mapRef = useRef<MapRef>(null);

  const onClick = (e: MapLayerMouseEvent) => {
    const features = e.features;
    if (!features || features.length === 0) {
      return;
    }

    const feature = features[0];
    console.log("FEATURE:", feature);
    const clusterId = feature.properties?.cluster_id;

    const mapboxSource = mapRef?.current?.getSource(
      "earthquakes"
    ) as GeoJSONSource;

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      // Ensure TypeScript knows the type of the geometry as 'Point'
      const coordinates =
        feature.geometry.type === "Point"
          ? (feature.geometry.coordinates as [number, number])
          : undefined;

      if (coordinates) {
        mapRef?.current?.easeTo({
          center: coordinates,
          zoom,
          duration: 500,
        });
      }
    });
  };

  return (
    <div className="h-full w-full">
      <Map
        initialViewState={{
          latitude: 52.132633,
          longitude: 5.291266,
          zoom: 8,
          pitch: 50,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        // interactiveLayerIds={[clusterLayer.id as string]}
        onClick={onClick}
        ref={mapRef}
        style={{ height: 300 }}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {/* <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source> */}
      </Map>
    </div>
  );
};

export default MapVisualization;
