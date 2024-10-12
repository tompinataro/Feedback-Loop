import { useHistory } from "react-router-dom";
import { CheckBadgeIcon } from "@heroicons/react/16/solid";

function ThankYou() {
  const history = useHistory();

  const returnToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <CheckBadgeIcon className="p-2 text-green-600" />
      <h2>Thank you for your feedback!</h2>
      <button
        data-testid="next"
        className="border-4 bg-slate-600 text-white hover:bg-slate-400 hover:text-slate-800 rounded-full p-4"
        onClick={returnToHome}
      >
        Submit Another Feedback
      </button>
    </div>
  );
}

export default ThankYou;
