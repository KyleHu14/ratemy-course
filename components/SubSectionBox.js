// CSS
import styles from "../styles/SubSectionBox.module.css";

const SubSectionBox = ({
	courseCode,
	courseName,
	usefulRating,
	diffRating,
	totalRatings,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<div>{courseCode}</div>
				<div>{courseName}</div>
			</div>

			<div className={styles.statsContainer}>
				<div className={styles.stats}>
					<div>{usefulRating} Usefulness</div>
					<div>{diffRating} Difficulty</div>
				</div>
				<div className={styles.totalRatings}>
					{totalRatings} Ratings
				</div>
			</div>
		</div>
	);
};

export default SubSectionBox;
