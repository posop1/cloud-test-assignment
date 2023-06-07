import { styled } from 'styled-components'

interface RowBoxProps {
  justify: 'center' | 'space-between' | 'flex-start' | 'flex-end'
  gap?: string
}

export const RowBox = styled.div<RowBoxProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => {
    if (props.gap) {
      return `${props.gap}px`
    } else {
      return '24px'
    }
  }};
`

interface ColumnBoxProps {
  gap?: string
  align: 'center' | 'flex-end' | 'flex-start'
  justify: 'center' | 'space-between' | 'flex-start' | 'flex-end'
}

export const ColumnBox = styled.div<ColumnBoxProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => {
    if (props.gap) {
      return `${props.gap}px`
    } else {
      return '24px'
    }
  }};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
`
