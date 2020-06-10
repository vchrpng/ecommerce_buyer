import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
body ::-webkit-scrollbar-track {
  background: rgb(0,0,0,0); 
}




body {
  
  ul {

    padding:0;
    margin:0;
    list-style:none;
  }
  ul::-webkit-scrollbar {
      height: 7px; 
    }
}
`