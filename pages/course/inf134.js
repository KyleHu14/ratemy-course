// Styles
import styles from "../../styles/pages/CoursePage.module.css";

// Components
import Navbar from "../../components/Navbar";

// Nextjs
import Image from "next/image";

const inf134 = () => {
	return (
		<>
			<Navbar />
			<div className={styles.courseBody}>
				{/* The Search Section of the Course Page */}
				<form className={styles.searchSection}>
					<div className={styles.searchSectionTitle}>
						<div>Search</div> <div>Course</div>
					</div>
					<input
						className={styles.searchBarInput}
						type="text"
						placeholder="All Departments"
					/>
					<input
						className={styles.searchBarInput}
						type="text"
						placeholder="Course Number"
					/>
					<button type="submit" hidden />
				</form>

				<div className={styles.courseSection}>
					{/* Title Section */}
					<div className={styles.courseTitle}>
						<div>
							In4matx 134 - Project in User Interaction Software
						</div>
						<button className={styles.rateButton}>
							Rate This Course
						</button>
					</div>

					{/* Description Section */}
					<div className={styles.courseDesc}>
						<div className={styles.descLeft}>
							<div className={styles.coursePageTitle}>
								Course Description
							</div>
							<div className={styles.descText}>
								Students complete an end-to-end user interface
								programming project based on an iterative design
								paradigm. Topics may include requirements
								brainstorming, paper prototyping, iterative
								development, cognitive walk-through,
								quantitative evaluation, and acceptance testing.
								Materials fee. 4 units.
							</div>
						</div>
						<div className={styles.descImg}>
							<Image
								src="/course-page/avg-course-dist.png"
								width={423}
								height={288}
								alt="Average Course Distribution Graph"
							/>
						</div>
					</div>
					{/* "Based on 42 Ratings Section" */}
					<div className={styles.reviewStats}>
						<div className={`${styles.coursePageTitle} ${styles.reviewStatsTitle}`}>
							Based on 42 Ratings
						</div>
						<div className={styles.reviewImages}>
							<Image
								src="/course-page/avg-ratings.png"
								width={133}
								height={61.73}
								alt="Average Ratings for This Course"
							/>
							<Image
								src="/course-page/rec-percent.png"
								width={140}
								height={68}
								alt="Recommendation percentage"
							/>
							<Image
								src="/course-page/avg-hrs-spent.png"
								width={140}
								height={85}
								alt="Average hours spent on course"
							/>
							<Image
								src="/course-page/popular-tags.png"
								width={398}
								height={101}
								alt="Average hours spent on course"
							/>
						</div>
						<div className={styles.graphDist}>
							<Image
								src="/course-page/useful-rating-dist.png"
								width={423}
								height={287}
								alt="Average hours spent on course"
							/>
							<Image
								src="/course-page/diff-rating-dist.png"
								width={423}
								height={287}
								alt="Average hours spent on course"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default inf134;
