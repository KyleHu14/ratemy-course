// Nextjs
import Head from "next/head";

// CSS
import styles from "@/styles/pages/CourseRecommendation.module.css";

// Components
import Navbar from "@/components/Navbar";

export default function Recommendation() {

	return (
		<>
			<Head>
				<title>Rate My Course</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<main className={styles.mainBody}>
				<div className={styles.coursePageTitle}>
					Not Sure What Class to Take? Find a Course That Matches Your
					Needs!
				</div>

				<div className={styles.recForm}>
					<div className={styles.dropdown}>
						<select>
							<option hidden value="">All Departments</option>
							<option value="in4matx">IN4MATX</option>
							<option value="compsci">COMPSCI</option>
							<option value="anthro">ANTHRO</option>
						</select>
					</div>

					<div className={styles.dropdown}>
						<select>
							<option hidden value="">GE Category</option>
							<option value="CAT1">CAT1</option>
							<option value="CAT2">CAT2</option>
							<option value="CAT3">CAT3</option>
						</select>
					</div>

					<div>
						<input placeholder="Days (i.e MWF, TuTh, W)" className={styles.searchInput}/>
					</div>

					<div className={styles.dropdown}>
						<select>
							<option hidden value="">Filter For</option>
							<option value="">option1</option>
							<option value="">option2</option>
							<option value="">option3</option>
						</select>
					</div>
				</div>
				

			</main>
		</>
	);
}