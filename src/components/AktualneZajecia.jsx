import { useState, useEffect } from "react";
import ClassesCards from "./ClassesCards";
import FilterButtons from "./FilterButtons";
import DateNavigator from "./DateNavigator";
import MainWrapper from "./MainWrapper";
import NoClassText from "./NoClassText";

const evenWeekRanges = [
  { start: "2023-10-09", end: "2023-10-13" },
  { start: "2023-10-23", end: "2023-10-27" },
  { start: "2023-11-06", end: "2023-11-10" },
  { start: "2023-11-20", end: "2023-11-24" },
  { start: "2023-12-04", end: "2023-12-08" },
  { start: "2023-12-18", end: "2023-12-22" },
  { start: "2024-01-15", end: "2024-01-19" },
  { start: "2024-01-29", end: "2024-01-30" },
  { start: "2024-03-04", end: "2024-03-08" },
  { start: "2024-03-18", end: "2024-03-22" },
  { start: "2024-04-04", end: "2024-04-05" },
  { start: "2024-04-15", end: "2024-04-19" },
  { start: "2024-04-29", end: "2024-04-30" },
  { start: "2024-05-13", end: "2024-05-17" },
  { start: "2024-05-27", end: "2024-05-29" },
  { start: "2024-06-10", end: "2024-06-14" },
  { start: "2024-06-24", end: "2024-06-28" },
];

const oddWeekRanges = [
  { start: "2023-10-02", end: "2023-10-06" },
  { start: "2023-10-16", end: "2023-10-20" },
  { start: "2023-10-30", end: "2023-11-03" },
  { start: "2023-11-13", end: "2023-11-17" },
  { start: "2023-11-27", end: "2023-12-01" },
  { start: "2023-12-11", end: "2023-12-15" },
  { start: "2024-01-08", end: "2024-01-12" },
  { start: "2024-01-22", end: "2024-01-26" },
  { start: "2024-02-29", end: "2024-03-01" },
  { start: "2024-03-11", end: "2024-03-15" },
  { start: "2024-03-25", end: "2024-03-27" },
  { start: "2024-04-08", end: "2024-04-12" },
  { start: "2024-04-22", end: "2024-04-26" },
  { start: "2024-05-06", end: "2024-05-10" },
  { start: "2024-05-20", end: "2024-05-24" },
  { start: "2024-06-03", end: "2024-06-07" },
  { start: "2024-06-17", end: "2024-06-21" },
];

function isEvenWeek(date) {
  const dateString = date.toISOString().split("T")[0];
  return evenWeekRanges.some(
    (range) => dateString >= range.start && dateString <= range.end
  );
}

export default function AktualneZajecia() {
  const [data, setData] = useState([]);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [todaysClasses, setTodaysClasses] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("A");
  const [holidays, setHolidays] = useState(["2024-06-15", "2024-12-25"]);
  const [isEven, setIsEven] = useState(isEvenWeek(new Date()));

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("./zajecia.json");
        const resJs = await res.json();
        setData(resJs);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    const dayNumber = currentDay.getDay();
    const filteredClasses = data.filter(
      (item) => item.dayNumber === dayNumber && item.isEvenWeek === isEven
    );
    setTodaysClasses(filteredClasses);
  }, [data, currentDay, isEven]);

  useEffect(() => {
    if (filterCriteria) {
      const dayNumber = currentDay.getDay();
      const filteredClasses = data.filter(
        (item) =>
          item.dayNumber === dayNumber &&
          item.groupName.includes(filterCriteria) &&
          item.isEvenWeek === isEven
      );
      setTodaysClasses(filteredClasses);
    } else {
      const dayNumber = currentDay.getDay();
      setTodaysClasses(
        data.filter(
          (item) => item.dayNumber === dayNumber && item.isEvenWeek === isEven
        )
      );
    }
  }, [filterCriteria, data, currentDay, isEven]);

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const handlePrevDay = () => {
    let newDay = new Date(currentDay);
    newDay.setDate(currentDay.getDate() - 1);
    while (holidays.includes(newDay.toISOString().split("T")[0])) {
      newDay.setDate(newDay.getDate() - 1);
    }
    setCurrentDay(newDay);
    setIsEven(isEvenWeek(newDay));
  };

  const handleNextDay = () => {
    let newDay = new Date(currentDay);
    newDay.setDate(currentDay.getDate() + 1);
    while (holidays.includes(newDay.toISOString().split("T")[0])) {
      newDay.setDate(newDay.getDate() + 1);
    }
    setCurrentDay(newDay);
    setIsEven(isEvenWeek(newDay));
  };

  const currentDayNumber = currentDay.getDay();
  const isToday = currentDay.toDateString() === new Date().toDateString();
  const currentTime = new Date().getHours() + new Date().getMinutes() / 60;

  const ongoingClasses = todaysClasses.filter((item) =>
    isToday
      ? parseFloat(item.startHour.replace(":", ".")) <= currentTime &&
        parseFloat(item.endHour.replace(":", ".")) >= currentTime
      : false
  );

  const upcomingClasses = todaysClasses.filter((item) =>
    isToday ? parseFloat(item.startHour.replace(":", ".")) > currentTime : true
  );

  return (
    <div className="flex justify-center items-center mx-auto xl:h-screen">
      <MainWrapper>
        <div role="alert" className="alert alert-warning flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>Uwaga: dni wolne nie są dodane</span>
        </div>
        <DateNavigator
          currentDay={currentDay}
          onPrevDay={handlePrevDay}
          onNextDay={handleNextDay}
        />

        <FilterButtons onFilter={handleFilter} activeFilter={filterCriteria} />

        <h2 className="text-md text-white">Aktualnie trwające zajęcia</h2>
        {ongoingClasses.length > 0 ? (
          <ClassesCards todaysClasses={ongoingClasses} />
        ) : (
          <NoClassText />
        )}
        <h2 className="text-md text-white">Następne zajęcia</h2>
        {upcomingClasses.length > 0 ? (
          <ClassesCards todaysClasses={upcomingClasses} />
        ) : (
          <NoClassText />
        )}
      </MainWrapper>
    </div>
  );
}
