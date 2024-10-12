import { useState } from "react";
import { useDispatch } from "react-redux";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Understanding() {
  const [understanding, setUnderstanding] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitUnderstanding = (event) => {
    event.preventDefault();

    dispatch({
      type: "SET_UNDERSTANDING",
      payload: Number(understanding),
    });
    history.push("/support");
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitUnderstanding}
      >
        <div className="flex flex-col items-center">
          <label className="text-2xl font-bold text-gray-900">
            How well are you understanding the content?
          </label>
          <p className="text-sm/6 text-gray-400">
            Between 1 (poorly) and 5 (full understanding)
          </p>
          <input
            data-testid="input"
            className="border-2 border-sky-950 rounded-lg p-1 m-4 max-w-40 text-center"
            type="number"
            value={understanding}
            placeholder="0"
            onChange={(e) => setUnderstanding(e.target.value)}
          />
        </div>
        <button
          data-testid="next"
          className=" flex flex-row items-center justify-end w-40 border-1 border-slate-400 bg-slate-400 hover:bg-slate-900 hover:text-white rounded-full drop-shadow-lg pt-2 pb-2"
        >
          Next <ArrowRightIcon className="w-6 ml-7 mr-2" />
        </button>
      </form>
    </div>
  );
}

export default Understanding;
