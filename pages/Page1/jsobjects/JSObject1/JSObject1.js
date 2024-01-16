export default {
	async function func1 () {
  try {
    const query = `SELECT * FROM users WHERE user_id = ${userId}`;
    const user = validate.run()[0]; // Access the first row
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    // Handle the error appropriately, e.g., display an error message to the user
  }

}