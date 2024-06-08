export default function FilterButtons({ onFilter, activeFilter }) {
  return (
    <div className="flex flex-row justify-center gap-4 mb-4">
      <h2 className="text-xl text-white my-auto"> Grupa: </h2>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => onFilter("A")}
          className={`py-2 px-4 rounded ${
            activeFilter === "A"
              ? "bg-slate-600 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          A
        </button>
        <button
          onClick={() => onFilter("B")}
          className={`py-2 px-4 rounded ${
            activeFilter === "B"
              ? "bg-slate-600 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          B
        </button>
      </div>
    </div>
  );
}
