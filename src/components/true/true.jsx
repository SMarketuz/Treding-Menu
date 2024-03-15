import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const True = () => {
  return (
    <Box bg={{base: 'white', md:'#161a25'}} pl={'10px'} >
        <Box className='wrapper' display={'flex'} alignItems={'center'} gap={{base: '50px', md:'100px'}} pt={'30px'} pb={'30px'}>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Box bg={'#35a947'} height={'22px'} width={'22px'} textAlign={'center'} rounded={'50%'}>
                    <FontAwesomeIcon icon={faCheck} color={'white'}/>
                </Box>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}} fontWeight={'bold'} color={{base: 'black', md:'white'}}>$10 000 demo account</Text>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}}  color={{base: '#4f566b', md: '#aeb2be'}}>Test your investing strategy with free demo account</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                <Box  bg={'#35a947'} height={'22px'} width={'22px'} textAlign={'center'} rounded={'50%'}>
                    <FontAwesomeIcon icon={faCheck} color={'white'}/>
                </Box>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}}  fontWeight={'bold'} color={{base: 'black',md:'white'}}>$10 000 demo account</Text>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}}  color={{base: '#4f566b', md: '#aeb2be'}}>No fees when you make a deposit or withdraw funds</Text>
            </Box>
            <Box display={{base: 'none', md:'flex'}} flexDirection={'column'} gap={'10px'}>
                <Box bg={'#35a947'} height={'22px'} width={'22px'} textAlign={'center'} rounded={'50%'}>
                    <FontAwesomeIcon icon={faCheck} color={'white'}/>
                </Box>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}}  fontWeight={'bold'} color={{base: 'black',md:'white'}}>$1 minimum investment</Text>
                <Text fontSize={{base: '15px', md:'16px', lg: '18'}} color={{base: '#4f566b', md: '#aeb2be'}}>It’s easy to get started with small amounts of money</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default True

