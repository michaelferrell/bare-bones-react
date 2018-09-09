import { FluidGrid, DefaultGrid, NarrowGrid } from "./mixins"

export const getSize = size => {
  switch (size) {
    case "fluid":
      return FluidGrid
    case "narrow":
      return NarrowGrid
    default:
      return DefaultGrid
  }
}

export const getTextAlign = textAlign => {
  switch (textAlign) {
    case "left":
      return "left"
    case "center":
      return "center"
    case "right":
      return "right"
    default:
      return null
  }
}
