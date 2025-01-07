# Additional Session - Doubts

# TOPICS and DOUBTS

[x] Positioning - Relative and Absolute
[x] Media queries
[x] Setting up the background with an image
[x] Attaching fonts in webpage
[x] Flexbox
[x] Z-Index
[ ] Grid - Layout
[ ] Using multiple classes in CSS

## Notes

### Positioning - Relative and Absolute

- when a position of an element is set to either relative or absolute, we can use the top, bottom, left and right properties to move the element from its original position.

- when the position is set to relative, The element will be placed relative to the document's normal flow. If the element is moved from its original position, but the space is still reserved for the element.

- when the position is set to absolute, the element will be placed relative to the nearest positioned ancestor. If there is no positioned ancestor, the element will be placed relative to the initial containing block.

- The element will be removed from the normal flow and the space will not be reserved for the element.

## MEDIA QUERIES

- Media queries are used to apply different styles for different devices based on the device's width, height, orientation, etc.

Example:

- 992px is the breakpoint for a medium-sized device. For >= medium-sized devices, the navigation bar should be displayed as a flexbox.

- For 991px and below, the navigation bar will be hidden and a hamburger icon will be displayed.

## z-index

- The z-index property specifies the stack order of an element.
- An element with a higher z-index will be displayed in front of an element with a lower z-index.
