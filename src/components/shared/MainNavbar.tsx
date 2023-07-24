
const MainNavbar = () => {
  return (
    <div className="bg-white text-neutral-500 rounded">
    <div className="mx-80 px-3.5">
      <div className="items-center flex float-right pl-8 z-[9]">
        <div className="items-center flex">
          <a className="items-center bg-orange-400 text-white cursor-pointer flex text-sm font-medium justify-center ml-5 py-3 px-5 text-center capitalize align-middle z-[1] border border-orange-400 border-solid rounded-md overflow-hidden" href="https://bookland.dexignzone.com/react/demo/contact-us">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="items-center flex flex-grow justify-start">
        <ul className="flex flex-wrap float-right">
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/index-2">
              <span className="inline-block">Home</span>
            </a>
          </li>
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/about-us">
              <span className="inline-block">About Us</span>
            </a>
          </li>
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/index-2">
              <span className="inline-block">Pages</span>
            </a>
          </li>
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/index-2">
              <span className="inline-block">Shop</span>
            </a>
          </li>
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/index-2">
              <span className="inline-block">Blog</span>
            </a>
          </li>
          <li className="list-item">
            <a className="text-violet-950 cursor-pointer inline-block text-[0.94rem] leading-5 font-semibold py-8 px-3.5 capitalize" href="https://bookland.dexignzone.com/react/demo/contact-us">
              <span className="inline-block">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default MainNavbar