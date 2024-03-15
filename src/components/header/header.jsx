import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Text, Image, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import {logo, english, arab, hindi1, china, deutsch, spain, france, india, hindi, indonesia, italyano, korea, melayu, nederlands, filipino, partugal, russian, sweden, tailand, turkey, vetnam} from '../../assets'
import LangProp from './langProp'
import StarstHeader from '../startHeader/starstHeader'

const Header = () => {
  

  
  return (
    <Box>
      <Box  className='wrapper' mt={'5px'} pl={'10px'} pr={'10px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={{base: '20px', sm: '0px'}}>
        <Box>
          <Box>
            <Image src={logo} />
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'} gap={{base: '20px', sm:'40px'}}>
          <Box display={'flex'} alignItems={'center'} gap={{base: '3px ',sm:'10px'}}>
            <Image  src={english} width={'22px'}  />
            <Text display={{base: 'none', sm: 'block'}}>English</Text>
            <Text display={{base: 'block', sm: 'none'}} fontSize={{base: '15px', sm: '15px'}}>En</Text>
            <ChevronDownIcon />
          </Box>

          <Box display={'none'}>
            <Box  display={'flex'} flexDirection={'column'} gap={'0.1px'}>
              <LangProp flag={arab} name={'العربية'} />
              <LangProp flag={hindi1} name={'বাঙালি'} />
              <LangProp flag={china} name={'中文'} />
              <LangProp flag={deutsch} name={'Deutsch'} />
              <LangProp flag={english} name={'English'} />
              <LangProp flag={spain} name={'Español'} />
              <LangProp flag={france} name={'Français'} />
              <LangProp flag={india} name={'हिंदी'} />
              <LangProp flag={hindi} name={'Hindi'} />
              <LangProp flag={indonesia} name={'Indonesia'} />
              <LangProp flag={italyano} name={'Italiano'} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'0.1px'}>
              <LangProp flag={korea} name={'ا한국어'} />
              <LangProp flag={melayu} name={'Melayu'} />
              <LangProp flag={nederlands} name={'Nederlands'} />
              <LangProp flag={filipino} name={'Filipino'} />
              <LangProp flag={partugal} name={'Português'} />
              <LangProp flag={russian} name={'Русский'} />
              <LangProp flag={sweden} name={'Svenska'} />
              <LangProp flag={tailand} name={'ไทย'} />
              <LangProp flag={turkey} name={'Türk'} />
              <LangProp flag={vetnam} name={'Tiếngviệt'} />
            </Box>
            <Box>

            </Box>
          </Box>

          <Box>
            <Button colorScheme='ff5722' bg={'#ff5722'}  pt={{ base: '0px', sm: '7px'}} pb={{base: '0px', sm: '7px'}} pr={{base: '10px', sm: '25px'}} pl={{ base: '10px', sm: '25px'}} fontSize={{base: '12px', sm: '15px'}}>SIGN UP</Button>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Header