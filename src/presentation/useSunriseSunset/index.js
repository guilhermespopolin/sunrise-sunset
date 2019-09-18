import { useState, useEffect } from 'react'

const STATUS_OK = 'OK'

function useSunriseSunset(location, dateOfReference) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [data, setData] = useState({})

  useEffect(() => {
    async function fetchLocationSunriseAndSunsetTimes() {
      const URL = 'https://api.sunrise-sunset.org/json?lat={lat}&lng={lng}&date={date}'
      const { lat, lng } = location
      const parsedURL = URL.replace('{lat}', lat)
        .replace('{lng}', lng)
        .replace('{date}', dateOfReference)

      try {
        setIsLoading(true)

        const response = await fetch(parsedURL)
        const { results, status } = await response.json()

        if (status === STATUS_OK) {
          const { sunrise, sunset } = results

          setData({ sunrise, sunset })
          setError(null)
        } else {
          setError('Something went wrong!')
        }
      } catch (err) {
        setData({})
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocationSunriseAndSunsetTimes()
  }, [location, dateOfReference])

  return { data, meta: { isLoading, error } }
}

export default useSunriseSunset
