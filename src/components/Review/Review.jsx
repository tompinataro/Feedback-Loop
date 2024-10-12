import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import axios from "axios";

function Review() {
  const history = useHistory();
  const dispatch = useDispatch();

  const a = useSelector((store) => store.feeling);
  const b = useSelector((store) => store.understanding);
  const c = useSelector((store) => store.support);
  const d = useSelector((store) => store.comments);

  const handleClick = () => {
    sendFeedback();
    resetStore();
    history.push("/thank");
  };
  const sendFeedback = () => {
    let feedbackToSend = { a, b, c, d };
    axios({
      method: "POST",
      url: "/api/feedback",
      data: feedbackToSend,
    })
      .then((response) => {
        resetStore();
      })
      .catch((err) => {
        console.log("error on POST", err);
        alert("There was an error sending the data to the database");
      });
  };

  const resetStore = () => {
    dispatch({
      type: "RESET_STORE",
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Review Your Feedback
        </h2>
        <table className="table-auto border-collapse border-none mt-4 mb-4">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="border border-slate-700 pl-4 pr-4">Feeling</th>
              <th className="border border-slate-700 pl-4 pr-4">
                Understanding
              </th>
              <th className="border border-slate-700 pl-4 pr-4">Support</th>
              <th className="border border-slate-700 pl-4 pr-4">Comments</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border border-slate-700">{a}</td>
              <td className="border border-slate-700">{b}</td>
              <td className="border border-slate-700">{c}</td>
              <td className="border border-slate-700">"{d}"</td>
            </tr>
          </tbody>
        </table>
        <button
          data-testid="next"
          onClick={handleClick}
          className=" flex flex-row items-center justify-end w-40 border-1 border-slate-400 bg-slate-400 hover:bg-slate-900 hover:text-white rounded-full drop-shadow-lg pt-2 pb-2"
        >
          Next <ArrowRightIcon className="w-6 ml-7 mr-2" />
        </button>
      </div>
    </div>
  );
}

export default Review;
