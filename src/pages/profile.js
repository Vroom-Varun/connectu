import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import Text from 'react-bootstrap/FormText'
import Button from 'react-bootstrap/Button'
import donutPic from './../images/donut.png'
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

  var profilePicture = donutPic;

  return(
    <div style={{ marginLeft: '0%', marginTop: '0px', width: '100%', height: '60px' }}>
    {/*
    <Box color="white" bgcolor="palevioletred" p={1} height={200}>
      {error && <p className="errorMsg">File not supported</p>}
      <div className="imgPreview">
        {!imgPreview&&(
          <>
          <p>Add and image</p>
          <label htmlFor="fileUpload" className="customFileUpload">
            Choose file
            </label>
            <input type="file" id="fileUpload" onChange={handleImageChange} />
            <span>
              (jpg, jpg or png)
            </span>
          </>
          
        )}
      </div>
    </Box>
    */}
      <div className="Pic">
        <div className="ProfileBox">
          <img src={profilePicture} height="120px" marginTop='20%'/>  
        </div>
      </div>
      <div className='user-details'>
        <p>Damien O'Neil</p>
        <p>3rd Year (20)</p>
        <p>Seattle University</p>
      </div>
      <div>
      <div className='interests'>
        <Card style={{width:'18rem'}}>
          <Card.Header as="h5">Interests</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Volleyball</ListGroup.Item>
            <ListGroup.Item>Coding</ListGroup.Item>
            <ListGroup.Item>Robotics</ListGroup.Item>
          </ListGroup>
        </Card>

        <Card style={{width:'18rem'}}>
          <Card.Header as="h5">Groups</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Volleyball Club</ListGroup.Item>
            <ListGroup.Item>SU ACM</ListGroup.Item>
            <ListGroup.Item>SU Robotics</ListGroup.Item>
          </ListGroup>
        </Card>

      </div>
      </div>
      

      
      
    </div>
    
  );
}
export default Profile;

