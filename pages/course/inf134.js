// Styles
import styles from "../../styles/pages/CoursePage.module.css";

// Components
import Navbar from "../../components/Navbar";
import RatingBox from "@/components/RatingBox";

// Nextjs
import Image from "next/image";
import Link from "next/link";

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
							IN4MATX 134 - Project in User Interaction Software
						</div>
						<button className={styles.rateButton}>
							<Link className={styles.Link}href="/rate/inf134">
								Rate This Course
							</Link>
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
					{/* Ratings Section */}
					<div className={styles.reviewSection}>
						<div className={styles.reviewHeader}>
							<div className={styles.reviewTitle}>
								42 Anteater Ratings
							</div>
							<div className={styles.reviewHeaderRight}>
								<Image
									src="/course-page/filter-ratings.png"
									width={128}
									height={50}
									alt="Average hours spent on course"
								/>
								<Image
									src="/course-page/sort-ratings.png"
									width={116}
									height={50}
									alt="Average hours spent on course"
								/>
							</div>
						</div>
						<div className={styles.reviewsContainer}>
							<RatingBox 
								name={"Petr Anteater"} 
								reviewerInfo={"3rd year | Informatics | GPA: 3.2"} 
								usefulRating={5.0} 
								diffRating={5.0}
							/>
							<RatingBox 
								name={"Petr Anteater"} 
								reviewerInfo={"3rd year | Informatics | GPA: 3.2"} 
								usefulRating={5.0} 
								diffRating={5.0}
							/>
							<RatingBox 
								name={"Petr Anteater"} 
								reviewerInfo={"3rd year | Informatics | GPA: 3.2"} 
								usefulRating={5.0} 
								diffRating={5.0}
							/>
							<RatingBox 
								name={"Petr Anteater"} 
								reviewerInfo={"3rd year | Informatics | GPA: 3.2"} 
								usefulRating={5.0} 
								diffRating={5.0}
							/>
							<RatingBox 
								name={"Petr Anteater"} 
								reviewerInfo={"3rd year | Informatics | GPA: 3.2"} 
								usefulRating={5.0} 
								diffRating={5.0}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default inf134;
