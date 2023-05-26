// Styles
import styles from "../../styles/pages/CoursePage.module.css"

// Components
import Navbar from "../../components/Navbar";

const inf134 = () => {
	return (
		<>
			<Navbar />
            <div className={styles.courseBody}>Search Couse</div>
		</>
	);
};

export default inf134;
