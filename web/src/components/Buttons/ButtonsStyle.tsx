import styled from 'styled-components'

import Button from '@material-ui/core/Button';

export const ButtonStyledSquare = styled(Button)`
    background-color: ${(props) => props.theme.colors.background} !important;
    color: ${(props) => props.theme.colors.primary} !important; 
    border-color: ${(props) => props.theme.colors["gray-3"]} !important;

    min-width: 14.5vh !important;
    margin: 0px !important;

    text-transform: capitalize !important;

    transition-property: background-color, color !important;
    transition-duration: 0.2s !important;

    font-size: 1.20rem !important;
    font-weight: 400 !important;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary} !important; 
        color: ${(props) => props.theme.colors.white} !important; 
    }
`

export const ButtonStyledRound = styled(Button)`
    background-color: ${(props) => props.theme.colors.background} !important;
    color: ${(props) => props.theme.colors.primary} !important; 
    border-color: transparent !important;

    padding-left: 4vw !important;
    padding-right: 4vw !important;
    border-radius: 20px !important;

    min-width: 14.5vh !important;
    margin: 0px !important;

    text-transform: capitalize !important;

    transition-property: background-color, color !important;
    transition-duration: 0.2s !important;

    font-size: 1.20rem !important;
    font-weight: 400 !important;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary} !important; 
        color: ${(props) => props.theme.colors.white} !important; 
    }
`
