import React from 'react'
import Issues from '../Issues/Issues'

const IssuesContainer = () => {
  return (
    <div className='IssuesContainer sm:16 md:mx-32 my-8 border border-gray-300 rounded-md break-all'>
      <div className="issuesContainer__header bg-[#f6f8fa] px-4 py-3 flex justify-between flex-wrap gap-5 ">
        <div className="header__left flex gap-4 text-sm">
          <div className="left__text flex gap-2 items-center font-semibold">
            <span className="text__icon">
              <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
              </svg>
            </span>
            <span className="text__count">625</span>
            <span className="text__text">Open</span>
          </div>

          <div className="left__text flex gap-2 text-[#57606a] items-center">
            <span className="text__icon">
              <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
              </svg>
            </span>
            <span className="text__count">10,104</span>
            <span className="text__text">Closed</span>
          </div>
        </div>
        <div className="header__right text-[#57606a] flex gap-5 text-sm flex-wrap">
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Author</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>
          
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Label</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Projects</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Milestones</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Assignee</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>
          <div className="right__text__container flex gap-1 items-center">
            <span className="right__text">Sort</span>
            <span className="right__text__icon">
              <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="16" width="16" viewBox="0 0 320 512">
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                </svg>
            </span>
          </div>

        </div>
      </div>
      <Issues />
    </div>
  )
}

export default IssuesContainer