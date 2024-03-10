import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface Props {
  href: string;
}

const EditContentButton = ({ href }: Props) => {
  return (
    <Link href={`/dashboard/content-management/${href}/edit`}>
      <button className="text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200">
        <FontAwesomeIcon icon={faEdit} className="w-3.5 h-3.5 mr-1" />
        Edit
      </button>
    </Link>
  );
};

export default EditContentButton;
