
import { Root, Trigger, Portal, Content, Overlay, Close, Title, Description } from '../components/Dialog/primitives'

export const Dialog = {
  Root: Root,
  Trigger: Trigger,
  Portal: Portal,
  Content: Content,
  Overlay: Overlay,
  Close: Close,
  Title: Title,
  Description: Description,
}  as {
  Root: typeof Root
  Trigger: typeof Trigger
  Portal: typeof Portal
  Content: typeof Content
  Overlay: typeof Overlay
  Close: typeof Close
  Title: typeof Title
  Description: typeof Description
}
