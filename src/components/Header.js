import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Container>
        <Logo>
            <img src="./images/logo.jpg" alt=''/>
        </Logo>
        
       
        <HeadText>
            <Title>
                Your Spottabl Team
            </Title>
            Spottabl supports you all throughout
            
        </HeadText>
      
    </Container>
  )
}

export default Header

const Container = styled.div`
    height: 9vh;
    //background: red;
    display: flex;
    align-items: center;
    margin: 15px;
`
const HeadText = styled.div`
    justify-content: space-between;
    text-align: start;
    padding: 15px;
   

`
const Title = styled.div`
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;S

`
const Logo = styled.div`
    img {
        height: 7vh;
        margin-top: 8px;
    }
`

