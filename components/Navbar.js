import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { connect, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
	containerColor: {
		backgroundColor: theme.palette.primary.dark,
	},
	button: {
		border: `1px solid #fff`,
	},
	navbarText: {
		color: "#fff !important",
	},
}));
const Appbar = () => {
	const styles = useStyles();
	return (
		<Box sx={{ flexGrow: 1 }} className={styles.containerColor}>
			<AppBar
				position="static"
				color="primary"
				className={styles.containerColor}
			>
				<Toolbar className={styles.containerColor}>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
						className={styles.navbarText}
					>
						Help us fight back
					</Typography>
					<Button color="inherit" className={styles.button}>
						I want in
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Appbar;
