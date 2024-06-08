export default function MainWrapper({ children }) {
  return (
    <div className="h-[700px] flex flex-col gap-2 w-[600px] bg-slate-400 p-10 overflow-y-auto rounded-3xl shadow-2xl">
      {children}
    </div>
  );
}
