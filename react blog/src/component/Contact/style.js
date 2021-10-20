import styled from "styled-components";

export const ContactSection = styled.div`
    padding: 50px 0;
    text-align: center
    height: 500px;
background: url('../images/Home/home-bg.jpg');
background-size: cover;
background-position: center;
text-align: center;
position: relative;
    

`
export const ContactTitle = styled.h2`
font-size: 60px;
margin-bottom: 30px
font-weight: bold;
    color: #5e5e5e;

`

export const Span = styled.span`
font-weight: normal
font-weight: bold;
    color: #5e5e5e;

`

export const Form = styled.form`

    width: 70%;
    margin: auto;

`
export const Input = styled.input`
box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px

`

export const Forminput = styled.div `
    overflow: hidden
    `
    

export const InputText = styled(Input) `
    float: left;
    width: 49%;
    `

export const InputEmail = styled(Input) `
    float: right;
    width: 49%;
    `

export const InputExp = styled(Input) `
    width: 100%;
    `

export const InputArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: 
    `

export const InputSubmit = styled(Input) `
background: #eb5424;
color: #fff;
font-size: 18px;
width: 150px;
border: 0;
padding: 15px;
cursor: pointer;
font-weight: bold
&:hover{
    background: #fff;
color: #eb5424
    `