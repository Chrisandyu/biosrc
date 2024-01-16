import Link from "next/link";
import React from "react";

interface Props {
  id: string;
  title: string;
  author: string;
  desc: string;
}

const TextCard: React.FC<Props> = ({ id, title, author, desc }) => {
  return (
    <div>
      <Link href={`/textbooks/${id}`}>
        <div className="card bg-base-300 shadow-xl ">
          <figure>
            <img
              src={`/books/${id}.png`}
              alt={id}
              className="max-h-60 object-cover mt-6"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {title}
            </h2>
            <p>{author}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tags</div>
              <div className="badge badge-outline">Tags</div>
            </div>
          </div>
        </div>
        
      </Link>
    </div>
  );
};

export default TextCard;
