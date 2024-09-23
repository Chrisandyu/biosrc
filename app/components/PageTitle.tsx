import React from "react";

interface Props { 
  title: string;
}

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <div>
        <div className="hero mt-20">
          <div className="hero-content text-center">
            <h1 className={`text-4xl font-bold`}>{title}</h1>
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
