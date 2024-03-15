import { Box, Text, Image } from '@chakra-ui/react'
import { wrap } from 'framer-motion'
import React from 'react'


const PowerfulProp = ({title, img}) => {
  return (
    <Box>
        <Box>
            <Box mt={{base:'40px', lg: '0px'}} pt={'40px'} bg={'#22293d'} width={{base: '230px', sm: '400px', md: '500px', lg: '320px',xl:'380px'}} height={{base: '400px', sm:'535px'}} rounded={'10px'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'80px'} flexWrap={'wrap'}>
                    <Box>
                        <Text textAlign={'center'} color={'white'} fontWeight={'bold'} width={'220px'} fontSize={{base: '14px', sm: '18px'}}>{title}</Text>
                    </Box>
                    <Box bg={'#5f5c74'} display={'flex'} alignItems={'center'} width={{base: '150px', sm: '300px', md: '325px', lg: '300px', xl:'325px'}} height={{base: '100px', sm:'325px'}} rounded={'50%'} >
                        <Box>
                            <Image  ml={{sm: '15px', md: '25px' , lg: '15px' , xl:'25px'}}  src={img} width={'270px'} />
                        </Box>
                    </Box>

            </Box>
        </Box>
    </Box>
  )
}

export default PowerfulProp