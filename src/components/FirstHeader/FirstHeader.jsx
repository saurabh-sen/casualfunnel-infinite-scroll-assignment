import React from 'react'

const FirstHeader = () => {
    return (
        <div className='FirstHeader py-4 px-8 flex justify-between items-center bg-[#f6f8fa]'>
            {/* left heading */}
            <div className="firstHeader__left flex items-center gap-2">
                <span className="left__icon">
                    <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="">
                        <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                </span>
                <p className="left__text flex text-lg gap-1">
                    <span className="text text-blue-500">facebook </span>
                    <span className="text ">/</span>
                    <span className="text text-blue-500 font-semibold"> react</span>
                </p>
                <p className='border-[1px] border-gray-300 rounded-lg text-xs font-semibold px-1 text-[#5775ab]'>Public</p>
            </div>
            {/* right heading */}
            <div className="firstHeader__right hidden md:flex gap-2 text-sm font-semibold text-[#515255] ">
                <div className="right__notifications flex gap-2 border rounded-md border-gray-300 py-1 px-2 items-center">
                    <span className="notifications__icon">
                        <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z" /></svg>
                    </span>
                    <span className="notifications__text">Notifications</span>
                </div>
                <div className="right__star flex px-2 items-center">
                    <p className='flex items-center gap-2 py-1 px-2 border rounded-md border-gray-300 border-r-0 rounded-r-none'>
                        <span className="star__icon">
                            <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" /></svg>
                        </span>
                        <span className="notifications__text">Star</span>
                    </p>
                    <p className='border rounded-md rounded-l-none border-gray-300 py-1 px-2 bg-white'>
                        <span className="star__count px-3">175k</span>
                    </p>
                </div>
                <div className="right__fork  flex px-2 items-center">
                    <p className='flex items-center gap-2 py-1 px-2 border rounded-md border-gray-300 border-r-0 rounded-r-none'>
                        <span className="star__icon">
                            <svg color='#57606a' fill='#57606a' aria-hidden="true" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M80 104c13.3 0 24-10.7 24-24s-10.7-24-24-24S56 66.7 56 80s10.7 24 24 24zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zM248 432c0-13.3-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24s24-10.7 24-24z"/>
                                </svg>
                        </span>
                        <span className="notifications__text">Fork</span>
                    </p>
                    <p className='border rounded-md rounded-l-none border-gray-300 py-1 px-2 bg-white'>
                        <span className="star__count px-3">35.3k</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FirstHeader