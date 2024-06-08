export default function DayName({ number }) {
  console.log(typeof number);
  const daysOfWeek = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];
  return (
    <p className="text-2xl text-center text-white uppercase mb-5">
      {daysOfWeek[number]}
    </p>
  );
}
