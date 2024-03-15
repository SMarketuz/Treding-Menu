import { Box, Center, Heading } from '@chakra-ui/react'
import { color } from 'framer-motion'
import React from 'react'
import { icon1, icon2, icon3, icon4 } from '../../assets'
import OptionProp from './optionProp'

const Option = () => {
  return (
    <Box className='wrapper' >
        <Box display={'flex'} flexDirection={'column'} gap={'60px'} pt={'60px'} pb={'60px'}>
            <Box textAlign={'center'}>
                <Heading>Why invest with IQ Option?</Heading>
            </Box>
            <Box display={'flex'} justifyContent={{base: 'center' , xl: 'start'}} gap={'5px'} flexWrap={'wrap'}>
                <Box display={{base: 'block', md:'flex'}}>
                    <Box>
                    <OptionProp img={icon1} title={'Award-winning platform'} paragraph={'Award-winning software recognized and praised by the most respected experts of the industry.'} />
                    </Box>
                    <Box>
                        <OptionProp img={icon2} title={'Customizable interface'} paragraph={'Customize the platform to make it fit better to your needs — from chart type to color theme.'} />
                    </Box>
                </Box>
                <Box display={{base: 'block', md:'flex'}}>
                    <Box>
                        <OptionProp img={icon3} title={'Convenient withdrawals'} paragraph={'Withdraw your money in an instant using a wide range of available payment systems.'} />
                    </Box>
                    <Box>
                        <OptionProp img={icon4} title={'Support 24/7'} paragraph={'A team of professionals speaking your mother tongue are always here to support you.'} />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Option