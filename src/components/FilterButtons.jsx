export default function FilterButtons({ onFilter, activeFilter }) {
  return (
    <div className="flex flex-row justify-center gap-4 mb-4">
      <h2 className="text-xl text-white my-auto"> Grupa: </h2>
      <div className="flex flex-row gap-4">
        <button
          onClick={() => onFilter("A")}
          className={`py-3 px-5 rounded ${
            activeFilter === "A"
              ? "bg-[#718093] text-white"
              : "bg-[#dcdde1] text-black"
          }`}
        >
          A
        </button>
        <button
          onClick={() => onFilter("B")}
          className={`py-3 px-5 rounded ${
            activeFilter === "B"
              ? "bg-[#718093] text-white"
              : "bg-[#dcdde1] text-black"
          }`}
        >
          B
        </button>
      </div>
    </div>
  );
}
