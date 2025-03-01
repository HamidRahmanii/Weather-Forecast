export const getTime = (dateString) => {
  // Parse the string into a Date object
  const date = new Date(dateString);

  // Extract hours and minutes
  let hours = date.getHours(); // Get hours (0-23)
  const minutes = date.getMinutes(); // Get minutes (0-59)

  // Convert to 12-hour format and determine AM/PM
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // Convert to 12-hour format
  hours = hours || 12; // Handle midnight (0 becomes 12)

  // Format the time as a string with AM/PM
  const timeString = `${hours}:${String(minutes).padStart(2, "0")} ${ampm}`;

  return timeString;
};
