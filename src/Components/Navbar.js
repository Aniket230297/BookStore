import React from "react";

const Navbar=()=>{

    return(
        <div>
            <nav style={{width:"100vw", height:"40px", display:"flex"}}>
                <div><h5>BrandName</h5></div>
                
                <div style={{display:"flex" , marginLeft:"400px"}}>
                <input type="search" placeholder="Search Book"/>
                <button>Search</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;