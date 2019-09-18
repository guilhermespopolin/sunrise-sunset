import React from 'react'

import Box from 'components/ui/Box'

const Overlay = props => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    position="absolute"
    top="0"
    right="0"
    bottom="0"
    left="0"
    backgroundColor="rgba(0, 0, 0, 0.8)"
    {...props}
  />
)

export default Overlay
