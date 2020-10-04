import React from "react";
import { fade, createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InputBase from "@material-ui/core/InputBase";
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		search: {
			position: "relative",
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.action.hover, 0.15),
			"&:hover": {
				backgroundColor: fade(theme.palette.action.hover, 0.25),
			},
			marginRight: theme.spacing(2),
			marginLeft: theme.spacing(2),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(3),
				marginRight: theme.spacing(3),
				width: "auto",
			},
		},
		inputRoot: {
			color: "inherit",
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("md")]: {
				width: "20ch",
			},
		},
	})
);
function Navbar() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{ background: "transparent", boxShadow: "none" }}>
				<Toolbar>
					<Typography variant="h6" className={classes.title} color="primary">
						Dormlife
					</Typography>
					<Button variant="contained" color="primary" style={{ margin: "8px" }} disableElevation>
						Sign in
					</Button>
					<Button variant="contained" color="primary" disableElevation>
						Sign up
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
function NavButtonGroup() {
	return (
		<ButtonGroup variant="text" style={{ color: "#000000" }} fullWidth={true}>
			<Button>Review</Button>
			<Button>Find Roommate</Button>
		</ButtonGroup>
	);
}
function Searchbar() {
	const classes = useStyles();
	return (
		<div className={classes.search}>
			<InputBase
				placeholder="Search…"
				classes={{
					root: classes.inputRoot,
					input: classes.inputInput,
				}}
				inputProps={{ "aria-label": "search" }}
			/>
		</div>
	);
}
function Homepage() {
	return (
		<div>
			<Navbar />
			<NavButtonGroup />
			<Searchbar />
		</div>
	);
}

export default Homepage;
