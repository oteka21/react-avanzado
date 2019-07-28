import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to{
        filter: blur(0);
        opacity: 1;
    }
`

const likedKeyframes = keyframes`
    from {
        transform: scale(1.3)
    }

    to{

    }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${fadeInKeyframes} ${type};
`
export const liked = ({ time = '1s', type = 'ease', direction = 'normal', mode = 'none' } = {}) => css`
    animation-name: ${likedKeyframes};
    animation-duration: ${time};
    animation-direction: ${direction};
    animation-timing-function: ${type};
    animation-fill-mode: ${mode};
`
