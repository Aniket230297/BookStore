import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BookDetails=()=>{
    const [books , setBooks]=useState([])

    useEffect(()=>{
        const getAllBooks=async()=>{
          try{
             const response1= await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
             const response2=await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes");

             const api1= response1.data.items || [];
             const api2 = response2.data.items || [];
             console.log(api1);

             const combinedBooks = [...api1, ...api2];
                setBooks(combinedBooks);
                console.log(combinedBooks);
          }
          catch(error){
            console.log("error")
          }
        }
        getAllBooks();
       

        
    },[])

    

    return(
        <div>
            
        </div>
    )
    }

export default BookDetails;