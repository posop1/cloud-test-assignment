import { styled } from 'styled-components'

interface TextProps {
  size?: 'l'
  opacity?: boolean
  bold?: boolean
  color?: 'white' | 'black'
  width?: string
}
export const Text = styled.p<TextProps>`
  font-style: normal;
  font-size: ${(props) => {
    switch (props.size) {
      case 'l':
        return '20px'
      default:
        return '14px'
    }
  }};
  opacity: ${(props) => (props.opacity ? '0.6' : '1')};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  color: ${(props) => props.color};
  max-width: ${(props) => (props.width ? props.width : '100%')};
  line-height: 20px;
`
