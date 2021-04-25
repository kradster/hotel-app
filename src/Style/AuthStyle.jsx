import styled from 'styled-components'


export const FlexBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background:#ffffff;
// background: -webkit-linear-gradient(to right, #0ED2F7, #B2FEFA);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #0ED2F7, #B2FEFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    // background-color:#565fe0;
    min-height:100vh;
    overflow:hidden;
    // background-image: radial-gradient(#eee 20%, transparent 20%);
    background-color: #fff;
    background-position: 0 0;
    background-size: 10px 10px;


`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    background-color:#ffffff;
    padding:25px 40px;
    border-radius:12px;
    // box-shadow:0 4px 16px rgba(0,0,0,.15); 
    // border: 1px solid #e9e9e9;
    z-index:2;

    h2{
        margin:0;
        font-size: 24px;
        font-weight:500;
        color:#aaaaaa;
    }
    h1{
        margin:0;
        font-weight:500;
    }

    img{
        width:50px;
    }

    p{
        margin:auto;
        font-size:0.8rem;
    }


`;

export const FormField = styled.div`
    margin: 12px 0;
    width: 100%;

    small{
        font-weight:500;
        font-size:10px;
    }
`;



export const LabelField = styled.div`
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;

    label{
        color: #626266;
    font-size: 14px;
    font-weight: 500;
    }

`

export const InputField = styled.input`
    margin:1px;
    height:25px;
    font-weight: 400;
    padding: 10px;
    transition: border-color 150ms ease-out;
    background-color:#eeeeee;
    border:none;
    outline:none;
    border-radius:6px;
    width:100%;

    &:hover{
        box-shadow:0 0 0 1px #565fe0; 
        
    }
    &:focus{
        box-shadow:0 0 0 1px #565fe0,0 0 0 5px #565fe021; 
        
    }
    }
`;

export const Button = styled.button`
    background-color:#565fe0;
    width:100%;
    border:none;
    outline:none;
    padding:0.7rem;
    border-radius:6px;
    color:#ffffff;
    cursor:pointer;

`;

export const Circle = styled.div`
    width:${p=>p.width||"400px"};
    height:${p=>p.height||"500px"};
    border-radius:12px;
    // background-color:#565fe0;
    background-color:#ffffff;
    position:absolute;
    box-shadow:0 4px 16px rgba(0,0,0,.15); 


`
export const Orbit = styled(Circle)`
    width:500px;
    background-color:#ffffff;
    box-shadow:
    0 0 0 1px #565fe0,
    0 0 0 9px #ffffff,
    0 0 0 10px #565fe0;
    border-radius:500px; 
    transform:translateY(45deg);



`