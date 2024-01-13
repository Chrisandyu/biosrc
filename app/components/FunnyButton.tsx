'use client'
import React, { useState, useEffect } from 'react';

const FunnyButton = () => {
  const [buttonText, setButtonText] = useState('Unsubscribe');

  const distanceBetween = (p1x: number, p1y: number, p2x: number, p2y: number): number => {
    const dx = p1x - p2x;
    const dy = p1y - p2y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  useEffect(() => {
    const button = document.querySelector('.btn-primary') as HTMLElement;

    const handleMouseMove = (event: MouseEvent) => {
      const radius = Math.max(button.offsetWidth, button.offsetHeight * 0.75, 100);

      const bx = button.offsetLeft + button.offsetWidth / 2;
      const by = button.offsetTop + button.offsetHeight / 2;

      const dist = distanceBetween(event.clientX, event.clientY, bx, by);
      const angle = Math.atan2(event.clientY - by, event.clientX - bx);

      const ox = -1 * Math.cos(angle) * Math.max(radius - dist, 0);
      const oy = -1 * Math.sin(angle) * Math.max(radius - dist, 0);

      const rx = oy / 2;
      const ry = -ox / 2;

      button.style.transition = 'all 0.1s ease';
      button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      button.style.boxShadow = `0px ${Math.abs(oy)}px ${Math.abs(oy) / radius * 40}px rgba(255,255,255,0.15)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonClick = () => {
    setButtonText('You have unsubscribed :)');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setButtonText('No cheating');
  };

  const handleNoTouch = () => {
    setButtonText("No touchscreen");
  };

  return (
    <div>
      <button
        className="btn btn-primary px-6"
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        onTouchStart={handleNoTouch}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FunnyButton;
