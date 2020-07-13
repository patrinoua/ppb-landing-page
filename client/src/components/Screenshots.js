import React from 'react'
import styled from 'styled-components'

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`
const Image = styled.div`
  width: 350px;
  height: 500px;
  background: whitesmoke;
  border: 2px solid black;
  margin: 10px;
  flex-shrink: 0;
  margin-top: 20px;
  flex-direction: row;
  @media (max-width: 400px) {
    width: 85%;
    height: 90%;
    font-size: 14px;
  }
`
function Screenshots() {
  const images = ['1', '2', '3', '4', '6']
  return (
    <ImagesContainer>
      {images.map((image) => (
        <Image>{image}</Image>
      ))}
    </ImagesContainer>
  )
}

export default Screenshots
