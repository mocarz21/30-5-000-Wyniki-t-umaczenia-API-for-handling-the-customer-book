import { useSelector } from "react-redux";
import { useState } from "react";



const FreeSeats = () => {

    const allSeats = useSelector((store)=>store.seats)
    
    //const count = allSeats.filtr(seat =>seat.id !== 0);


    //const freSeats = 50 - allSeats.length + 1;
    console.log('seats     ',allSeats)
    return(
        <div>
            <h4>Seats{}/50</h4>
        </div>
    )
}
export default FreeSeats;