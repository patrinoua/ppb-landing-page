import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SectionContainer = styled.div`
  // text-align: center;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  margin-top: 20px;
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
    // margin-top: 0;
    // padding: 0px;

    font-size: 16px;
  }
`
export const StyledALink = styled.a`
  color: black;
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
export const Logo = styled.div`
  width: 90%;
  max-width: 500px;
  height: 25vh;
  background-image: url('pingpongbudsLogo1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 750px) {
    width: 90%;
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
export const AboutSection = styled(Description)`
  min-height: 200px;
  @media (max-width: 750px) {
    min-height: 150px;
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
`
export const Success = styled(Section)`
  height: 35px;
  font-size: 16px;
`
export const GetInvolved = styled(Section)`
  height: 10%;
  max-width: 350px;
  min-height: 140px;
  padding-right: 50px;
  // background: pink;
  @media (max-width: 750px) {
    // padding-right: 0;
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
