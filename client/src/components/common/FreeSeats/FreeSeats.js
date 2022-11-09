import { useSelector } from "react-redux";



const FreeSeats = () => {

    const seats = useSelector((state)=>state.seats)
    const freSeats = 50 - seats.lenght + 1;

    return(
        <div>
            <h4>Seats{}/50</h4>
        </div>
    )
}
export default FreeSeats;