import { createGlobalStyle } from "styled-components";
/* styles */
import '../stylesGeneral/general.scss';
export const GlobalStyle = createGlobalStyle`
    body{
        background:${({ theme }) => theme.body};
        color:${({ theme }) => theme.text};
        transition:all .5s linear;
    }
    .card, .bussines-card{
        transition:all.5s linear;
        background:${({ theme }) => theme.card};
    }
    .bussines-card, .bussines-about{
        transition:all.5s linear;
        color:${({ theme }) => theme.text};
    }
    .search__form .search__bar{
        background:${({ theme }) => theme.card};
        color:${({ theme }) => theme.text};
    }
    


    .slidebar{
        background:${({ theme }) => theme.slidebar};
    }
    .message{
        background:${({ theme }) => theme.slidebar};
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#47525E',
    card: '#fff',
    slidebar: '#fff',
}
export const darkTheme = {
    body: '#242435',
    text:'#fff',
    card: '#2c2c41',
    slidebar:'#2c2c41',
}