import styled from 'styled-components'

export const Form = styled.form`
    padding: 16px 20px;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 8px;
    padding: 8px 4px;
    display: block;
    width: 100%;
    &[disabled]{
        opacity: .3;
    }
`

export const Button = styled.button`
    background: rgb(176, 62, 120);
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    &[disabled]{
        opacity: .3;
    }
`

export const Title = styled.h2`
    padding: 0 20px;
    font-weight: 500;
    color: rgb(31, 33, 35);
`

export const Error = styled.span`
    font-size: 14;
    color: red;
`
