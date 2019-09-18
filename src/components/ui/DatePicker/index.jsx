import React from 'react'
import PropTypes from 'prop-types'

import { GoCalendar } from 'react-icons/go'
import ReactDatePicker from 'react-datepicker'
import Box from 'components/ui/Box'
import Text from 'components/ui/Text'

import 'react-datepicker/dist/react-datepicker.css'

function DatePickerField({ label, ...others }) {
  return (
    <Box position="relative" display="inline-flex" flexDirection="column">
      <Text htmlFor="date-of-reference-picker" marginBottom={3}>{label}</Text>
      <ReactDatePicker
        id="date-of-reference-picker"
        style={{ position: 'relative' }}
        placeholderText="YYYY/MM/DD"
        dateFormat="yyyy/MM/dd"
        {...others}
      />
      <GoCalendar
        css={`
          position: absolute;
          top: 50%;
          right: 8px;
          fill: ${({ theme }) => theme.colors.darkGray};
        `}
        size="24"
      />
    </Box>
  )
}

DatePickerField.propTypes = {
  label: PropTypes.string,
}

DatePickerField.defaultProps = {
  label: 'Select a date',
}

export default DatePickerField
