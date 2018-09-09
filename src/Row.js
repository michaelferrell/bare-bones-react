import React from "react"
import styled from "styled-components"

const FlexRow = styled.div`
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  white-space: no-wrap;
`

export default ({ children }) => <FlexRow>{children}</FlexRow>
