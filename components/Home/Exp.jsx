import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAnimate, useInView } from 'framer-motion'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { StepContent } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Paper } from '@mui/material'

export default function Exp() {
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const navigate = useNavigate()
  const [aboutRef, animate] = useAnimate()
  const isInView = useInView(aboutRef)

  const steps = [
    {
      label: 'Tech Team Head @ STeRG',
      time: 'Aug 2022 -  April 2024',
      description:
        'I was a Tech Team head of a Space Technology and Research Group at MIT-WPU. Under my tenure we collaborated with ISRO to launch a payload into the space. ',
    },
    {
      label: 'Associate AI/ML Developer @ Cynapto Technologies',
      time: 'June 2024 - Dec 2024',
      description:
        'Developed and deployed a Computer Vision model for TVS Motor Company as part of a collaborative team effort. Gained hands-on experience with YOLOv7, Computer Vision, and Deep Learning models, enhancing expertise in real-world AI applications. '
    },
  ]

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

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
          delay: 0.2,
          duration: 0.2,
        },
      )
    } else {
      //   console.log('not in view')
      animate(aboutRef.current, { opacity: 0, x: 100 })
    }
  }, [isInView])
  return (
    <div
      className=" w-full h-screen flex flex-col items-center justify-center gap-4 lg:gap-8 max-w-[600px]"
      id="experience"
    >
      <div
        ref={aboutRef}
        className=""
        style={{
          fontFamily: 'Borel, sans-serif',
          color: colorTheme.primaryText,
        }}
      >
        <h1 className="text-4xl text-center mb-4 font-bold">Experience</h1>
        <Box sx={{ maxWidth: 500 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
  sx={{
    '& .MuiStepLabel-label': {
      fontSize: '1.2rem', // Increase font size
      fontWeight: 'bold', // Make it bold if needed
      color: colorTheme.primaryText, // Apply theme color
    },
  }}
  optional={
    index === 2 ? (
      <Typography
        sx={{ color: colorTheme.primaryText, fontSize: '1.2rem' }}
        variant="body1"
      >
        Last step
      </Typography>
    ) : null
  }
>
  {step.label}
</StepLabel>

                <StepContent>
                  <Typography
                    sx={{ color: colorTheme.primaryText }}
                    variant="h6"
                    component={'div'}
                    className="mb-2"
                  >
                    {step.time}
                  </Typography>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === 2 && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 2,
                bgcolor: colorTheme.primaryBg,
              }}
            >
              <Button variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Paper>
          )}
        </Box>
        <div className="w-full flex justify-center mt-8">
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
