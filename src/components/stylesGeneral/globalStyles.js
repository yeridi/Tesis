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
        background:${({ theme }) => theme.general};
    }
    .bussines-card, .bussines-about{
        transition:all.5s linear;
        color:${({ theme }) => theme.text};
    }
    .search__form .search__bar{
        background:${({ theme }) => theme.general};
        color:${({ theme }) => theme.text};
    }
    
    .slidebar{
        background:${({ theme }) => theme.general};
    }


    .message{
        background:${({ theme }) => theme.general};
    }
    .modal{
        background:${({ theme }) => theme.general} !important;
    }
    textarea{
        background:${({ theme }) => theme.body} !important;
        color:${({ theme }) => theme.text};
    }
    .comments{
        background:${({ theme }) => theme.general};
    }

    
    #check:checked ~ .comments{
        right: 0;
    }
`;

export const lightTheme = {
    body: '#fff',
    text: '#47525E',
    general: '#fff',
}
export const darkTheme = {
    body: '#242435',
    text:'#fff',
    general: '#2c2c41',
}