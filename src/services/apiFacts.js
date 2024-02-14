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

// Function to update the votes number
export async function registerVote(columnName, newValue, id) {
  const { data, error } = await supabase
    .from("facts")
    .update({ [columnName]: newValue })
    .eq("id", id)
    .select();
  // If no error, updating the list on the page
  if (error) {
    console.error(error);
    throw new Error("Vote could not be registered");
  }

  return data;
}
