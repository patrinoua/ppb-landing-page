import styled from 'styled-components'

export const SectionContainer = styled.div`
  text-align: center;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  margin-top: 20px;
  padding: 10px;
  padding-bottom: 50px;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`

export const ScrollFullContainer = styled.div`
  max-width: 600px;
  height: 100%;
  overflow: scroll;
  font-size: 18px;
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
    width: 85%;
    height: auto;
    min-height: auto;
    font-size: 14px;
  }
`
export const Logo = styled.img`
  max-width: 500px;
  @media (max-width: 750px) {
    width: 90%;
  }
`

export const Description = styled(Section)`
  align-items: flex-start;
  text-align: start;
  max-width: 500px;
  line-height: 1.6;
  font-size: 18px;
  min-height: 270px;
  @media (max-width: 750px) {
    min-height: auto;
  }
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
  max-width: 450px;
  padding-right: 50px;
  // background: pink;
  @media (max-width: 750px) {
    // padding-right: 0;
    width: 70%;
  }
`
