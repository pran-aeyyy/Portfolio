import React from 'react'
import { Button, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MdDarkMode, MdSunny } from 'react-icons/md'
import { modeActions } from '../store'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import Confetti from 'react-confetti'

// color theme

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const navigate = useNavigate()

  const MyButton = styled(Button)({
    textTransform: 'capitalize',
    // backgroundColor: colorTheme.primaryBlue,
  })
  const theme = useSelector((state) => state.mode.darkMode)
  const colorTheme = useSelector((state) => state.mode.colorTheme)
  const confetti = useSelector((state) => state.confetti.confetti)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    console.log(theme)
    dispatch(modeActions.toggle())
  }

  return (
    <div
      className="flex items-center justify-between w-full p-4 lg:px-[3rem] lg:py-[1rem] fixed top-0 left-0 z-50"
      style={{ backgroundColor: colorTheme.primaryBg }}
    >
      {confetti && <Confetti />}
      <Link to="/">
        <h1
          className="text-3xl font-bold uppercase"
          style={{ color: colorTheme.primaryText }}
        >
          Pran.aeyyy
        </h1>
      </Link>
      {isHome && (
  <ul className="gap-5 items-center hidden lg:flex">
    <li>
      <a
        href="#intro"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#about"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        About
      </a>
    </li>
    <li>
      <a
        href="#skills"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        Skills
      </a>
    </li>
    <li>
      <a
        href="#projects"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        Projects
      </a>
    </li>
    <li>
      <a
        href="#experience"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        Exp
      </a>
    </li>
    <li>
      <a
        href="#contact"
        className="text-xl font-bold animate-underline"
        style={{ color: colorTheme.primaryText }}
      >
        Contact
      </a>
    </li>
  </ul>
)}

      <div className="flex gap-3 items-center">
        <IconButton onClick={toggleTheme}>
          {!theme ? (
            <MdDarkMode />
          ) : (
            <MdSunny color={`${colorTheme.primaryText}`} />
          )}
        </IconButton>
        <MyButton
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
                    Resume
                  </MyButton>
      </div>
    </div>
  )
}
