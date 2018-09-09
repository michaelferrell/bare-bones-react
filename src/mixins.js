import { css } from "styled-components"
import {
  GRID_PADDING,
  DESKTOP_SIZE,
  LAPTOP_SIZE,
  TABLET_SIZE,
  MOBILE_SIZE,
  GRID_DESKTOP_WIDTH,
  GRID_LAPTOP_WIDTH,
  GRID_TABLET_WIDTH,
  NARROW_GRID_DESKTOP_WIDTH,
  NARROW_GRID_LAPTOP_WIDTH,
  NARROW_GRID_TABLET_WIDTH
} from "./constants"

export const ResponsiveImage = css`
  img {
    max-width: 100%;
    height: auto;
  }
`

export const FluidGrid = css`
  padding: ${GRID_PADDING};
`

export const DefaultGrid = css`
  @media (min-width: ${TABLET_SIZE}) {
    width: ${GRID_TABLET_WIDTH};
  }
  @media (min-width: ${LAPTOP_SIZE}) {
    width: ${GRID_LAPTOP_WIDTH};
  }
  @media (min-width: ${DESKTOP_SIZE}) {
    width: ${GRID_DESKTOP_WIDTH};
  }
`

export const NarrowGrid = css`
  @media (min-width: ${TABLET_SIZE}) {
    width: ${NARROW_GRID_TABLET_WIDTH};
  }
  @media (min-width: ${LAPTOP_SIZE}) {
    width: ${NARROW_GRID_LAPTOP_WIDTH};
  }
  @media (min-width: ${DESKTOP_SIZE}) {
    width: ${NARROW_GRID_DESKTOP_WIDTH};
  }
`
