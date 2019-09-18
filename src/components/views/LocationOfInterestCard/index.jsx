import React from 'react'
import PropTypes from 'prop-types'

import useSunriseSunset from 'presentation/useSunriseSunset'

import { WiSunrise, WiSunset } from 'react-icons/wi'
import Card from 'components/ui/Card'
import Text from 'components/ui/Text'
import Box from 'components/ui/Box'
import Loading from 'components/ui/Loading'

function LocationOfInterestCard({ location, dateOfReference, ...others }) {
  const { data, meta } = useSunriseSunset(location, dateOfReference)

  if (meta.isLoading) {
    return (
      <Card
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        minWidth="240px"
        maxWidth="260px"
        minHeight="130px"
        maxHeight="160px"
      >
        <Loading />
      </Card>
    )
  }

  return (
    <Card
      display="inline-flex"
      flexDirection="column"
      flexWrap="nowrap"
      justifyContent="space-between"
      minWidth="240px"
      maxWidth="260px"
      minHeight="130px"
      maxHeight="160px"
      padding={4}
      {...others}
    >
      <Text as="span" fontSize={[2, 3]} fontWeight="bold" marginBottom={[2, 3]}>{location.name}</Text>
      <Box
        as="section"
        display="flex"
        alignItems="center"
      >
        <WiSunrise css={`fill: ${({ theme }) => theme.colors.secondary}`} size="32" />
        <Text as="span" paddingLeft={2} fontSize={2} fontWeight="bold">Sunrise: </Text>
        <Text as="span" paddingLeft={2} fontSize={2}>{data.sunrise}</Text>
      </Box>

      <hr
        css={`
          border: none;
          margin: 0.5rem 0;
          height: 1px;
          background-image: linear-gradient(
            to right,
            transparent,
            ${({ theme }) => theme.colors.secondary},
            transparent
          )
        `}
      />

      <Box
        as="section"
        display="flex"
        alignItems="center"
      >
        <WiSunset css={`fill: ${({ theme }) => theme.colors.secondary}`} size="32" />
        <Text as="span" paddingLeft={2} fontSize={2} fontWeight="bold">Sunset: </Text>
        <Text as="span" paddingLeft={2} fontSize={2}>{data.sunset}</Text>
      </Box>
    </Card>
  )
}

LocationOfInterestCard.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  dateOfReference: PropTypes.string,
}

LocationOfInterestCard.defaultProps = {
  location: {},
  dateOfReference: '',
}

export default LocationOfInterestCard
