import React from "react";
import GoogleMapReact from "google-map-react";
import useStyles from "./styles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = props => {
  const classes = useStyles();
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCv2DwsHyygOPitFASK9IGXn_JfvLWg154"
        }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent
          lat={14.3934319}
          lng={121.0070723}
          text="Asterisk Consultancy Inc."
        />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 14.3934319,
    lng: 121.0051723
  },
  zoom: 16
};

export default Map;
