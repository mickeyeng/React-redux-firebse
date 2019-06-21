import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * { box-sizing: border-box; }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
      
      }
`

export default GlobalStyle