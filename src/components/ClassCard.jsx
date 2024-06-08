export default function ClassCard({ item }) {
  return (
    <div
      role="alert"
      className="p-5 bg-slate-100 rounded-2xl flex justify-start"
    >
      <div className="w-2/3">
        <p className="text-2xl"> {item.className}</p>
        <p>{item.professorsName}</p>
        <p className="text-xl">{item.roomNumber}</p>
        <p className="text-xl">{`${item.startHour} - ${item.endHour}`}</p>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <p className="text-3xl">{item.classType}</p>
      </div>
    </div>
  );
}
