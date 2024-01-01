import {
  Root,
  Trigger,
  Portal,
  Content,
  Overlay,
  Close,
  Title,
  Description,
  Root,
  Thumb,
  Track,
  Range,
} from '../components/Dialog/primitives'

export const Dialog = {
  Root: Root,
  Trigger: Trigger,
  Portal: Portal,
  Content: Content,
  Overlay: Overlay,
  Close: Close,
  Title: Title,
  Description: Description,
} as {
  Root: typeof Root
  Trigger: typeof Trigger
  Portal: typeof Portal
  Content: typeof Content
  Overlay: typeof Overlay
  Close: typeof Close
  Title: typeof Title
  Description: typeof Description
}

export const Slider = {
  Root: Root,
  Thumb: Thumb,
  Track: Track,
  Range: Range,
} as {
  Root: typeof Root
  Thumb: typeof Thumb
  Track: typeof Track
  Range: typeof Range
}
