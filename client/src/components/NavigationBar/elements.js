import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  background: white;
  display: flex;
  justify-content: flex-end;
  justify-content: center;
  align-items: center;
`
export const Item = styled(Link)`
  display: flex;
  justify-content: center;
  border-bottom: ${(props) => {
    // if (props.active) {
    //   return '2px solid #08ccaa'
    // }
  }};
  padding: 10px 20px;
  // padding-bottom: 5px;
  margin: 0 15px;
  text-decoration: none;
  &: hover {
    cursor: pointer;
    background: #08ccaa;
  }
  @media (max-width: 430px) {
    height: 20px;
    width: auto;
    margin: 0;
    padding: 5px;

    flex-shrink: 0;
  }
`
export const Text = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: black;
  letter-spacing: 0.05px;
  &: hover {
    cursor: pointer;
    color: black;
  }
  @media (max-width: 430px) {
    font-size: 13px;
  }
`
