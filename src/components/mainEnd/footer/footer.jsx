import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box className='wrapper' mt={'40px'} mb={'20px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
            <Box>
                <Text>Risk Warning:The financial products offered by the company carry a high level of risk and can result in the loss of all your funds. You should never invest money that you cannot afford to lose.</Text>
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'2px'}>
                <Text>Goshawk Finance LLC</Text>
                <Text>Registration No. L 22204</Text>
                <Text>Address: Lighthouse Trust Nevis Ltd, Suite 1, A.L. Evelyn Ltd Building, Main Street, Charlestown, Nevis</Text>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'}  alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={'10px'} flexWrap={'wrap'}>
                    <Text>Privacy Policy </Text>
                    <Text>Terms & Conditions</Text>
                </Box>
                <Box>
                    <Text>© 2023</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer