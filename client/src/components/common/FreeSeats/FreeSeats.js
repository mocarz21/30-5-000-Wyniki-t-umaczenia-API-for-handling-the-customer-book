import { useSelector } from "react-redux";

const FreeSeats = ({chosenDay}) => {

    const allSeats = useSelector((store)=>store.seats.data)
    const daySeats = allSeats.filter(seat=>seat.day ===chosenDay)
    
    const freSeats = 50 - daySeats.length;
    return(
        <div>
            <h4>Free Seats {freSeats} / 50</h4>
        </div>
    )
}
export default FreeSeats;