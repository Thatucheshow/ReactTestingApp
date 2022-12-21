import { useEffect, useState } from 'react';

const Test = () =>{
    const [activity, setActivity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const loadTest = ()=>{
        setIsLoading(true)
        fetch("https://www.boredapi.com/api/activity")
        .then((res)=>res.json())
        .then((data) => {
        setActivity(data.activity)
        setIsLoading(false)
        });
    }

    useEffect(() => {
        loadTest()
    }, [])

    if(isLoading){
        return (
            <div>
                <p>page loading...</p>
            </div>
        )
    }
    
    return(
        <div>
            <h1>{activity}</h1>
            <button onClick={loadTest}>Load More</button>
        </div>
    )
}

export default Test