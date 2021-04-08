import React from 'react';
 import ProfileComponent from './ProfileComponent';




const ParentComponent = () => {
    const handleAlert = (fullName) => alert(`Hi! ${fullName}`);

    const myStyle={ background:"peachpuff", textAlign:"center"}
    return (
      <div style={myStyle}>
        <ProfileComponent 
          //sting type
          fullName="Hi! My name is Zaidi Khadija"
          
          Biographie="My name is zaidi khadija i graduated in industrial computer science in 2015"
          
          profession="I am a student in GOMYCODE"
          
          handleAlert={handleAlert}>
            
        <div>
            <h3 style= {{color:'purple',background:"green",borderRadius: "50%"}}> This is my image</h3>
        <img  style={{borderRadius: "50%",
  border:"solid 5px rebeccapurple",
  width: "250px",
  height: "250px"}} src='/khadija.jpg' alt="khadija"></img>
      </div>
    </ProfileComponent >
  </div>
);
}

export default ParentComponent;
