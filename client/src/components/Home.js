import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Home = (props) => {
    const [responseData,setResponseData] = useState(null);

    useEffect(() => {
        axios.get('https://api.adviceslip.com/daily_adviceslip.rss')
        .then(response => {setResponseData(response.data)}, [])
        .catch((err) =>console.log(err))
    })

    return (

        <div>
            {responseData}
        </div>
    )
}

export default Home