"use client";

import React from "react";

interface BreadcrumbItem {
  text: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {items.map((item, index) => (
          <li
            key={index}
            className={`px-2 ${index === 0 ? "pl-0" : ""} ${
              index === items.length - 1 ? "pr-0" : ""
            }`}
          >
            {item.href ? (
              <a href={item.href} className="text-blue-600 hover:text-blue-800">
                {item.text}
              </a>
            ) : (
              <span className="text-gray-500">{item.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
