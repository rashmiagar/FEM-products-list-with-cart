import { current } from '@reduxjs/toolkit';
import React from 'react';
import {useState} from "react"
const faqs = [
    { question: 'What is your return policy?', answer: 'You can return any item within 30 days of purchase.' },
    { question: 'How do I track my order?', answer: 'You can track your order using the tracking number provided in your email.' },
    { question: 'Do you ship internationally?', answer: 'Yes, we ship to most countries around the world.' }
  ];
export default function Accordion() {

  const [isOpen,setIsOpen]=useState(false)
  const [currentIndex,setCurrentIndex]=useState(null)

  
  
  return (
    <div className="container">
      <h2>FAQ Accordion</h2>
      {faqs.map((item, index)=>(
      <>
      <p className="bg-blue-500 h-10 p-5 m-10" onClick={() => setCurrentIndex(index)}>{item.question}</p>
      <p className={index === currentIndex ? "" : "hidden"}>{item.answer}</p>
      </>))}
    </div>
  );
}
