import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { connect, useDispatch } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import gsap from "gsap";
import { Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	image: {},
	container: {
		position: "relative",
		width: "100vw",
		minHeight: "calc(100vh - 64px)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	titleContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0, 0.6)",
		border: "2px solid #fff",
		padding: "2rem",
		zIndex: 999,
		borderRadius: "20px",
	},
	contentContainer: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		gap: "2rem",
		zIndex: 999,
		alignItems: "center",
		position: "absolute",
		top: "30vh",
		left: "50%",
		transform: "translateX(-50%)",
	},
	subTitleContainer: {
		margin: "0.5rem 1rem",
		padding: "1rem 1rem",
		// backgroundColor: "rgba(0,0,0, 0.3)",
		borderRadius: "8px",
	},
	titleText: {
		textAlign: "center",
		color: "#fff",
	},
	subTitleText: {
		textAlign: "center",
		color: "#fff",
	},
	button: {
		padding: "1rem 2rem",
		zIndex: 999,
		backgroundColor: theme.palette.primary.main,
		color: "#fff",
		transition: "all 0.3s ease-in-out",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		"&:hover": {
			backgroundColor: theme.palette.primary.dark,
		},
	},
	buttonText: {
		color: "#fff",
		borderRadius: "15px",
	},
	buttonLabel: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonUnderline: {
		width: "100%",
		backgroundColor: "#fff",
		height: "1px",
		transform: "scaleX(0)",
		transformOrigin: "center",
		transition: "all 0.3s ease-in-out",
	},
	buttonUnderlineHovered: { transform: "scaleX(1)" },
}));

export default function Home() {
	const styles = useStyles();
	const [buttonHovered, setButtonHovered] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.contentContainer}>
				<div className={styles.titleContainer}>
					<Typography variant="h3" className={styles.titleText}>
						No customer should be treated this way
					</Typography>
					<div className={styles.subTitleContainer}>
						<Typography variant="h5" className={styles.subTitleText}>
							If you suffered losses while Robinhood held your money hostage
							while you tried to reach someone, anyone, than join us as we
							garner enough support to file a class action lawsuit.
						</Typography>
					</div>
				</div>
				<Button
					variant="contained"
					// className={styles.button}
					classes={{
						root: styles.button,
						label: styles.buttonLabel,
					}}
					onMouseEnter={() => setButtonHovered(true)}
					onMouseLeave={() => setButtonHovered(false)}
				>
					<Typography variant="h6" className={styles.buttonText}>
						This happened to me
					</Typography>
					<div
						className={clsx(
							styles.buttonUnderline,
							buttonHovered && styles.buttonUnderlineHovered
						)}
					></div>
				</Button>
			</div>
			<Image
				src={"/aiming.jpg"}
				alt="Dramatic Poetry with Roses"
				layout="fill"
				objectFit="cover"
				className={styles.image}
			/>
		</div>
	);
}
