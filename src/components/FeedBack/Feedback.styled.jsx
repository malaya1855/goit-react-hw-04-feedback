import styled from '@emotion/styled'
export const FieldFeedback = styled.div`
display:flex;
gap: 20px;
`

export const ButtonFeedback = styled.button`
color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all .3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
  // margin-right: 30px;
  :hover {
    border: 1px solid white;
  }
}
`