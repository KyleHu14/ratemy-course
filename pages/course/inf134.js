// Styles
import styles from "../../styles/pages/CoursePage.module.css";

// Components
import Navbar from "../../components/Navbar";

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
                
                {/* Title Section */}
				<div className={styles.courseSection}>
					<div className={styles.courseTitle}>
						<div>
							In4matx 134 - Project in User Interaction Software
						</div>
                        <button>Rate This Course</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default inf134;
