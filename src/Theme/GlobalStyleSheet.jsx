import {createGlobalStyle}  from 'styled-components'


export const GlobalStyleSheet =  createGlobalStyle`

  *{
    // font-family: 'Poppins', sans-serif;
  }



    html,body {
        padding:0;
        margin:0;
        background-color:${props => props.theme.bgColor};
    }

`


