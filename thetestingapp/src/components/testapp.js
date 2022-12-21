import { useEffect, useState } from 'react';

const Test = () =>{
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const loadTest = ()=>{
        setIsLoading(true)
        fetch("https://www.boredapi.com/api/activity")
        .then((res)=>res.json())
        .then((data) => {
        setActivities([...activities, data.activity])
        setIsLoading(false)
        });
    }

    useEffect(() => {
        loadTest()
    }, [])

    if(activities.length === 0){
        return (
            <div>
                <p>page loading...</p>
            </div>
        )
    }
    
    return(
        <div>
            <ul>
                {activities.map((activity, index) => {
                    return <li key={index}>{activity}</li>
                })}
            </ul>
            <button disabled={isLoading} onClick={loadTest}>Load More</button>
        </div>
    )
}

export default Test