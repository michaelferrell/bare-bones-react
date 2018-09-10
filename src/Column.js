import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getTextAlign } from "./helpers"
import { MOBILE_SIZE, COLUMN_PADDING } from "./constants"
import { ResponsiveImage } from "./mixins"

const StyledColumn = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  width: ${props => {
    if (props.width && typeof props.width === "number") {
      return props.width + "%"
    }
  }};
  text-align: ${props => getTextAlign(props.textAlign)};
  padding: ${props => {
    if (props.unpadded) {
      return "0"
    } else if (props.padding) {
      return props.padding
    } else {
      return COLUMN_PADDING
    }
  }}
  margin-left: ${props => {
    if (props.offset) {
      return props.offset + "%"
    }
  }};
  @media (max-width: ${MOBILE_SIZE}) {
    width: 100%;
    margin-left: 0;
  }
  ${ResponsiveImage};
`

const Column = ({ children, ...props }) => (
  <StyledColumn {...props}>{children}</StyledColumn>
)

Column.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  textAlign: PropTypes.string,
  unpadded: PropTypes.bool,
  padding: PropTypes.string,
  offset: PropTypes.number
}

export default Column
