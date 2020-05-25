import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
	typography: {
		fontFamily: '"Poppins", Arial'
	},
	palette: {
		primary: {
			main: "#24252a",
		},
		secondary: {
			main: "#62d3f5",
		},
		error: {
			main: red.A400,
		},
		background: {
			default: "#24252a",
		},
		text: {
			primary: "rgba(255, 255, 255, 0.8)",
			secondary: "rgba(255, 255, 255, 0.5)"
		}
	},
});

export default theme;
