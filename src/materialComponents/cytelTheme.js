import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "./colors";

const cytelTheme = createMuiTheme({
  palette: {
    primary: { main: colors.primarySurface },
    // secondary: { main: colors.secondary },
    // tertiary: { main: colors.tertiary },
    textPrimary: { main: colors.gray100 }
  },
  typography: {
    colorTextPrimary: colors.textPrimary,
    useNextVariants: true,
    fontFamily: ["Roboto", "Mono"].join(","),
    fontStyle: "normal",
    fontWeight: "normal",
    body1: {
      fontSize: 16,
      lineHeight: "24px",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    h1: {
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "24px",
      letterSpacing: "-0.4px"
    },
    h2: {
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "0.15px"
    },
    subtitle1: {
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    },
    h6: {
      fontSize: "20px",
      lineHeight: "24px"
    }
  },

  overrides: {}
});

export default cytelTheme;
