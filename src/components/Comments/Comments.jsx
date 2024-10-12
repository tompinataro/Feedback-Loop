import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

function Comments() {
  const [comments, setComments] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitComments = (event) => {
    event.preventDefault();

    dispatch({
      type: "SET_COMMENTS",
      payload: comments,
    });
    history.push("/review");
  };
  return (
    <div>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitComments}
      >
        <div className="flex flex-col items-center">
          <label className="text-2xl font-bold text-gray-900">
            Any comments you want to leave?
          </label>
          <textarea
            data-testid="input"
            className="border-2 border-sky-950 rounded-lg p-1 m-4 w-full text-wrap text-start h-32"
            type="text"
            value={comments}
            placeholder="Add some comments"
            onChange={(e) => setComments(e.target.value)}
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

export default Comments;
