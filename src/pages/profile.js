import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './profile.css'
import { ListGroup } from 'react-bootstrap';

const Profile = () => 
{
  const [imgPreview, setImgPreview] = useState(null);
  const [error, setError] = useState(false);


  const handleImageChange = (e) =>{
    const selected = e.target.files[0];
    const TYPES_ALLOWED = ["image/png", "image/jpeg", "image/jpg"];
    if(selected && TYPES_ALLOWED.includes(selected.type)){
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(selected);
      }
      reader.readAsDataURL(selected);
    } else {
      setError(true);
    }
  }

  return(
    <body> 
      <div id="PictureBox">
        <img src="https://picsum.photos/id/237/200/300" alt="Profile Picture" id="ProfilePic"/>
      </div>
      <article id="BioBox">
        <h1>Bill Billington Billards</h1>
        <text>"Hello, my name is Bill and I love some thicc peaches. They are my favourite fruits."</text>
      </article>
      <h2>Bill's Recent Events</h2>
      <section id="EventBox">
        <div class="event"><img src="https://picsum.photos/seed/picsum/200/300" alt="Event 1" class="EventPic"/></div>
        <div class="event"><img src="https://picsum.photos/seed/picsum/200/300" alt="Event 2" class="EventPic"/></div>
        <div class="event"><img src="https://picsum.photos/seed/picsum/200/300" alt="Event 3" class="EventPic"/></div>
        <div class="event"><img src="https://picsum.photos/seed/picsum/200/300" alt="Event 4" class="EventPic"/></div>
      </section>
    </body>
  );
}

export default Profile;