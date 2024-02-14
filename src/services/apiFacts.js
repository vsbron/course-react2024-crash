import supabase from "./supabase";

// Function that gets all the fact based on chosen category
export async function getFacts({ currentCategory }) {
  // Setting the query based on the filter
  let query = supabase.from("facts").select("*");
  if (currentCategory !== "all") query = query.eq("category", currentCategory);

  // Getting the data from query
  let { data: facts, error } = await query;

  // If Error, throw an error message
  if (error) {
    console.error(error);
    throw new Error("Facts could not be loaded");
  }

  return { facts };
}
