import React, { Component } from "react";
import { connect } from "react-redux";
import CancelBookingChairAction from "../redux/actions/CancelBookingChairAction";
class InfoChairBooking extends Component {
  renderInfoChair = () => {
    return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <tr key={index}>
          <td>{gheDangDat.soGhe}</td>
          <td>{gheDangDat.gia.toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.cancelChair(gheDangDat.soGhe);
              }}
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="mt-5">
          <div>
            <button className="gheDuocChon mx-1"></button>
            <span className="text-light fs-3">Ghế đã đặt</span>
          </div>

          <div>
            <button className="gheDangChon mx-1"></button>
            <span className="text-light fs-3">Ghế đang đặt</span>
          </div>

          <div>
            <button className="ghe mx-1"></button>
            <span className="text-light fs-3">Ghế chưa đặt</span>
          </div>
        </div>

        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light fs-2">
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>

            <tbody className="text-warning">{this.renderInfoChair()}</tbody>

            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, chair, index) => {
                      return (tongTien += chair.gia);
                    },
                    0
                  ).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingChairMovieReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cancelChair: (soGhe) => {
      dispatch(CancelBookingChairAction(soGhe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoChairBooking);
