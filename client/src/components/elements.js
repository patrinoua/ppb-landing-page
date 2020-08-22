import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../style-guide/colors'

export const Logo = styled.div`
  width: 90%;
  max-width: 500px;
  // height: 25vh;
  min-height: 200px;
  max-height: 450px;
  background-image: url('logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 450px) {
    width: 90%;
    min-height: 110px;
  }
`

export const SectionContainer = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  padding: 10px;
  overflow: scroll;
  font-size: 18px;
  max-width: 600px;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  @media (max-width: 750px) {
    width: 85%;
    font-size: 16px;
  }
`
export const StyledALink = styled.a`
  color: ${colors.charcoal};
  // text-decoration: none;
  display: inline;
`
export const ScrollFullContainer = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  font-size: 18px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

export const Section = styled.div`
  width: 100%;
  height: 33.33%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  @media (max-width: 750px) {
    height: auto;
    min-height: auto;
    font-size: 16px;
  }
`

export const Description = styled(Section)`
  align-items: center;
  text-align: start;
  max-width: 500px;
  line-height: 1.6;
  font-weight: 500;
  min-height: 270px;
  @media (max-width: 750px) {
    min-height: 200px;
  }
`
export const AboutSection = styled.div`
  width: 100%;
  max-width: 90%;
  height: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 270px;
  flex-shrink: 0;
  @media (max-width: 450px) {
    min-height: 150px;
    height: auto;
    margin: 10px 0;
  }
`

export const TextContainer = styled(Description)`
  height: auto;
  min-height: auto;
`

export const Error = styled(Section)`
  height: 50px;
  font-size: 16px;
  color: red;
  max-width: 100%;
`
export const Success = styled(Section)`
  height: 35px;
  font-size: 16px;
  max-width: 100%;
`
export const GetInvolved = styled(Section)`
  height: 20%;
  max-width: 300px;
  min-height: 140px;
  @media (max-width: 450px) {
    width: 80%;
  }
`

export const NavigationButtonItem = styled(Link)`
  display: flex;
  justify-content: center;
  width: 110px;
  color: black;
  padding: 10px;
  padding-bottom: 5px;
  margin: 0 15px;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.5px;
  @media (max-width: 750px) {
    height: 20px;
    width: 72px;
    margin: 0 5px;
    font-size: 13px;
    flex-shrink: 0;
  }
`
export const ButtonItem = styled.div`
  display: flex;
  justify-content: center;
  width: 110px;
  color: black;
  padding: 10px;
  padding-bottom: 5px;
  margin: 0 15px;
  text-decoration: none;
  font-size: 20px;
  letter-spacing: 0.5px;
  @media (max-width: 750px) {
    height: 20px;
    width: 72px;
    margin: 0 5px;
    font-size: 13px;
    flex-shrink: 0;
  }
`
export const AvailableOn = styled.div`
  width: 400px;
  height: 100px;
  background-image: url('assets/GooglePlay.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
