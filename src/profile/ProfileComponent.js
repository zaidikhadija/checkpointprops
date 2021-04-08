
import React from 'react';
import PropTypes from 'prop-types';




const ChildComponent = (props) => {

  console.log(props);
  
  const {
    fullName, 
    Biographie,
    profession,
    children,
    handleAlert,
} = props;

return(

<div>
  <h1 style={{color:'blue'}}>{fullName}</h1>
      <p style={{color:'brown'}}>{Biographie}</p>
      <h4>{profession}</h4>
      {children}
      <button onClick={() => handleAlert(fullName)}>Alert</button>
      </div>
      

);
}
// Default Props
ChildComponent.defaultProps = {
    Biographie: 'This is a default value for the Biographie',
  };
  
  //PropTypes
ChildComponent.propTypes = {
    fullName: PropTypes.string.isRequired,
    Biographie: PropTypes.string,
    profession: PropTypes.string.isRequired,
    handleAlert: PropTypes.func.isRequired,
  };
export default ChildComponent;