import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const OptionProp = ({img, title, paragraph}) => {
  return (
    <Box>
        <Box>
            <Box display={'flex'}  mt={'20px'} flexDirection={{base: 'column', sm: 'row', lg: 'column'}} gap={{base: '15px', lg:'25px'}}>
                <Box>
                    <Image src={img} />
                </Box>
                <Box>
                    <Text fontSize={'18px'} fontWeight={'bold'} >{title}</Text>
                    <Text fontSize={'16px'} width={{base: '200px', sm: '300px', md: '280px'}} color={'#4f566b'}>{paragraph}</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default OptionProp