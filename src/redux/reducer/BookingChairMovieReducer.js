import { BOOKING_CHAIR } from "../types/BookingChairType";
import { CANCEL_CHAIR } from "../types/CancelChairType";
const stateDefault = {
  danhSachGheDangDat: [],
};

const BookingChairMovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case BOOKING_CHAIR: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.chair.soGhe
      );

      if (index !== -1) {
        // Khi người dùng click ghế đang đặt đã có trong mảng => remove đi
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        // Khi người dùng click ghế đang đặt chưa có trong mảng => thêm vào
        danhSachGheDangDatUpdate.push(action.chair);
      }
      // Cập nhật lại state => giao diện render lại
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }

    case CANCEL_CHAIR: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default BookingChairMovieReducer;
