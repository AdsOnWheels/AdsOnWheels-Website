import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Breadcrumb() {
  const path = usePathname();
  const paths = path.split("/").filter((segment) => segment !== "dashboard"); // Exclude "dashboard" segment

  return (
    <nav className="flex flex-wrap text-sm font-medium text-gray-600 pt-2 ml-11 bg-transparent">
      <ol className="list-none flex">
        {paths.map((segment, index) => (
          <li
            key={segment}
            className="flex items-center text-sm leading-normal"
          >
            {index === 0 ? ( // Check for the second segment and render the home icon
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faHome} />
                </Link>
                {index !== paths.length - 1 && (
                  <span className="text-lg font-extrabold leading-normal mx-1">
                    /
                  </span>
                )}
              </>
            ) : (
              <Link
                href={`/dashboard${paths.slice(0, index + 1).join("/")}`}
                className="text-gray-500 hover:text-gray-700 mt-1"
              >
                {formatPageName(segment)}
              </Link>
            )}
            {index !== paths.length - 1 && index > 0 && (
              <span className="text-lg font-extrabold leading-normal mx-1">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function formatPageName(path: string) {
  // Remove hyphens and capitalize each word
  const formattedPage = path
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedPage;
}

export default Breadcrumb;
