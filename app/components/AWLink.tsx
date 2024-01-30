"use client";

import React from "react";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  className?: string;
  color?:
    | "primary"
    | "danger"
    | "success"
    | "warning"
    | "update"
    | "info"
    | "light"
    | "dark"
    | "neutral"
    | "accent"
    | "indigo"
    | "teal"
    | "amber"
    | "emerald";
}

const colorClasses = {
  primary: "text-blue-500 ",
  danger: "text-red-500 ",
  success: "text-green-500",
  warning: "text-yellow-500",
  update: "text-indigo-600",
  info: "text-blue-300",
  light: "text-gray-100",
  dark: "text-gray-800",
  neutral: "text-gray-500",
  accent: "text-pink-500",
  indigo: "text-indigo-500",
  teal: "text-teal-500",
  amber: "text-amber-500",
  emerald: "text-emerald-500",
};

const AWLink = ({ href, text, color = "light", className }: Props) => {
  const textColorClass = colorClasses[color] || colorClasses.primary;

  const linkClasses = `${textColorClass} text-md text-center ${
    className || ""
  }`;

  return (
    <Link href={href} className={linkClasses}>
      {text}
    </Link>
  );
};

export default AWLink;
