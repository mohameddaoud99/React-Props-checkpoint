import React from 'react';
import './App.css';
import Profile from './profile/Profile.js';
import PropTypes from 'prop-types';

var style2 = {
  color: 'gray',
  fontSize: 30,
  borderSize:10 ,
  border:'groove',
  margin:10,
  backgroundColor:'red',

};

function App() {
  return (
    <div className="App">
      <Profile style={style2}>
      <img src="image.png" style={{width:200 , height:200 }}/>
      </Profile>
    </div>
  );
}
Profile.proptype={
  fullname:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,

}


export default App;
