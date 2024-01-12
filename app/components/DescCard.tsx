import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  path: string;
}

const DescCard: React.FC<CardProps> = ({
  title,
  imageSrc,
  description,
  buttonText,
  buttonColor,
  path,
}) => {
  return (
    <div className="card card-compact h-[80%] bg-base-100 shadow-xl mt-12 hover:shadow-2xl transform 
    hover:scale-105 transition-all duration-300 select-none">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="leading-relaxed">{description}</p>
        <div className="card-actions justify-end">
          <button className={`btn btn-${buttonColor} btn-outline`}>
              <Link href={path}>{buttonText}</Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default DescCard;
