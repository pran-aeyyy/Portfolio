import React from 'react'
import { useSelector } from 'react-redux'

export default function AboutIntro() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  return (
    <div
      style={{
        color: colorTheme.primaryText,
      }}
      className="text-center mt-4 max-w-[800px]"
    >
      <h1 className="text-4xl font-bold">Hi, I am Pranay Gupta</h1>
      <div className="mt-2">
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          AI/ML Developer
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Designer
        </span>{' '}
        | {` `}
        <span className=" hover:text-[#FD8D14] font-bold cursor-pointer">
          Tech Enthusiast
        </span>
      </div>
      <p className="text-xl mt-8">
      I am a Full-Stack AI/ML Developer proficient in Python, Agentic Frameworks, RAG Applications, Deep Learning, and Computer Vision. I have a strong passion for building intelligent systems and leveraging AI to solve real-world problems. Always eager to explore new technologies, I strive to stay at the forefront of advancements in the AI/ML ecosystem.
      </p>
    </div>
  )
}
