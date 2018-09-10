import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Column from "./Column"
import Row from "./Row"

import { getSize } from "./helpers"

const StyledGrid = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${props => getSize(props.size)};
`

const Grid = ({ children, size }) => (
  <StyledGrid size={size}>{children}</StyledGrid>
)

Grid.Column = Column
Grid.Row = Row

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.string
}

export default Grid
