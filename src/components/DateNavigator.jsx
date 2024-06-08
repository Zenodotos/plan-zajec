export default function DateNavigator({ currentDay, onPrevDay, onNextDay }) {
  const dayNames = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  const formattedDate = `${
    dayNames[currentDay.getDay()]
  } ${currentDay.getDate()}.${currentDay.getMonth() + 1}`;

  return (
    <div className="flex justify-between items-center mb-4 text-2xl text-white">
      <button onClick={onPrevDay}>&lt;</button>
      <span>{formattedDate}</span>
      <button onClick={onNextDay}>&gt;</button>
    </div>
  );
}
