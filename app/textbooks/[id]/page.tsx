import React from "react";
import { promises as fs } from "fs";
import PageTitle from "@/app/components/PageTitle"
import {useRouter} from "next/router"

interface Textbook {
    id: string;
    title: string;
    author: string;
    desc: string;
}

const Textbook = () => {
    const router = useRouter();
    return (
      <div>
        <h1></h1>
        <p>Author: </p>
        <p>Description:</p>
      </div>
    );
  };
  



export default Textbook;
