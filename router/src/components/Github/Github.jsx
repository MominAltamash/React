// import React, { useEffect, useState } from 'react'

import { useLoaderData } from "react-router-dom"

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/MominAltamash')
    //     .then((res) => res.json())
    //     .then((data) => setData(data))
    // }, [])

  return (
    <div className='bg-slate-600 p-4 text-3xl text-white'>
        Github Follwers : {data.followers}
        <img src={data.avatar_url} alt="github image" width={200} />
    </div>
  )
}


const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/MominAltamash')
    return response.json()
}

export default Github;
export { githubInfo };