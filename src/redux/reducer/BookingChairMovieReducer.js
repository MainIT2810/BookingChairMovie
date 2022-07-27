const stateDefault = {
    danhSachGheDangDat: [],
};

const BookingChairMovieReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case "": {
            return {...state};
        }
        default:
            return {...state};
    }
}

export default BookingChairMovieReducer;