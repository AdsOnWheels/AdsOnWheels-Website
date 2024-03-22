import Link from "next/link";
import React, { memo } from "react";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <h3>Create and Style Clusters</h3>
      <p>
        Use Mapbox GL JS built-in functions to visualize points as clusters.
      </p>
      <div className="source-link">
        <Link
          href="https://github.com/visgl/react-map-gl/tree/7.1-release/examples/clusters"
          target="_new"
        >
          View Code ↗
        </Link>
      </div>
    </div>
  );
};

export default memo(ControlPanel);
