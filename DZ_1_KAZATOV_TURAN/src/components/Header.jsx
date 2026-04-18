import { useState } from 'react'

 function Header() {
 
const headerFn = ()=> {
  console.log("Header");
  
}
// for commit 
  return (
    <div className='container'>
      <div className='header'>
        <h1>Welcome</h1>
        <button 
          className='btn'
          onClick={headerFn()}
        >Нажать</button>

      </div>

    </div>
  )
}

export default Header