import React from 'react'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa';

function UserCard({userDetails, onDelete}) {
  //const x = userDetails.name;
  const parts = userDetails.name.split(" ");
  const len = parts.length;
  var initials;
  if(len===1){
    initials = parts[0][0];
  }
  else{
    initials = parts[0][0]+parts[1][0];
  }
  return (
    <Card>
      <Sd>
        <ProfileImage>
          {initials}
        </ProfileImage>
        <Details>
          <h3>{userDetails.name}</h3>
          <p>{userDetails.designation}</p>
        </Details>
      </Sd>
        <RemoveBtn onClick={()=>{onDelete(userDetails)}}>
          <FaTrash />
        </RemoveBtn>
    </Card>
  )
}

export default UserCard

const Card = styled.div`
    height: 55px;
    margin: 2px;
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    //border-style: solid;
    background: whitesmoke;
    border-radius: 5px;
    border-width: 2px;
    width: 100%;
`
const ProfileImage = styled.div`
  margin-left: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #B0C4DE;
  text-align: center;
  line-height: 40px;
  font-size: 1.3em;
  text-transform: uppercase;
`
const Details = styled.div`
  text-align: start;
  margin-left: 15px;
  line-height: 2px;
`
const RemoveBtn = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  color: #0044a2;
  font-size: 25px;
  cursor: pointer;
  
`
const Sd = styled.div`
 display: flex;
 align-items: center;
`
