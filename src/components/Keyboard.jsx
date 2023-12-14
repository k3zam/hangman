import { useState } from "react";

const Key = ({ letter: key, onClick: onKeyClick }) => {
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    onKeyClick(key);
    setDisabled(true);
  };
  return (
    <button disabled={disabled} onClick={onClick} className="key">
      {key}
    </button>
  );
};

export const Keyboard = ({ onClick }) => {
  const keys = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
  return (
    <div className="keyboard">
      {keys.map((row) => {
        return (
          <div className="keys-row" key={row}>
            {row.split("").map((key) => (
              <Key key={key} letter={key} onClick={onClick} />
            ))}
          </div>
        );
      })}
    </div>
  );
};
