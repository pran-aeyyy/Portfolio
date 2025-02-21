import React, { useEffect } from 'react'
import { useInView, useAnimate } from 'framer-motion'
import { useSelector } from 'react-redux'
import ProjectCard from './ProjectCard'
import blogImg from '../../assets/blog.png'
import xCodeImg from '../../assets/x-code.png'
import car from '../../assets/car.png'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function Projects() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  useEffect(() => {
    if (isInView) {
      //   console.log('in view')
      animate(
        aboutRef.current,
        {
          opacity: 1,
          x: 0,
        },
        {
          duration: 0.2,
          delay: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])

  return (
    <div
      className=" w-full min-h-screen flex flex-col items-center justify-center text-center gap-4 lg:gap-8 "
      id="projects"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-3xl mb-4 font-bold">Projects</h1>
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4">
          <ProjectCard
            title="Blog Generator using LLama2"
            description="A simple Multi-AI AGENT bot that can help you write blogs on your favourite topics within your desired word limit."
            image={blogImg}
            link="https://github.com/pran-aeyyy/Blog-Generation-Llama2"
            delay={1}
          />
          <ProjectCard
            title="License Plate Recognition"
            description="A Computer Vision based project built using YOLOv7 and OCR to read and save the number plates in the database."
            image={car}
            link="https://github.com/iamBijoyKar/jsondb"
            delay={1.3}
          />
          <ProjectCard
            title="X Code"
            description="X Code is a Visual Code Editor made with Tauri and React. It is inspired by Visual Studio Code."
            image={xCodeImg}
            link="https://github.com/iamBijoyKar/x-code"
            delay={1.6}
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <Button
                      onClick={() => navigate('/skills')}
                      variant="outlined"
                      sx={{
                         // Initial text color
                        borderColor: '#ff5722', // Initial border color
                        backgroundColor: '#ff5722', // Ensure it's transparent initially
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#d84315', // Fill color on hover
                          color: '#fff', // Text color on hover\
                          borderColor : '#d84315'
                        },
                      }}
                    >
                      See more
                    </Button>
        </div>
      </div>
    </div>
  )
}
