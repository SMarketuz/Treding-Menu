import { Box, Text } from '@chakra-ui/react'
import { faBriefcase, faSignal, faUpRightFromSquare, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MainEnd = () => {
  return (
    <Box>
        <Box display={{base: 'block', sm: 'flex'}} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} >
            <Box bg={'#22293d'} pb={'40px'} pt={'40px'} width={{base: '100%', sm:'50%'}} > 
                <Box>
                    <Box display={'flex'} justifyContent={'space-around'} >
                        <Box>
                            <FontAwesomeIcon icon={faUser} color={'white'}/>
                            <Text fontWeight={'bold'} color={'white'}>8 000 000+</Text>
                            <Text color={'#aeb2be'}>Registered users</Text>
                        </Box>
                        <Box>
                            <FontAwesomeIcon icon={faBriefcase} color={'white'} />
                            <Text fontWeight={'bold'} color={'white'}>15 000+</Text>
                            <Text color={'#aeb2be'}>Active investors daily</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box bg={'#161a25'} pb={'40px'} pt={'40px'} width={{base: '100%', sm:'50%'}} >
                <Box>
                    <Box display={'flex'} justifyContent={'space-around'}>
                        <Box>
                            <FontAwesomeIcon icon={faSignal} color={'white'} />
                            <Text fontWeight={'bold'} color={'white'}>15 000+</Text>
                            <Text color={'#aeb2be'}>Active investors daily</Text>
                        </Box>
                        <Box>
                            <FontAwesomeIcon icon={faUpRightFromSquare}  color={'white'}/>
                            <Text fontWeight={'bold'} color={'white'}>15 000+</Text>
                            <Text color={'#aeb2be'}>Active investors daily</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default MainEnd