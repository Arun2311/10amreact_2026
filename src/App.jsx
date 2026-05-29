import React, { useMemo, useState,useCallback } from "react";
import "./App.css"
import Ticketbook from "./Components/TicketBook"
import ApiCallOne from "./Components/ApiCallOne";
import ApiTwoComp from "./Components/ApiTwoComp";
import ExampleTwo from "./Components/ExampleTwo";
import Form from "./Components/Form";
import About from "./Components/About";
import Product from "./Components/Product";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import MovieBook from "./Components/MovieBook";

function App() {

  const [islog, setislog] = useState(true)

    const [names, setnames] = useState("")


  const handlelog = () => {
    setislog(false)
  }


  const handlemultiply = useCallback((no1 ,no2) =>{
    let  a = no1 * no2
    return a
  },[])


  return (

    <BrowserRouter>
      <div>
        <h1>Today -{names}</h1>
        {/* <Ticketbook/> */}

        {/* <ApiCallOne/> */}

        {/* {islog ?  : null} */}


        {/* <button onClick={handlelog}>Logout</button> */}

        {/* <ApiTwoComp/> */}

        {/* <ExampleTwo/> */}
        {/* <Ticketbook/> 
<ApiCallOne />
      <Form/> */}


        {/* <Link to="/" >Home</Link>

        <Link to="/product" >Product</Link>

        <Link  to="/contact" >About</Link> */}



        {/* <Routes>


          <Route path="/" element={<Home />} />

          <Route path="/product" element={<Product />} />

          <Route path="/contact" element={<About />} />

        </Routes> */}

        {/* <MovieBook name="karuppu" rating="5" setnames={setnames} /> */}
                {/* <MovieBook name="mankatha" rating="8" setnames={setnames}  /> */}

<Product />
<h2>Arunachalam</h2>
      </div>
    </BrowserRouter>
  )
}

export default React.memo(App)