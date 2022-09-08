import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      background: string;
      secondBackground: string;
      buttons: string;
      border: string;
    };

    radii: {
      small: string;
      medium: string;
    };
  }
}
