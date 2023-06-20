function getDayOfWeek(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();
  return daysOfWeek[dayOfWeek];
}

const currentDate = new Date();
const currentDayOfWeek = getDayOfWeek(currentDate.toISOString().slice(0, 10));
console.log(currentDayOfWeek);
