import React from 'react'
import styled from 'styled-components'

const ImagesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  // align-items: center;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`
const Image = styled.div`
  width: 254px;
  height: 450px;
  background: whitesmoke;
  // border: 1px solid black;
  margin: 20px;
  margin-top: 150px;
  flex-shrink: 0;
  margin-top: 20px;
  flex-direction: row;
  background-position: center center;
  background-size: contain;
  background-image: ${({ image }) => `url(./assets/screenshots/${image})`};
  background-repeat: no-repeat;
  box-shadow: -1px 1px 3px 2px rgba(0, 0, 0, 0.2);
  @media (max-width: 400px) {
    width: 85%;
    height: 90%;
    font-size: 14px;
    margin: 10px;
  }
`
function Screenshots() {
  const images = [
    'IMG_5105.PNG',
    'IMG_5106.PNG',
    'IMG_5109.PNG',
    'IMG_5110.PNG',
    'IMG_5115.PNG',
    'IMG_5114.PNG',
    'IMG_5111.PNG',
  ]
  return (
    <ImagesContainer>
      {images.map((image) => (
        <Image image={image} />
      ))}
    </ImagesContainer>
  )
}

export default Screenshots
