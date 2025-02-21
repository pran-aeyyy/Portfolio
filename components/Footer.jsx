import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

export default function Footer() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const theme = useSelector((state) => state.mode.darkMode)

  return (
    <footer
      className="flex flex-col items-center gap-3 p-4 lg:p-8 lg:pb-4 w-full border-t-[1px] border-t-[#dddddd]"
      style={{
        color: colorTheme.primaryText,
        borderColor: theme ? '#A6A9B6' : '#dddddd',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-5 justify-between w-full">
        <div className="flex flex-col justify-start w-full lg:w-fit ">
          <h1 className="text-2xl font-bold ">Pranay Gupta</h1>
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
          <p className="">Pranay Gupta © Copyright 2024</p>
        </div>
        <div className="flex gap-4 lg:gap-6 font-semibold justify-between w-full lg:w-fit">
          <div className="flex flex-col gap-3">
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link to="/confetti">Confetti</Link>
            <Link to="/resources">Resources</Link>
            <Link to="https://github.com/pran-aeyyy" target="_blank">
              GitHub
            </Link>
            <Link to="/copyright">Copyright</Link>
          </div>
        </div>
      </div>
      <hr
        className="w-full"
        style={{ backgroundColor: colorTheme.primaryText, height: '1.5px' }}
      />
      <div className="flex gap-4 justify-center lg:justify-end w-full ">
        <Link
          target="_blank"
          className="group"
          to="https://github.com/pran-aeyyy"
        >
          <BsGithub className="text-2xl inline-block mr-2 group-hover:text-[#000000]" />
          GitHub
        </Link>
        <Link
          target="_blank"
          className="group"
          to="https://www.linkedin.com/in/pranay-gupta-45128721b/"
        >
          <BsLinkedin className="text-2xl inline-block mr-2 group-hover:text-[#1565c0]" />
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}
