import React from 'react'
import styled from "styled-components"
import UserCard from './UserCard'
import SearchBar from './SearchBar'

function Home(props) {
  return (
    <Container>
      <HdText>
        Customer Success Managers
      </HdText>
      <SearchBar addCsm={props.addCsm}/>
      <CsmContainer>

        {props.csms.length===0 ? "No Customer Success Managers":
        props.csms.map((csm)=>{
          return <UserCard userDetails = {csm} key={csm.id} onDelete={props.onDelete}/>
        })}
        
      </CsmContainer>
      <Space>

      </Space>
    </Container>
  )
}

export default Home

const Container = styled.div`
  margin: 15px;
  //height: 85vh;
  background: white;
`

const HdText = styled.h2`
  text-align: start;
  //padding: 15px;
  padding-left: 15px;
  padding-top: 15px;
  //background: yellow;
`

const CsmContainer = styled.div`
  margin-top: 20px;
  width: 98%;
  padding-left: 15px;
  padding-right: 15px;
  //background: red;
  //height: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const Space = styled.div`
  height: 15px;
`

