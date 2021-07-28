import { createGlobalStyle } from "styled-components";
/* styles */
import '../stylesGeneral/general.scss';
export const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all .5s linear;
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#47525E',
}
export const darkTheme = {
    body: '#202031',
    text:'#fff'
}