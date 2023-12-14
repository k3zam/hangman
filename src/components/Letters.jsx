export const Letters = ({ letters }) => {
  return (
    <div className="flex gap-3 bg-slate-600 p-3 rounded-md py-2">
      {letters.map((letter, index) => (
        <div
          key={`${letter}-${index}`}
          className="h-12 w-12 border rounded-md border-slate-200 bg-white font-bold text-xl flex justify-center items-center text-slate-800"
        >
          {letter}
        </div>
      ))}
    </div>
  );
};
