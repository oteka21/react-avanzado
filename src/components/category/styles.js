import styled from 'styled-components'
import { Link } from '@reach/router'

const Anchor = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`
const Image = styled.img`
    border: 1px;
    box-shadow: 0px 10px 14px rgba(0,0,0.2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    width: 75px;
    height: 75px;
`

export {
  Anchor,
  Image
}
