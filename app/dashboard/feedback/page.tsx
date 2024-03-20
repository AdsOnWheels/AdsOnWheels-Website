import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

import { showSuccessToast } from "@/app/components/CustomToast";

interface FeedbackFormValues {
  areaOfConcern: string;
  feedbackType: string;
  feedbackDetails: string;
  userRating: number;
}

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormValues>();

  const onSubmit = handleSubmit(async (data) => {
    // Handle form submission here
    console.log("Feedback Data:", data);

    // Feature 2: User Feedback History
    showSuccessToast(
      "Thank you for your feedback!",
      <p>
        You can view your feedback history{" "}
        <Link href="/dashboard/feedback/feedback-history" className="underline">
          here
        </Link>
        .
      </p>
    );
  });

  return (
    <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
      <Toaster position="bottom-right" reverseOrder={false} />
      <form
        className="relative flex flex-col flex-auto min-w-0 p-4 mt-6 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-xl shadow-xl rounded-2xl bg-clip-border"
        onSubmit={onSubmit}
      >
        <h2 className="font-bold dark:text-white">Feedback</h2>
        <hr className="h-px mx-0 my-4 bg-transparent border-0 opacity-25 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div className="mb-4">
          <label
            htmlFor="areaOfConcern"
            className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
          >
            Area Of Concern:
          </label>
          <select
            id="areaOfConcern"
            {...register("areaOfConcern")}
            className="focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5 ease-in block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-300 focus:outline-none"
          >
            <option value="">Select area of concern</option>
            <option value="Dashboard">Dashboard</option>
            <option value="User Management">User Management</option>
            <option value="Content Management">Content Management </option>
            <option value="Forms">Forms</option>
            <option value="Campaigns">Campaigns</option>
            <option value="Analytics">Analytics</option>
            <option value="Settings">Settings</option>
            <option value="Notifications">Notifications</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="feedbackType"
            className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
          >
            Feedback Type:*
          </label>
          <select
            id="feedbackType"
            {...register("feedbackType", { required: true })}
            className="focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm leading-5 ease-in block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-300 focus:outline-none"
          >
            <option value="">Select feedback type</option>
            <option value="Bug">Bug</option>
            <option value="Feature Request">Feature Request</option>
            <option value="General Feedback">General Feedback</option>
          </select>
          {errors.feedbackType && (
            <span className="text-sm text-red-500 mt-2">
              Error: Please provide a feedback type
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="feedbackDetails"
            className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
          >
            Feedback Details:*
          </label>
          <textarea
            id="feedbackDetails"
            rows={5}
            placeholder="Tell us more about your feedback..."
            {...register("feedbackDetails", { required: true })}
            className="focus:shadow-blue-500 dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 min-h-unset text-sm leading-5 ease-in block h-auto w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-300 focus:outline-none"
          />
          {errors.feedbackDetails && (
            <span className="text-sm text-red-500 mt-2">
              Error: Please provide a feedback details
            </span>
          )}
        </div>
        {/* Feature 1: User Ratings */}
        <div className="flex flex-col mb-4">
          <label
            htmlFor="userRating"
            className="mb-2 ml-1 font-bold text-xs text-slate-700 dark:text-white/80"
          >
            Rate your satisfaction (1-5):*
          </label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((rating) => (
              <input
                key={rating}
                type="radio"
                id={`userRating-${rating}`}
                value={rating}
                {...register("userRating", { required: true })}
                className="mask mask-star-2 bg-yellow-500"
              />
            ))}
          </div>
          {errors.userRating && (
            <span className="text-sm text-red-500 mt-2">
              Error: Please provide a rating
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block px-8 py-2 m-0 text-xs ml-auto font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer tracking-tight hover:shadow-sm dark:bg-gradient-to-tl dark:from-slate-800 dark:to-gray-800 bg-gradient-to-tl from-gray-900 to-slate-800 hover:scale-105 active:opacity-85"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
