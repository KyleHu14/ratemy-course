// Next Imports
import Link from "next/link";

// CSS
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
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

			<div className={styles.navRightLinks}>
				<Link className={`${styles.navLink}`} href="/">
					Home
				</Link>
				|
				<Link className={`${styles.navLink}`} href="/">
					Course Ratings
				</Link>
				|
				<Link className={`${styles.navLink}`} href="/">
					Course Recommendations
				</Link>
			</div>
			<div className={styles.accountIcon}>
				<Image
					src="/account-icon.png"
					width={60}
					height={60}
					alt="Account Icon"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
