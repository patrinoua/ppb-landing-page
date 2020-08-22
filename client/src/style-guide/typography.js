import styled from 'styled-components'
import { colors } from './colors'

export const H1 = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 36px;
  line-height: 34px;
  color: ${colors.charcoal};
  font-style: normal;
  // letter-spacing: 0.05em;
`
export const H2 = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.charcoal};
`
export const H3 = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: ${({ color }) => color || colors.charcoal};
`
export const Regular = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.charcoal};
`

export const Prompt = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.charcoal};
  margin: 30px 0;
`
export const Subtitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${({ color }) => color || colors.mediumGray};
`

export const NavigationText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: white;
  letter-spacing: 0.05px;
  &: hover {
    cursor: pointer;
    color: black;
  }
`