// Styles
import styles from "../../styles/pages/CoursePage.module.css";

// Components
import Navbar from "../../components/Navbar";

const inf134 = () => {
	return (
		<>
			<Navbar />
			<div className={styles.courseBody}>
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
			</div>
		</>
	);
};

export default inf134;
