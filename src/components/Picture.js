import React, { useState } from 'react';
import face from '../assets/face.jpg';

function Picture(props){
  const [url, setUrl] = useState(face);

  // Adds image uploaded as src from img
  function changePicture(e) {
    setUrl(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div id="picture">
      <img src={url} alt="" />
      <input
        type="file" 
        name="upload"
        id="upload"
        accept="image/jpeg, image/png, image/jpg"
        onChange={changePicture}
      />
      <label htmlFor="upload">Upload picture</label>
    </div>
  );
}

export default Picture