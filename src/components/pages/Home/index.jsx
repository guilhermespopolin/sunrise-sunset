import React from 'react'

import Box from 'components/ui/Box'
import Text from 'components/ui/Text'
import DatePicker from 'components/ui/DatePicker'
import LocationOfInterestCard from 'components/views/LocationOfInterestCard'

import availableLocations from 'assets/availableLocations.json'

function sanitizeDate(date) {
  return date && date.toISOString().slice(0, 10)
}

function isValidDate(dateString) {
  const regexValidation = /^\d{4}-\d{2}-\d{2}$/

  if (!dateString.match(regexValidation)) {
    return false
  }

  const tempDate = new Date(dateString)
  return tempDate.toISOString().slice(0, 10) === dateString
}

function Home() {
  const [selectedDate, setDate] = React.useState(new Date())

  const handleDateChange = newSelectedDate => setDate(newSelectedDate)
  const handleRawDateChange = (event) => {
    const date = event.target.value

    if (isValidDate(date)) {
      handleDateChange(date)
    }
  }

  return (
    <Box
      as="main"
      display="grid"
      gridTemplateRows="auto auto auto 1fr"
      gridTemplateColumns="minmax(350px, 1000px)"
      justifyContent="center"
    >
      <Text
        as="h1"
        color="primary"
        textAlign="center"
        fontSize={[6, 7, 8]}
      >
        Sunrise/Sunset
      </Text>

      <Text
        as="p"
        textAlign="justify"
        fontSize={[2, 3]}
        paddingX={[4, 5]}
        marginY={[2, 3]}
      >
        Currently, interested in locations are: Toronto, CA, Texas, USA, New York,
        USA, Pennsylvania, USA, California, USA, Sweden, Germany, France, Sri Lanka,
        Vietnam
      </Text>

      <Box justifySelf="center" marginY={3}>
        <DatePicker
          label="Choose a date of reference"
          selected={selectedDate}
          onChange={handleDateChange}
          onChangeRaw={handleRawDateChange}
        />
      </Box>

      <Box
        display="grid"
        gridGap={4}
        gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        justifyContent="center"
        justifyItems="center"
        paddingX={[4, 5]}
        paddingY={4}
      >
        {
          availableLocations.map(location => (
            <LocationOfInterestCard
              key={location.name}
              location={location}
              dateOfReference={sanitizeDate(selectedDate)}
            />
          ))
        }
      </Box>
    </Box>
  )
}

export default Home
