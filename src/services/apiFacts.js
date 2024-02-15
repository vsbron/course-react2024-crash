import supabase from "./supabase";

// Function that gets all the fact based on chosen category
export async function getFacts({ currentCategory }) {
  // Setting the query based on the filter
  let query = supabase.from("facts").select("*");
  if (currentCategory !== "all") query = query.eq("category", currentCategory);

  // Sorting the data by date, from new to old
  query.order("created_at", { ascending: false });

  // Getting the data from query
  let { data: facts, error } = await query;

  // If Error, throw an error message
  if (error) {
    console.error(error);
    throw new Error("Facts could not be loaded");
  }

  return { facts };
}

// Function to add a new fact
export async function addFact(text, source, category) {
  const { data, error } = await supabase
    .from("facts")
    .insert([{ text, source, category }])
    .select();

  // If Error, throw an error message
  if (error) {
    console.error(error);
    throw new Error("Could not add a new Fact");
  }

  return data;
}

// Function to delete the fact
export async function deleteFact(id) {
  const { data, error } = await supabase.from("facts").delete().eq("id", id);

  // If Error, throw an error message
  if (error) {
    console.error(error);
    throw new Error("Fact could not be deleted");
  }

  return data;
}

// Function to update the votes number
export async function registerVote(columnName, newValue, id) {
  const { data, error } = await supabase
    .from("facts")
    .update({ [columnName]: newValue })
    .eq("id", id)
    .select();

  // If Error, throw an error message
  if (error) {
    console.error(error);
    throw new Error("Vote could not be registered");
  }

  return data;
}
