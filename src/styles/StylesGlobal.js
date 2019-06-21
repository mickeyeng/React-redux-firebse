import { createGlobalStyle } from 'styled-components'
import backgroundImage from '../image/mario-bg.png'

const GlobalStyle = createGlobalStyle`
    html {
      min-height: 100vh;
    }
    * { box-sizing: border-box; }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        background: url(${backgroundImage}) no-repeat;
        background-size: 100%;
        background-color: #95e8f3;
        background-position: bottom;
        min-height: 100vh;
      
      }
`

export default GlobalStyle