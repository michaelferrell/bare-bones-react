import React from "react"
import styled, { css } from "styled-components"
import Column from "./Column"
import Row from "./Row"

import { getSize } from "./helpers"

const BaseGrid = styled.div`
  margin-right: auto;
  margin-left: auto;
  ${props => getSize(props.size)};
`

const Grid = ({ children, size }) => <BaseGrid size={size}>{children}</BaseGrid>

Grid.Column = Column
Grid.Row = Row

export default Grid
