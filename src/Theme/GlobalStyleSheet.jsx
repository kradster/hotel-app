import {createGlobalStyle}  from 'styled-components'


export const GlobalStyleSheet =  createGlobalStyle`

:root{
  font-size:12px;
}
  *{
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;
  }



    html,body {
        padding:0;
        margin:0;
        background-color:${props => props.theme.bgColor};
    }

    .container{
      width:100vw;
      min-height:100vh;
      height:auto;
      display:flex;

      main{
        flex:1;
        padding:2rem;
      }
    }

`


