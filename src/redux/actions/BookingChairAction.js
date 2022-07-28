import {BOOKING_CHAIR} from "../types/BookingChairType";
const BookingChairAction = (chair) => {
    return({
        type: BOOKING_CHAIR,
        chair
    });
}

export default BookingChairAction;