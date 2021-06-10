import React from 'react';

const GoogleMap = () => {

  return (
    <>
      <iframe
        className="my-5 w-100"
        title="Google Map"
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+"Gaibandha"&destination=Bangladesh+"Gopalganj"&avoid=tolls|highways`}
        width="800"
        height="650"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </>
  );
};

export default GoogleMap;