import supabase from "./supabaseClient";

// CourseCode : String
const getReviews = async () => {
	let { data, error } = await supabase.from("reviews").select("*");
	return data;
};

// Exports
export default getReviews;
