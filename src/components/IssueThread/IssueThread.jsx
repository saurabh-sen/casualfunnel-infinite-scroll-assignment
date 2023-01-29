import React from 'react'

const IssueThread = ({ data }) => { 

  return (
    <div className='Issues bg-white border-y border-gray-300 py-2 px-4'>
      <div className="top__div flex justify-between">
        <div className="top__left flex gap-2 sm:w-2/3 ">
          <span className="left__icon mt-1">
            <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </span>
          <p className="left__text flex gap-1  font-semibold items-center flex-wrap">
            <span className="left__text__title text-base">{data.title}</span>

            {
              data?.labels?.map((item, i) => {
                if (item?.name?.slice(0, 6) == "Status") {
                  return <span key={i} className="left__text__type bg-[#d4c5f9] rounded-2xl px-2 text-sm">{item.name}</span>
                } else if (item?.name?.slice(0, 9) == "Component") {
                  return <span key={i} className="left__text__components bg-yellow-400 px-2 rounded-2xl text-sm">{item.name}</span>
                } else if (item?.name?.slice(0, 4) == "Type") {
                  return <span key={i} className="left__text__type bg-red-500 rounded-2xl px-2 text-sm">{item.name}</span>
                } else if (item?.name?.slice(0, 10) == "Resolution") {
                  return <span key={i} className="left__text__resolutions bg-yellow-200 rounded-2xl px-2 text-sm">{item.name}</span>
                } else return null;
              })
            }

          </p>
        </div>

        {data.comments != 0 && <div className="top__right hidden sm:flex gap-2 items-center">
          <span className="right__icon">
            <svg xmlns="http://www.w3.org/2000/svg" color='rgb(148,150,152)' fill='rgb(148,150,152)' aria-hidden="true" height="14" width="14" viewBox="0 0 512 512">
              <path d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 9.836 11.02 15.55 19.12 9.7l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM464 352c0 8.75-7.25 16-16 16h-160l-80 60v-60H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h384c8.75 0 16 7.25 16 16V352z" /></svg>
          </span>
          <span className="right__text text-sm">{data.comments}</span>
        </div>}

      </div>
      <div className="down__div text-sm text-[#57606a]">
        <p className="text flex gap-1 ml-5">
          <span className="id">#{data.number}</span>
          <span className="text">opened</span>
          <span className="formated__time">{data.created_at?.slice(0, 10)}</span>
          <span className="text">by</span>
          <span className="user">{data.user.login}</span>
        </p>
      </div>
    </div>
  )
}

export default IssueThread