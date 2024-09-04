import React from 'react'
 

function Header() {
  return (
    < >
    <nav className="h-20 flex items-center justify-between px-12 py-12 border-b  border-b[rgba(1,1,1,.1)]">
        <div>
          <h1 className="font-bold text-4xl">Clear<span className="text-navy_blue ">Face</span></h1>
        </div> 
        <ul className="flex items-center justify-between gap-10 [$>*]:text-navy_blue font-bold mr-28">
            <li>Home</li>
             
            <li>About</li>
            
        </ul>
        <div className="flex items-center gap-10">
             
        </div>
      </nav> </>
  )
}

export default Header