// CSS
import styles from "../styles/components/RatingBox.module.css";

const RatingBox = ({
	name,
	reviewerInfo,
	usefulRating,
	diffRating,
	totalRatings,
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<div>
					<div>{name}</div>
					<div className={styles.reviewerInfoContainer}>
						<div>{reviewerInfo}</div>
						<div>Grade: A- • Professor Baldwin • Spring 2023</div>
					</div>
				</div>
			</div>

			<div className={styles.statsContainer}>
				<div className={styles.stats}>
					<div>{usefulRating} Usefulness</div>
					<div>{diffRating} Difficulty</div>
				</div>
				<div>
					Great professor and course. Projects are fun and fairly
					easy, unless you're a perfectionist and rewrite your code
					base too many times. Generous grading and late policies. You
					learn a lot of stuff that industry employers are looking
					for, so it's a valuable course.
				</div>
			</div>
		</div>
	);
};

export default RatingBox;
