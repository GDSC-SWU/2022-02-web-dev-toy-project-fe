import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backButton from '../../assets/images/back_Key.svg'

function NavigationBar() {
  return (
    <NavigationBarWrapper>
      <BackButton>
        <BackButtonImage src={backButton} alt="go back" />
      </BackButton>
    </NavigationBarWrapper>
  )
}

const NavigationBarWrapper = styled.div`
  margin-top: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.625rem;
  padding-left: 8px;
`

const BackButton = styled.button`
  width: 2rem;
  height: 2rem;
`

const BackButtonImage = styled.img`
  width: 2rem;
  height: 2rem;
`

export default NavigationBar
