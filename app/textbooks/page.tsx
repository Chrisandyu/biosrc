import React from "react";
import PageTitle from "@/app/components/PageTitle";
import DropdownFilter from "../components/DropdownFilter";
import TextSearch from "../components/TextSearch";
import TextCard from "../components/TextCard";
import { promises as fs } from 'fs';
import Link from "next/link";



const TextbookPage = async() => {
  const file = await fs.readFile(process.cwd() + '/app/textbooks/textbooks.json', 'utf8');
  const textbooks = JSON.parse(file);
  return (
    <div>
      <PageTitle title="Textbooks" />
      <div className="container mx-auto mt-3 mb-8 flex justify-end">
        <TextSearch />
        <DropdownFilter />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
         {textbooks.map((textbook: any) => (
          <TextCard key={textbook.id} {...textbook} />
        ))}
        <TextCard id="campbell" title="dsd" author="fewfwef" desc="dewdew"></TextCard> 
        <TextCard id="campbell" title="dsd" author="fewfwef" desc="dewdew"></TextCard> 
      </div>
    </div>
  );
};

export default TextbookPage;
