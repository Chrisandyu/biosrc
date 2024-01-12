'use client';

import React from "react";

const ScrollButton = () => {
  function scrollToBottom() {
    const scrollTo = document.documentElement.scrollHeight - window.innerHeight;
    window.scroll({ top: scrollTo, behavior: "smooth" });
  }
  return (
    <div>
      <button className="btn btn-primary hover:shadow-md " onClick={scrollToBottom}>
        Get Started
      </button>
    </div>
  );
};

export default ScrollButton;