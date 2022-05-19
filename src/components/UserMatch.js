import React from 'react'
import styled from 'styled-components'

function UserMatch({user, clearSearch, addSelectedUser}) {
  const nameParts = user.name.split(" ");
  const l = nameParts.length;
  var initials = "";
  if (l>1){
    initials = nameParts[0][0]+nameParts[1][0];
  } else{
    initials = nameParts[0][0];
  }

  return (
    <Match onClick={()=>{
      addSelectedUser(user);
      clearSearch()}}>
      <ProfileImage>
        {initials}
      </ProfileImage>
      <Details>
        <h4>{user.name}</h4>
        <SubDetails>
          <Dm>{user.designation}</Dm>
          <Dm>{user.email}</Dm>
        </SubDetails>
      </Details>
      
    </Match>
  )
}

export default UserMatch

const Match = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  margin-top: 1px;
  margin-left: 15px;
  width: 88%;
  background: whitesmoke;
  
    
`
const ProfileImage = styled.div`
margin-left: 8px;
width: 40px;
height: 40px;
border-radius: 50%;
background: #a7aafa;
text-align: center;
line-height: 40px;
font-size: 1.3em;
text-transform: uppercase;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 10px;
  line-height: 1px;
  margin-bottom: 20px;
  
`
const SubDetails = styled.div`
  display: flex;
  
`

const Dm = styled.div`
  margin-right: 30px; 
`
