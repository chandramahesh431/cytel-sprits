import { createMuiTheme } from "@material-ui/core/styles";
import { colors } from "./colors";

const cytelTheme = createMuiTheme({
  palette: {
    primary: { main: colors.primary },
    secondary: { main: colors.secondary },
    tertiary: { main: colors.tertiary },
    textPrimary: { main: colors.textPrimary }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    colorTextPrimary: colors.textPrimary,
    headline: {
      fontWeight: 700
    },
    subheading: {
      fontWeight: 400
    },
    body1: {
      fontWeight: 200,
      fontSize: 14,
      margin: "10px 0"
    }
  },

  overrides: {}
});

export default cytelTheme;
