import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    display: flex;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    position: fixed;
    right: 0;
    z-index: 1000;
`
export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;

    &[aria-current]{
        color: black;
        position: relative;

        &:after{
            content: '.';
            position: absolute;
            bottom: 7px;
            font-size: 34px;
            line-height: 20px;
            ${fadeIn({ time: '.3s' })};
        }
    }
`
