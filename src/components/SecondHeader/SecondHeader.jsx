import React from 'react'

const SecondHeader = () => {
  return (
    <div className='secondHeader pt-4 px-8 flex items-center bg-[#f6f8fa] gap-5 text-sm md:overflow-hidden overflow-scroll border-b border-gray-300'>
      <div className="secondHeader__container flex gap-2 items-center pb-4">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" /></svg>
        </span>
        <span className="container__text">Code</span>
        <span className="container__count"></span>
      </div>

      <div className="secondHeader__container flex gap-2 items-center pb-4 font-semibold border-b-2 border-red-300">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
          </svg>
        </span>
        <span className="container__text">Issues</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs">660</span>
      </div>

      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M305.8 2.1C314.4 5.9 320 14.5 320 24V64h16c70.7 0 128 57.3 128 128V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V192c0-35.3-28.7-64-64-64H320v40c0 9.5-5.6 18.1-14.2 21.9s-18.8 2.3-25.8-4.1l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c7-6.3 17.2-7.9 25.8-4.1zM104 80c0-13.3-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24s24-10.7 24-24zm8 73.3V358.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80c0 32.8-19.7 61-48 73.3zM104 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24zm328 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z" />
          </svg>
        </span>
        <span className="container__text">Pull</span>
        <span className="container__text">requests</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs">208</span>
      </div>

      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
          </svg>
        </span>
        <span className="container__text">Actions</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs"></span>
      </div>


      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
          </svg>
        </span>
        <span className="container__text">Projects</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs"></span>
      </div>



      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
          </svg>
        </span>
        <span className="container__text">Wiki</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs"></span>
      </div>


      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
          </svg>
        </span>
        <span className="container__text">Security</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs"></span>
      </div>


      <div className="secondHeader__container flex gap-2 items-center pb-4 ">
        <span className="container__icon">
          <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
          </svg>
        </span>
        <span className="container__text">Insights</span>
        <span className="container__count bg-[#e8ebef] px-2 rounded-lg text-xs"></span>
      </div>

    </div>
  )
}

export default SecondHeader