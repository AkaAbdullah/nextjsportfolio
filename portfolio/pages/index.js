import Head from 'next/head'
import Image from 'next/image'
import abdu from '../public/dev-ed-wave.png'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import javascript from '../public/javascript.png'
import html from '../public/react.png'
import nodejs from '../public/nodejs.png'
import python from '../public/pythonpng.png'
import mongodb from '../public/mongodb.png'
import mui from '../public/mui.png'
import p1 from '../public/1.PNG'
import p2 from '../public/6.PNG'
import p4 from '../public/4.PNG'
import p5 from '../public/5.PNG'
import p7 from '../public/7.PNG'
import p8 from '../public/8.PNG'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Abdullah Hussain Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 '>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl dark:text-white '>
              Abdullah Hussain Portfolio
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className='cursor-pointer text-xl dark:text-white'
                />
              </li>
              <li>
                <a
                  download='Resume'
                  href='../public/Resume.pdf'
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-white'>
              ABDULLAH HUSSAIN
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white '>
              MERN STACK Developer
            </h3>
            <p className='dark:text-white text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>
              Results-oriented information technology professional with year of
              experience in software development, software engineering, project
              management, technical product management and web development field
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 dark:text-white  text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto md:h-96 md:w-96 overflow-hidden bg-gradient-to-b from text-teal-500 rounded-full w-80 h-80 mt-20'>
            <Image alt='testimage' src={abdu} layout='fill' objectFit='cover' />
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
              Following are some of my Skills
            </p>
          </div>
          <div className='lg:flex flex-auto gap-10'>
            <div className='text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image
                alt='testimage'
                src={javascript}
                width={100}
                height={100}
              />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>
                JavaScript
              </h3>
            </div>
            <div className='text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image alt='testimage' src={html} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>
                React JS
              </h3>
            </div>
            <div className='text-center dark:text-white shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image alt='testimage' src={nodejs} width={140} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>
                Node Js
              </h3>
            </div>
            <div className='text-center dark:text-white shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image alt='testimage' src={python} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Python</h3>
            </div>
            <div className='text-center dark:text-white shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image alt='testimage' src={mongodb} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Mongo DB</h3>
            </div>
            <div className='text-center dark:text-white shadow-lg p-10 rounded-xl my-10 dark:bg-gray-500'>
              <Image alt='testimage' src={mui} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>MUI</h3>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white '>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-600 dark:text-white'>
              Following are some of my Projects
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1  text-center  dark:bg-gray-500 shadow-lg p-10 rounded-xl my-10 '>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p5}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  MERN Stack Game Desert Studios
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/gameDesertReact'
                >
                  Project URL
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 text-center dark:bg-gray-500  shadow-lg p-10 rounded-xl my-10'>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p4}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  MERN Stack Ecommerce-Application Pakretails.com
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/pakretailsmernstack'
                >
                  Project URL
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1  text-center dark:bg-gray-500 shadow-lg p-10 rounded-xl my-10 '>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p7}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  React js Outdone.io
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/outdone5'
                >
                  Project URL
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1  text-center dark:bg-gray-500  shadow-lg p-10 rounded-xl my-10 '>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p8}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  Laraverl Teltik.com
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/react-queryapi-testing'
                >
                  Project URL
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 text-center  dark:bg-gray-500 shadow-lg p-10 rounded-xl my-10'>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p1}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  Python Facial Recognition Attendance System GUI
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/QRcodeattendancesystem'
                >
                  Project URL
                </a>
              </div>
            </div>
            <div className='basis-1/3 flex-1 text-center dark:bg-gray-500 shadow-lg p-10 rounded-xl my-10'>
              <Image
                alt='testimage'
                className='rounded-lg obejct-cover'
                width={'100%'}
                height={'60%'}
                layout='responsive'
                src={p2}
              />
              <div className='text-center'>
                <h2 className='text-2xl text-center mt-5 dark:text-white'>
                  NEXT js Fab Glass and Miror Printing Report
                </h2>
                <a
                  className='text-blue-700 pt-5 '
                  href='https://github.com/AkaAbdullah/fabglasscustomcut'
                >
                  Project URL
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
