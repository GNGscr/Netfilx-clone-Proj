import { createGlobalStyle } from 'styled-components';


// Global style classes injected to the html
// I export a function that will be called 
// after the App is rendered to the dom

export const GlobalStyle = createGlobalStyle`
        html, body, #root {
            height: 100%;
        }
        html {
            font-family: Lato, sans-serif;
            font-family: 'Yanone Kaffeesatz', sans-serif;
            font-size: 10px;
        }
        * {
            margin: 0;
            padding: 0;
            border: none;
            outline: none;
            box-sizing: border-box;
        }
    `

    export default GlobalStyle