import React  from 'react'

const Profile =(props)=>{

    function handleName(){
        alert(`Wellcome to profile:  ${props.fullname}`)
    }
   
    var style = {
        color: 'gray',
        fontSize: 30,
        borderSize:10 ,
        border:'groove',
        margin:10,
      
      };
      var style2 = {
        color: 'gray',
        fontSize: 30,
        borderSize:10 ,
        border:'groove',
        margin:10,
        backgroundColor:'blue',
      
      };

    return (
      <div  style={style}>
      <div style={style2}>
      <p>FullName: {props.fullname}</p>
      <p>Bio: {props.bio}</p>
      <p>Profession: {props.profession}</p>
      </div>
      {props.children}
      {handleName()}
      
      </div>
    )
   }
   Profile.defaultProps={
    fullname:'djo', bio:'its default bio' , profession:'undefiened'
}





export default Profile
