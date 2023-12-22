import React, { useState } from "react";

export const PhotosApp = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFetch = () => {
    fetchPhotos();
  };

  const renderImages = () => {
    return photos.map((photo) => (
      <div key={photo.id} style={{ margin: "10px", textAlign: "center" }}>
        <h3>{photo.title}</h3>
        <img src={photo.url} alt={photo.title} style={{ maxWidth: "200px" }} />
      </div>
    ));
  };

  return (
    <>
      <h1>Fotos</h1>
      <button onClick={handleFetch}>Llamar a la Api</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.length > 0 && renderImages()}
      </div>
    </>
  );
};
