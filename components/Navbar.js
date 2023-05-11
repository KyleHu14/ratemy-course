// Next Imports
import Link from "next/link";

// CSS
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
	return (
		// Entire Nav Container
		<nav className={styles.navbar}>
			{/* Left Part of Navbar */}
			<div className={styles.navLeft}>
				<Image
					src="/uci-anteater.png"
					width={110}
					height={60}
					alt="Picture of anteater uci logo"
				/>
				<Link className={`${styles.navTitle}`} href="/">
					ZotRatings
				</Link>
			</div>

			{/* Right Part of Navbar */}
			<div className={styles.navRightLinks}>
				<Link className={`${styles.navLink}`} href="/">
					Home
				</Link>
				<div className={styles.linkDivider}>|</div>
				<Link className={`${styles.navLink}`} href="/">
					Course Ratings
				</Link>
				<div className={styles.linkDivider}>|</div>
				<Link className={`${styles.navLink}`} href="/">
					Course Recommendations
				</Link>
			</div>

			{/* Account Icon */}
			<div className={styles.accountIconContainer}>
				<Image
					className={styles.accountIcon}
					src="/account-icon.png"
					width={60}
					height={60}
					alt="Account Icon"
				/>
			</div>
		</nav>
	);
};

// <a href="https://www.flaticon.com/free-icons/profile" title="profile icons">Profile icons created by Freepik - Flaticon</a>

export default Navbar;
