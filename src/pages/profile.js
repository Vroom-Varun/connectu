import React, {useState} from 'react'
import Box from '@material-ui/core/Box';
import Card from 'react-bootstrap/Card';
import Text from 'react-bootstrap/FormText'
import donutPic from './../images/donut.png'

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
      <Box color="white" bgcolor="palevioletred" p={1} height={50} fontSize={30}>
        Profile page
      </Box>
      <div className="Pic">
        <img src={profilePicture} height="150px" marginTop='20%'/>
        <p>
          Donut
        </p>
      </div>
      
      
    
    </div>
  );
}

export default Profile;

