import React from "react";
import PageTitle from "./../components/PageTitle";
import DropdownFilter from "../components/DropdownFilter";
import TextSearch from "../components/TextSearch";

const TextbookPage = () => {
  return (
    <div>
      <PageTitle title="Textbooks" />
      <div className="container mx-auto mt-3 flex justify-end">
        <TextSearch />
        <DropdownFilter />
      </div>
    </div>
  );
};

export default TextbookPage;
