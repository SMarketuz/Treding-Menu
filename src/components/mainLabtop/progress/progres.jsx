import { Box, Text, Stat, StatArrow} from '@chakra-ui/react'
import React from 'react'

const Progres = () => {
  return (
    <Box>
        <Box pl={'5px'} pt={'20px'} display={'flex'} fontSize={'14px'} gap={{base: '10px', md:'45px'}}>
            <Stat color={'white'} display={{base: 'none', sm: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={{base: '0px', md:'3px'}}>
                    <Text>700.xhkg 320.7</Text>
                    <StatArrow type='decrease' />
                    <Text>-2.12%</Text>
                </Box>
            </Stat>
            <Stat color={'white'} display={{base: 'none', sm: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={{base: '0px', md:'3px'}}>
                    <Text>1398.xhkg 3.75</Text>
                    <StatArrow type='decrease' />
                    <Text>-2.6%</Text>
                </Box>
            </Stat>
            <Stat color={'white'} display={{base: 'none', sm: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={{base: '0px', md:'3px'}}>
                    <Text>857.xhkg 5.15</Text>
                    <StatArrow type='decrease' />
                    <Text>0%</Text>
                </Box>
            </Stat>
            <Stat color={'white'} display={{base: 'none', md: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={'3px'}>
                    <Text>939.xhkg 4.55 </Text>
                    <StatArrow type='decrease' />
                    <Text>-0.55%</Text>
                </Box>
            </Stat>
            <Stat color={'white'} display={{base: 'none', lg: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={'3px'}>
                    <Text>2318.xhkg 38.9 </Text>
                    <StatArrow type='decrease' />
                    <Text> -0.83%</Text>
                </Box>
            </Stat>
            <Stat color={'white'} display={{base: 'none', xl: 'block'}}>
                <Box display={'flex'} alignItems={'center'} gap={'3px'}>
                    <Text>MSFT 377.4 </Text>
                    <StatArrow type='increase' />
                    <Text> +0.1%</Text>
                </Box>
            </Stat>

        </Box>
    </Box>
  )
}

export default Progres