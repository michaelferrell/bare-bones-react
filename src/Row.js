import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledRow = styled.div`
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

const Row = ({ children }) => <StyledRow>{children}</StyledRow>

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Row
