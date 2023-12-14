const ITEMS = ["Animals", "Countries", "Fruits"];

export const Header = () => {
  return (
    <header className="bg-slate-700 p-10 py-4 flex justify-between items-center text-white">
      <div>
        <h1 className="text-xl font-bold">Hangman!</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          {ITEMS.map((item) => {
            return (
              <li key={item}>
                <button className="p-3 py-1 bg-white text-slate-700 rounded-md font-bold block hover:bg-slate-300 hover:scale-110 transition-all">
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
