import React from 'react'

const Image = ({src}) => {

  const handleGithubLogin = () => {
    window.location.href =
        "http://backend.test/api/auth/github/redirect";
  };

  return (
    <div onClick={handleGithubLogin} className="rounded-[50%] p-[7px] shadow-[0px_1px_4px_rgba(0,_0,_0,_0.16)]"> 
         <img src={src} className='w-[20px]'></img>
    </div>
    
  )
}

export default Image