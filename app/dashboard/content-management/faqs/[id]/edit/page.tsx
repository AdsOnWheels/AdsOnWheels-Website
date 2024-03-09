import React from "react";
import prisma from "@/prisma/client";

import ContentCreator from "@/app/dashboard/components/forms/ContentCreator";
import { faqUpdateSchema } from "@/app/schemas/faqSchema";

interface Props {
  params: { id: string };
}

const EditFAQ = async ({ params }: Props) => {
  const faqId = params.id;

  const faq = await prisma.fAQ.findUnique({
    where: { id: faqId },
  });

  const heading = "Edit FAQ";
  const inputName = "question";
  const editorName = "answer";
  const schema = faqUpdateSchema;
  const apiEndpoint = `/api/faqs/${faqId}`;

  return (
    <></>
    // <ContentCreator
    //   heading={heading}
    //   inputName={inputName}
    //   editorName={editorName}
    //   tags={true}
    //   schema={schema}
    //   apiEndpoint={apiEndpoint}
    // />
  );
};

export default EditFAQ;
