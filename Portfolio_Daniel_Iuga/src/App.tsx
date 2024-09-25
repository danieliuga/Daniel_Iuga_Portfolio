import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Project from './Components/Project';
import SkillItem from './Components/SkillsItem';
import './App.css'

import photo from '/imagen_Dani.jpg';
import photo2 from '/foto_Dani2.jpg';
import letra from '/letra-d.png';
import data_Format from '/data_format.png';
import interes from '/interes.png';
import amortizacion from '/amortizacion.png';
import html from '/html.png';
import css from '/css.png';
import javascript from '/javascript.png';
import react from '/react.png';
import npm from '/npm.png';
import vite from '/vite.png';
import git from '/git.png';
import mysql from '/mysql.png';
import figma from '/figma.webp';
import { useState } from 'react';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='bg-gray-200'>

        <div className='container mx-auto p-4'>
          <div className='grid grid-cols-[2fr_2fr_1fr] justify-between items-center py-4'>
            <div className='flex flex-row justify-start items-center'>
              <div className='w-10'>
                <img
                  src={letra}
                  alt="Daniel Iuga"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <p className='text-3xl font-bold ml-5'>Daniel.</p>
            </div>
            <nav className='space-x-8 font-semibold'>
              <a href="#skills" className="text-gray-800">Skills</a>
              <a href="#projects" className="text-gray-800">Projects</a>
              <a href="#about" className="text-gray-800">About</a>
              <a href="#contact" className="text-gray-800">Contact</a>
            </nav>
            <div className='flex justify-end items-center mr-5'>
              <a
                href='mailto:daniel04.iuga@gmail.com'
                className="border px-4 py-2 border-black font-semibold bg-white"
              >
                Let’s talk
              </a>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-[1fr_1fr] justify-center items-center'>
          <div className='flex justify-center mt-4'>
            <div className='max-w-lg'>
              <p className='text-5xl font-bold'>Hi, I'm Daniel Iuga</p>
              <p className="text-4xl font-semibold mt-4">
                A FRONTEND <span className="text-blue-600">*</span> DEVELOPER BASED IN BARCELONA.
              </p>
              <p className="text-lg mt-6">
                FRONTEND <span className="text-blue-600">*</span> DEVELOPMENT{" "}
                <span className="text-blue-600">*</span> UI/UX DESIGN
              </p>
              <div className="mt-8 space-x-4">
                <button className="bg-black text-white px-6 py-2">
                  <a href="/CV Dani Iuga.pdf" download className="text-white">Download CV</a>
                </button>
                <button
                  className="border px-4 py-2 border-black font-semibold bg-white"
                  onClick={() => setShowModal(true)}
                >
                  Message Me
                </button>
                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg">
                      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                      <form action="https://formspree.io/f/mldryvvl" method="POST">
                        <div className="mb-4">
                          <label className="block">Email</label>
                          <input type="email" name="email" placeholder='daniel04.iuga@gmail.com' className="w-full p-2 border" required />
                        </div>
                        <div className="mb-4">
                          <label className="block">Message</label>
                          <textarea name="message" className="w-full p-2 border resize-none" rows={5} required></textarea>
                        </div>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="mr-4 px-4 py-2 border border-black"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                          <button type="submit" className="bg-black text-white px-6 py-2">Send</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className='w-1/2'>
              <img
                src={photo}
                alt="Daniel Iuga"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 bg-black text-white py-4">
          <ul className="flex justify-between space-x-4 text-center mx-2">
            <li>HTML/CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>API INTEGRATION</li>
            <li>RESPONSIVE DESIGN</li>
            <li>GIT/GITHUB</li>
            <li>TESTING</li>
          </ul>
        </div>

        <section id='skills' className="flex flex-col text-center mt-8">
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='w-10'>
              <img
                src={letra}
                alt="Daniel Iuga"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold">Skills</h1>
            <p className="text-lg text-gray-600 mt-2 font-semibold">Technologies & Tools</p>
          </div>

          <div className='grid grid-cols-3 gap-8 mt-10 mx-auto'>

            <SkillItem
              imgSrc={html}
              title='HTML5'
              description='Semantic structure and responsive layouts for modern web development.'
            />
            <SkillItem
              imgSrc={css}
              title='CSS3'
              description='Designing responsive and dynamic user interfaces with Flexbox and Grid.'
            />

            <SkillItem
              imgSrc={javascript}
              title='JavaScript'
              description='Core programming language to bring interactivity and logic to web applications.'
            />

            <SkillItem
              imgSrc={react}
              title='React'
              description='A powerful JavaScript library for building dynamic and scalable user interfaces with a component-based architecture.'
            />

            <SkillItem
              imgSrc={npm}
              title='NPM'
              description='The world largest software registry that allows for efficient package management and project dependencies.'
            />

            <SkillItem
              imgSrc={vite}
              title='Vite'
              description='A next-generation front-end tool for faster builds and modern development, optimized for fast loading times.'
            />

            <SkillItem
              imgSrc={git}
              title='Git'
              description='A distributed version control system for tracking changes in source code and collaborating on projects efficiently.'
            />

            <SkillItem
              imgSrc={mysql}
              title='MySQL'
              description='A widely used open-source relational database management system for structured data storage and powerful querying.'
            />

            <SkillItem
              imgSrc={figma}
              title='Figma'
              description='A cloud-based design tool for creating collaborative and responsive UI/UX prototypes and interfaces.'
            />

          </div>
        </section>

        <section id='projects' className="flex flex-col text-center mt-8">
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='w-10'>
              <img
                src={letra}
                alt="Daniel Iuga"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold">Projects</h1>
            <p className="text-lg text-gray-600 mt-2 font-semibold">Practical Applications & Learning</p>
          </div>
          <div className='flex flex-col'>

            <Project
              image={data_Format}
              title="Data Format Converter"
              description="A web tool built to convert data formats such as JSON, CSV, and XML, enhancing user experience through a clean UI and fast conversions."
              link="https://data-format-converter.vercel.app/"
            />

            <div className='grid grid-cols-[1fr_1fr] justify-center items-center mt-10'>
              <div className='flex flex-col justify-start items-end mr-10'>
                <div className='bg-blue-500 text-white font-semibold py-2 w-40'>PROJECT</div>
                <p className='py-2 mt-2 text-2xl font-bold'>Financial Calculator</p>
                <p className='py-2 flex text-right'>A calculator that helps users compute financial metrics such as loan amortization, interest rates, and payments, created using React and hooks.</p>
                <a
                  href="https://financial-calculator-rho.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='border mt-2 px-4 py-2 border-black font-semibold bg-white text-blue-600'
                >
                  See More
                </a>
              </div>
              <div className='flex justify-start'>
                <div className='w-2/3 ml-5'>
                  <img
                    src={interes}
                    alt="Daniel Iuga"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <Project
              image={amortizacion}
              title="Loan Amortization Tool"
              description="An application that generates detailed loan amortization schedules, ideal for users looking to better understand their repayment plans."
              link="https://financial-calculator-rho.vercel.app/"
            />

          </div>
        </section>

        <section id='about' className="flex flex-col text-center mt-8">
          <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='w-10'>
              <img
                src={letra}
                alt="Daniel Iuga"
                className="rounded-lg shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold">ABOUT ME</h1>
          </div>
          <div className='flex flex-col'>
            <div className='grid grid-cols-[2fr_3fr]'>
              <div className='flex flex-col justify-center items-center ml-52'>
                <p className="text-2xl font-semibold">
                  DANIEL <span className="text-blue-600 text-2xl">*</span> IUGA
                </p>
                <div className='max-w-sm mt-2'>
                  <p className='text-5xl font-bold'>
                    Junior Frontend Developer
                  </p>
                </div>
                <div className='w-1/2 py-4'>
                  <img
                    src={photo2}
                    alt="Daniel Iuga"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <div className='flex flex-col px-36 py-20'>
                <p className='text-2xl font-bold'>Aspiring to create impactful web applications through clean code, responsive design, and a user-centric approach.</p>
                <p className='pt-6'>I specialize in front-end development using HTML, CSS, and JavaScript, with a growing proficiency in React and modern web technologies. I'm always excited to collaborate on meaningful projects, applying my skills to real-world problems.</p>
                <div className='grid grid-cols-[1fr_1fr_1fr] pt-6'>
                  <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                      <p className='text-blue-500 font-semibold'>BORN IN</p>
                      <p className='font-bold text-xl'>BARCELONA</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                      <p className='text-blue-500 font-semibold'>EXPERIENCE</p>
                      <p className='font-bold text-xl'>1+ Years</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <div className='flex flex-col gap-2 justify-start items-start'>
                      <p className='text-blue-500 font-semibold'>DATE OF BIRTH</p>
                      <p className='font-bold text-xl'>17 November 2004</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center items-center mb-16'>
              <div className='flex flex-col justify-center items-center border border-black px-20 py-8 gap-2 w-72'>
                <p className='text-4xl font-bold'>1+</p>
                <p className='text-xs font-semibold'>YEARS OF EXPERIENCE</p>
              </div>
              <div className='flex flex-col justify-center items-center bg-black text-white border border-black px-20 py-8 gap-2 w-72'>
                <p className='text-4xl font-bold'>20+</p>
                <p className='text-xs font-semibold'>PERSONAL PROJECTS</p>
              </div>
              <div className='flex flex-col justify-center items-center border border-black px-20 py-8 gap-2 w-72'>
                <p className='text-4xl font-bold'>4+</p>
                <p className='text-xs font-semibold'>LANGUAGES</p>
              </div>
            </div>
          </div>
        </section>

        <footer id='contact' className="bg-black text-white py-12 mt-16">
          <div className="container mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <ul className="space-y-2">
                <li>Email: <a href="mailto:daniel04.iuga@gmail.com" className="text-blue-400 hover:text-blue-300">daniel04.iuga@gmail.com</a></li>
                <li>Phone: <a href="tel:+34612345678" className="text-blue-400 hover:text-blue-300">+34 610 590 901</a></li>
                <li>Location: Barcelona, Spain</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li><a href="#skills" className="text-blue-400 hover:text-blue-300">Skills</a></li>
                <li><a href="#about" className="text-blue-400 hover:text-blue-300">About</a></li>
                <li><a href="#projects" className="text-blue-400 hover:text-blue-300">Projects</a></li>
                <li><a href="#contact" className="text-blue-400 hover:text-blue-300">Contact</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
              <div className='flex justify-center'>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.linkedin.com/in/danieliuga/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                      <div className='flex gap-2'>
                        <FaLinkedin size={24} /> LinkedIn
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/danieliuga" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                      <div className='flex gap-2'>
                        <FaGithub size={24} /> GitHub
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/danieliuga" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center">
                      <div className='flex gap-2'>
                        <FaTwitter size={24} /> Twitter
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Línea divisoria */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} Daniel Iuga. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
