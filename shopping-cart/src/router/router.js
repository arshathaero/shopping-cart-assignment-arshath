import React from "react"
import { Route, Routes,} from 'react-router-dom';


import Home from 'pages/home/home'

const Router = () =>{
    return (
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
     )
}


export default Router