import { Box, Button, Heading, Text, Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import { bgImg } from '../../assets'
import Progres from './progress/progres'
import { faApple, faChrome, faWindows,} from '@fortawesome/free-brands-svg-icons';

const MainLabtop = () => {
  return (
      <Box bg={'#22293d'} mt={'20px'}>
          <Box  className='wrapper'>
              <Box>
                  <Progres />
              </Box>
              <Box mt={'80px'} >
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={{base: '80px', lg: '50px', xl:'100px'}} pb={'30px'} flexWrap={'wrap'}>
                  <Box display={'flex'} flexDirection={'column'} alignItems={{base:'center', xl: 'start'}} gap={'30px'}>
                    <Heading color={'white'} width={{md: '550px', xl:'350px'}} textAlign={{base:'center', xl: 'start'}}>Instant access to  investing, anytime  and anywhere</Heading>
                    <Text color={'white'} fontSize={{base: '15px', sm: '17px', lg:'19px'}} width={{md: '600px', lg:'380px'}} textAlign={{base:'center', xl: 'start'}}>Investing has never been easier. Everything you are looking for in an ultimate investment platform — on the device of your choice.</Text>
                    <Box>
                      <Button colorScheme='ff5a3e' bg={'#ff5a3e'} color={'white'} pl={{base: '10px', sm:'50px'}} pr={{base: '10px',sm:'50px'}} pt={{base: '5px',sm:'10px'}} pb={{base: '5px', sm:'10px'}} fontSize={{base: '12px', sm: '16'}}>GET STARTED FOR FREE</Button>
                    </Box>
                    <Box fontSize={'24px'} color={'white'} display={'flex'} gap={'30px'}>
                      <FontAwesomeIcon  icon={faApple} />
                      <FontAwesomeIcon icon={faWindows} />
                      <FontAwesomeIcon  icon={faChrome} />

                    </Box>
                  </Box>
                  <Box>
                    <Image width={{md: '800px' ,lg: '500px', xl: '700px'}} src={bgImg} />
                  </Box>
                </Box>
              </Box>
          </Box>
      </Box>

  )
}

export default MainLabtop