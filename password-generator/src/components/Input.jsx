import { useEffect, useId, useRef, useState } from "react";
import { copy } from "../utility";

export default function Input({ value }) {
  const id = useId();
  const inputRef = useRef();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
  }, [value]);

  function handleClick() {
    copy(inputRef.current);
    setIsCopied(true);
  }

  return (
    <div className="form-group flex mb-4">
      <input
        type="text"
        placeholder="Password"
        className="block w-full rounded-md rounded-r-none border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id={id}
        ref={inputRef}
        readOnly
        value={value}
      />
      <button
        className="bg-rose-600 text-white px-4 py-1.5 text-sm rounded-md rounded-l-none"
        onClick={handleClick}
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
