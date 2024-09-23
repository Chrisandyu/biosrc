import React from 'react';

interface Props{
    id:string;
}

const TextViewer:React.FC<Props> = ({ id }) => {
  // Assuming your PDFs are stored in the public/pdf folder
  const pdfUrl = `/pdfs/${id}.pdf`;

  return (
    <div>
      <iframe src={pdfUrl} width="100%" height="1000px"/>
    </div>
  );
};

export default TextViewer;