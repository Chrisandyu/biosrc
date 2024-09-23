//import { useRouter } from "next/navigation";
import React from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

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
  //const router = useRouter();

  return (
    <div
      className="card card-compact h-[80%] bg-base-100 shadow-xl mt-12 hover:shadow-2xl transform 
    hover:scale-105 transition-all duration-300 select-none"
    >
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="leading-relaxed">{description}</p>
        <div className="card-actions justify-end">
          <Link className={`btn btn-${buttonColor}`} href={path}>{title}</Link>
        </div>
      </div>
    </div>
  );
};

export default DescCard;
