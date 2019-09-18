import styled from 'styled-components'
import { space, color, typography, variant } from 'styled-system'
import PropTypes from 'prop-types'

const Text = styled('span')(
  space,
  color,
  typography,
  variant({
    prop: 'truncate',
    variants: {
      true: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      },
    },
  }),
)

Text.propTypes = {
  truncate: PropTypes.bool,
}

Text.defaultProps = {
  truncate: false,
}

export default Text
