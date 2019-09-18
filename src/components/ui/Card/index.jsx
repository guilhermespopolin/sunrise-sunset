import React from 'react'

import Box from 'components/ui/Box'

const Card = props => (
  <Box
    boxShadow="0 0 4px rgba(0, 0, 0, 0.4)"
    backgroundColor="white"
    borderRadius="4px"
    {...props}
  />
)

export default Card
