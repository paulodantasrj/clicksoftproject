import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

:root {
  /* cores dark da cor primaria*/
  --clr-primary-1: hsl(185, 91%, 17%);
  --clr-primary-2: hsl(185, 84%, 25%);
  --clr-primary-3: hsl(185, 81%, 29%);
  --clr-primary-4: hsl(185, 77%, 34%);
  /* cor primaria */
  --clr-primary-5: hsl(185, 62%, 45%);
  /* cores light da cor primaria */
  --clr-primary-6: hsl(185, 57%, 50%);
  --clr-primary-7: hsl(184, 65%, 59%);
  --clr-primary-8: hsl(184, 80%, 74%);
  --clr-primary-9: hsl(185, 94%, 87%);
  --clr-primary-10: hsl(186, 100%, 94%);
  /* usados para headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* usado em paragrafo */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: 'Roboto', sans-serif;
  --ff-secondary: 'Open Sans', sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--ff-primary)
  }
`

export default GlobalStyle
