import Subtitle from "../../layout/Subtitle";
import React from "react";

interface Props {
  userType: "company" | "driver";
}

const SignUp = ({ userType }: Props) => {
  return (
    <section className="text-center">
      <Subtitle subTitle="Unlock Opportunities Today!" />
      <p className="text-gray-700 mb-6">
        {userType === "company"
          ? "Ready to elevate your brand with bicycle ad placements? Sign up now and connect with your audience in a unique way."
          : "Transform your commute into a source of income! Join our community of drivers and start earning by participating in our ad placement program."}
      </p>
      <div className="flex justify-center">
        {/* Placeholder for your actual sign-up form or CTA button */}
        {/* Clicking on the button should take the user to the sign up page with the form rendered */}
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
          {userType === "company" ? "Sign Up as Company" : "Become a Driver"}
        </button>
      </div>
    </section>
  );
};

export default SignUp;
