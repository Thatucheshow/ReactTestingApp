const Test = () =>{
    const loadTest = ()=>{
        fetch("http://boredapi.com/api/activity")
        .then((res)=>res.json())
        .then((data) => console.log(data));
    }
    
    return(
        <h1>App</h1>
    )
}

export default Test