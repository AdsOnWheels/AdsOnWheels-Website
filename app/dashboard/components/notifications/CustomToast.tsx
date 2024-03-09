import { toast } from "react-hot-toast";

const customToast = (message: string, type: string) => {
  toast.custom((t) => (
    <div
      className={`${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } p-4 rounded-md flex items-center justify-between`}
    >
      <div className="flex items-center">
        <svg
          className="w-6 h-6 mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {type === "success" ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          )}
        </svg>
        <span className="text-white">{message}</span>
      </div>
      <button onClick={() => toast.dismiss(t.id)}>&times;</button>
    </div>
  ));
};

// Use custom toast for success messages
const showSuccessToast = (message: string) => {
  customToast(message, "success");
};

// Use custom toast for error messages
const showErrorToast = (message: string) => {
  customToast(message, "error");
};
