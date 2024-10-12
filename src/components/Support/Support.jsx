import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Support() {
  const [support, setSupport] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitSupport = (event) => {
    event.preventDefault();

    dispatch({
      type: "SET_SUPPORT",
      payload: Number(support),
    });
    history.push("/comments");
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitSupport}
      >
        <div className="flex flex-col items-center">
          <label className="text-2xl font-bold text-gray-900">
            How well are you being supported?
          </label>
          <p className="text-sm/6 text-gray-400">
            Between 1 (poorly) and 5 (full support)
          </p>
          <input
            data-testid="input"
            className="border-2 border-sky-950 rounded-lg p-1 m-4 max-w-40 text-center"
            type="number"
            value={support}
            placeholder="0"
            onChange={(e) => setSupport(e.target.value)}
          />
        </div>
        <button
          data-testid="next"
          className=" flex flex-row items-center justify-end w-32 border-2 border-slate-400 bg-slate-400 hover:bg-slate-200 rounded-full drop-shadow-lg"
        >
          Next <ArrowRightIcon className="w-6 ml-3 mr-2" />
        </button>
      </form>
    </div>
  );
}

export default Support;
