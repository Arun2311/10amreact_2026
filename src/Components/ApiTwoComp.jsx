import React, { useEffect, useState } from 'react'

export default function ApiTwoComp() {


    const [apidata, setapidata] = useState([])



    const handlefetch = async () => {
        let res = await fetch("")
        let data = await res.json()
        console.log("luffy");
        
        setapidata(data)
    }




    return (
        <div>



            {/* <button onClick={handlefetch}>Call Api</button> */}

{apidata.map((da,i)=>(
    <div>

        <h1>{da.name}</h1>


        </div>
))}



        </div>
    )
}
