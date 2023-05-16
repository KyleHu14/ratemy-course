// Components
import HomePageTitle from "./HomePageTitle";
import SubSectionBox from "./SubSectionBox";

// CSS
import styles from "../styles/HomeSubSection.module.css";

const HomeSubSection = ({ subSectionTitleText }) => {
	const tempCode = "IN4MATX 134";
	const tempName = "Project in User Interaction Software";
	const usefulRating = 5;
	const diffRating = 5;
	const totalRatings = 135;

	return (
		<div className={styles.subSection}>
			<div className={styles.titleContainer}>
				<HomePageTitle titleText={subSectionTitleText} />
			</div>
			<SubSectionBox
				courseCode={tempCode}
				courseName={tempName}
				usefulRating={usefulRating}
				diffRating={diffRating}
				totalRatings={totalRatings}
			/>
			<SubSectionBox
				courseCode={tempCode}
				courseName={tempName}
				usefulRating={usefulRating}
				diffRating={diffRating}
				totalRatings={totalRatings}
			/>
			<SubSectionBox
				courseCode={tempCode}
				courseName={tempName}
				usefulRating={usefulRating}
				diffRating={diffRating}
				totalRatings={totalRatings}
			/>
		</div>
	);
};

export default HomeSubSection;
