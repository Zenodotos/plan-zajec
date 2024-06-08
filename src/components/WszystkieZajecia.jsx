import { useEffect, useState } from "react";

export default function WszystkieZajecia() {
  const [data, setData] = useState([]);
  const [time, setTime] = useState(new Date());

  const daysOfWeek = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek"];

  useEffect(() => {
    async function getData() {
      const res = await fetch("./zajecia.json");
      const resJs = await res.json();
      setData(resJs);
      console.log(data);
    }
    getData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>{`${time.getHours()} ${time.getMinutes()} ${
        daysOfWeek[time.getDay() - 1]
      }`}</h1>
      <div className="flex gap-5"></div>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col ">
            <p> {item.className}</p>
            <p>{item.professorsName}</p>
            <p>{item.roomNumber}</p>
            <p>{item.classType}</p>
            <p>{daysOfWeek[item.dayNumber - 1]}</p>
            <p>{item.groupName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
