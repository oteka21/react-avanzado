import styled from 'styled-components'

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
