import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bodyBackgroundColor: string;
      bodyColor: string;
      borderColor: string;
    };
  }
}
