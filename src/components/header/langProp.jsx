import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

const LangProp = ({flag, name}) => {
  return (
    <Box>
        <Box display={'flex'} alignItems={'center'} gap={'10px'} borderWidth={'1px'} p={'5px'} width={'140px'}>
            <Image src={flag} width={'22px'} />
            <Text>{name}</Text>
        </Box>
    </Box>
  )
}

export default LangProp