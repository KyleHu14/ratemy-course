// Components
import HomePageTitle from "./HomePageTitle";

// CSS
import styles from "../styles/HomeSubSection.module.css";

const HomeSubSection = ({ subSectionTitleText }) => {
	return (
		<div className={styles.subSection}>
			<div className={styles.subTitleContainer}>
				<HomePageTitle titleText={subSectionTitleText} />
			</div>
		</div>
	);
};

export default HomeSubSection;
