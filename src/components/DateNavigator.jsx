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
      <button className="p-5 bg-[#2f3640] rounded-full" onClick={onPrevDay}>
        &lt;
      </button>
      <span>{formattedDate}</span>
      <button className="p-5 bg-[#2f3640] rounded-full" onClick={onNextDay}>
        &gt;
      </button>
    </div>
  );
}
