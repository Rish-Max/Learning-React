import { useId, useState } from "react";

export default function Slider({ min, max, value, update }) {
  const id = useId();
  const [val, setVal] = useState(value);

  function handleChange(e) {
    setVal(e.target.value);
    update(e.target.value);
  }

  return (
    <div className="d-block">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={val}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        onChange={handleChange}
      />
    </div>
  );
}
