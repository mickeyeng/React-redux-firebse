import { createGlobalStyle } from 'styled-components'
import backgroundImage from '../image/mario-bg.png'

const GlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        background: url(${backgroundImage}) no-repeat;
        background-size: 100%;
        background-color: #95e8f3;
        background-position: bottom;
      
      }
`

export default GlobalStyle