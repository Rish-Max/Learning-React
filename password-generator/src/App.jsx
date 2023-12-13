import { useCallback, useEffect, useState } from "react";
import Checkbox from "./components/Checkbox.jsx";
import Input from "./components/Input.jsx";
import Slider from "./components/Slider.jsx";
import { generateRandompassword } from "./utility.js";
function App() {
  const [value, setVaue] = useState("");
  const [len, setLen] = useState(8);
  const [incNum, setIncNum] = useState(false);
  const [incSpecialChar, setincSpecialChar] = useState(false);

  useEffect(() => {
    setVaue(generateRandompassword(len, incNum, incSpecialChar));
  }, [incNum, incSpecialChar, len]);

  function updatePasslength(val) {
    setLen(val);
  }

  function toggleisIncludedNum() {
    setIncNum(!incNum);
  }

  function toggleisIncludedSpecialChar() {
    setincSpecialChar(!incSpecialChar);
  }

  return (
    <div className="bg-slate-800 w-screen h-screen flex justify-center items-center">
      <div className="bg-slate-900 text-white p-4 rounded-md">
        <h1 className="text-xl mb-4">Password Generator</h1>
        <Input value={value} />
        <div className="flex items-center gap-4">
          <Slider min="1" max="45" value="20" update={updatePasslength} />
          <Checkbox
            label="Add Special Character"
            value="false"
            toggleOnClick={toggleisIncludedSpecialChar}
          />
          <Checkbox
            label="Add Number"
            value="false"
            toggleOnClick={toggleisIncludedNum}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
