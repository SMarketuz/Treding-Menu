import { Box, Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { powerful1, powerful2, powerful3 } from '../../assets'
import PowerfulProp from './powerfulProp'

const Powerful = () => {
  return (
    <Box bg={'#161a25'}>
        <Box className='wrapper'>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'50px'} pt={'80px'} pb={'50px'} flexWrap={'wrap'}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'} alignItems={'center'}>
                    <Heading color={'white'} textAlign={'center'}>Powerful and easy-to-use features</Heading>
                    <Text color={'#aeb2be'} textAlign={'center'} >Sometimes investing can be complicated and confusing. IQ Option breaks down the <br /> complexities of investing with intuitive tools that add efficiency and simplicity.</Text>
                </Box>
                <Box display={{ base: 'block', lg:'flex'}} gap={'20px'}>
                    <PowerfulProp title={'Use smart Newsfeed to  make informed decisions'} img={powerful1} />
                    <PowerfulProp title={'Invest wisely with a variety of indicators'} img={powerful2} />
                    <PowerfulProp title={'Harness the power of a supportive community'} img={powerful3} />
                </Box>
                <Box>
                    <Button colorScheme='ff5a3e' bg={'#ff5a3e'} color={'white'} pl={{base: '10px', sm:'50px'}} pr={{base: '10px',sm:'50px'}} pt={{base: '5px', sm:'10px'}} pb={{base: '5px', sm:'10px'}} fontSize={{base: '12px', sm: '16'}}>GET STARTED FOR FREE</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Powerful