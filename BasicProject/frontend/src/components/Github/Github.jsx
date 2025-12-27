import { useEffect, useState } from "react";

function GitHub(){

    const [data , setData] = useState({})

    useEffect(()=>{
        fetch('https://api.github.com/users/dhruvaggarwal1234')
        .then(response => response.json())
        .then(data  => {
            console.log(data);
            setData(data);
        })
    } ,[])

    return(

        <div className="flex justify-center"> Github Follower : {data.followers} </div>
    )
}

export default GitHub;