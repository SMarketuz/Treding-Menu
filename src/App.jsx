import { Box } from '@chakra-ui/react'
import React from 'react'
import Easy from './components/easy/easy'
import Header from './components/header/header'
import Footer from './components/mainEnd/footer/footer'
import MainEnd from './components/mainEnd/mainEnd'
import MainLabtop from './components/mainLabtop/mainLabtop'
import Option from './components/option/option'
import Powerful from './components/powerful/powerful'
import Registr from './components/registr/registr'
import StarstHeader from './components/startHeader/starstHeader'
import True from './components/true/true'


const App = () => {
  return (
    <Box>
      <Box>
        <Box>
          <StarstHeader />
        </Box>

        <Box >

          <Box>
            <Header />
          </Box>
          
            <Box>
              <MainLabtop />
            </Box>

            <Box>
              <True />
            </Box>

            <Box>
              <Option />
            </Box>

            <Box>
              <Powerful />
            </Box>

            <Box>
              <Easy />
            </Box>

            {/* <Box>
              <Registr />
            </Box> */}

            
           <Box>
            <MainEnd />
           </Box>

           {/* <Box>
              <Footer /> 
           </Box> */}
          
        </Box>
      </Box>

    </Box>
  )
}

export default App