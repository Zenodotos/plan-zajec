export default function MainWrapper({ children }) {
  return (
    <div className=" h-5/6 xl:h-[700px] flex flex-col gap-4 w-full xl:w-[600px] bg-[#353b48] p-3 overflow-y-auto rounded-3xl shadow-2xl">
      {children}
    </div>
  );
}
