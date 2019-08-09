import styled from 'styled-components'

import { liked } from '../../styles/animation'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

export const MdFavoriteRed = styled(MdFavorite)`
    ${liked({ time: '.2s' })}
    fill: red;
`
export const MdFavoriteBorderBlack = styled(MdFavoriteBorder)`
    ${liked({ time: '.2s', direction: 'reverse' })}
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    cursor: pointer;
    & svg{
        margin-right: 4px;
    }
`
