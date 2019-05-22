import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#009ee2',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#bc2507',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffffff',
        },
        // error: will use the default color
    },
    overrides: {
        MuiPaper: { // Name of the component ⚛️ / style sheet
            rounded: { // Name of the rule
                borderRadius: 10,
            },
        },
        MuiButton: {
            contained: { // Name of the rule
                borderRadius: 16,
            },
        },
        MuiSvgIcon: {
            colorPrimary: {
                color: 'rgba(6,44,63,0.55)',
            }
        }
    },
});