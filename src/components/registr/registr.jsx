import { Box, Heading, Input, Select, Text } from '@chakra-ui/react'
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Registr = () => {
  const countries = ["Albaniya","Algeria","Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia","Aruba", "Azarbaijan", "Bahamas", "Bangladesh", "Barbados", "Belize", "Benin", "Bermuda", "Bhutan"];

  return (
    <Box>
        <Box>
            <Box>
                <Heading>Ready to get free access to the world of investing?</Heading>
                <Text>Create an account to start using the platform.</Text>
            </Box>
            <Box>
              <Box>
                  <Text>E-MAIL</Text>
                  <Input placeholder='your@email.com' rounded={'0px'} width='400px'></Input>
              </Box>
              <Box>
                  <Text>PASSWORD</Text>
                  <Input placeholder='6+ characters' rounded={'0px'} width='400px'></Input>
              </Box>
              <Box>
                <Text>COUNTRY OF RESIDENCE</Text>
                <Select placeholder={'Select country'} rounded={'0px'} width='400px' isSearchable>
                  {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
        ))}
                  <FontAwesomeIcon icon={faX} />
                </Select>
              </Box>
              
            </Box>
        </Box>

    </Box>
  )
}

export default Registr