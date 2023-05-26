import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [avatar, setAvatar] = useState();

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      setAvatar(this.result);
    });
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <div>
        <label htmlFor="changeAvatar">Profil resmini değiştirmek için tıklayın..</label>
        <input type="file" id="changeAvatar" onChange={handleAvatar}></input>
      </div>
      {(avatar && (
        <div className="image-box">
          <img src={avatar} alt="Image" />
        </div>
      )) ||
        null}
    </div>
  );
}
