import React from "react";
import { promises as fs } from "fs";
import PageTitle from "@/app/components/PageTitle"
import TextViewer from "@/app/components/TextViewer"

interface Textbook {
    id: string;
    title: string;
    author: string;
    desc: string;
}

const Textbook = async({ params }: { params: { id: string } }) => {
    const file = await fs.readFile(process.cwd() + '/app/textbooks/textbooks.json', 'utf8');
    const textbooks = JSON.parse(file);
    const textbook = textbooks.find((textbook:Textbook) => textbook.id === params.id);
    return (
      <div>
        <PageTitle title={textbook.title}></PageTitle>
        <TextViewer id={textbook.id}/>
      </div>
    );
  };
  



export default Textbook;
