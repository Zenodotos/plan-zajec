function getDayFromNumber(number) {
  const daysOfWeek = [
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
    "niedziela",
  ];
  return daysOfWeek[number - 1];
}

function getTodaysClasses(dataArray) {
  let today = new Date();
  console.log("dzisiajesze zajecia");

  const result = dataArray.filter((item) => item.dayNumber === today.getDay());

  return result;
}
let toExport = { getDayFromNumber, getTodaysClasses };
export default toExport;
