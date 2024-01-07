import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
  Portal as DialogPortal,
  Content as DialogContent,
  Overlay as DialogOverlay,
  Close as DialogClose,
  Title as DialogTitle,
  Description as DialogDescription,
} from '../components/Dialog/primitives'

import {
  Root as SliderRoot,
  Thumb as SliderThumb,
  Track as SliderTrack,
  Range as SliderRange,
} from '../components/Slider/primitives'

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Portal: DialogPortal,
  Content: DialogContent,
  Overlay: DialogOverlay,
  Close: DialogClose,
  Title: DialogTitle,
  Description: DialogDescription,
} as {
  Root: typeof DialogRoot
  Trigger: typeof DialogTrigger
  Portal: typeof DialogPortal
  Content: typeof DialogContent
  Overlay: typeof DialogOverlay
  Close: typeof DialogClose
  Title: typeof DialogTitle
  Description: typeof DialogDescription
}

export const Slider = {
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Range: SliderRange,
} as {
  Root: typeof SliderRoot
  Thumb: typeof SliderThumb
  Track: typeof SliderTrack
  Range: typeof SliderRange
}
