// React
import { useEffect, useState } from "react";
// Nextjs
import Head from "next/head";
import { useRouter } from "next/router";

// CSS
import styles from "@/styles/pages/Home.module.css";

// Components
import Navbar from "@/components/Navbar";
import HomePageTitle from "@/components/HomePageTitle";
import HomeSubSection from "@/components/HomeSubSection";
import Image from "next/image";

export default function Home() {
	const router = useRouter();

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
			<main>
				<Navbar />
				{/* Home Page Body */}
				<div className={styles.mainBody}>
					{/* Search Section */}
					<div className={styles.searchSection}>
						<HomePageTitle titleText="View Peer Ratings, Search for a Course!" />
						<form
							className={styles.searchBar}
							onSubmit={(e) => {
								e.preventDefault(); // Prevents the default form submission behavior
								router.push(`/course/inf134`);
							}}>
							<Image
								src="/search-icon.png"
								width={20}
								height={20}
								alt="Picture of anteater uci logo"
							/>
							<input
								className={styles.searchBarInput}
								type="text"
								placeholder="Search course name (Format: In4matx 124)"
							/>
							<button type="submit" hidden />
						</form>
					</div>

					{/* Sub Section */}
					<div className={styles.subsections}>
						<HomeSubSection subSectionTitleText="Top Rated Courses at UC Irvine" />
						<HomeSubSection subSectionTitleText="Anteaters With Your Major Recommend..." />
					</div>
				</div>
			</main>
		</>
	);
}
