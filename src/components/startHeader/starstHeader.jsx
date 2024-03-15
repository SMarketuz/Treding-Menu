import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const StarstHeader = () => {
  return (
    <Box>
        <Box bg={'#ff5722'} display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'20px'}>
            <Box>
                <Text color={'white'} fontWeight={'bold'} fontSize={{base: '10px', sm: '14px'}}>IQ Option. 10 years of the ultimate trading experience</Text>
            </Box>
            <Box display={'flex'} alignItems={'center'} bg={'#ff5a3e'}  >
                <Button p={'5px'}  colorScheme='ff5a3e'>Join now</Button>
                <ChevronRightIcon color={'white'} fontSize={{base: '12px', sm:'20px'}}/>
            </Box>
        </Box>
    </Box>
  )
}

export default StarstHeader