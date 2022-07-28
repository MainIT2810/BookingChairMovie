import React, { Component } from "react";
import { connect } from "react-redux";
import BookingChairAction from "../redux/actions/BookingChairAction";
class Chair extends Component {
  renderChair = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      // Trạng thái ghế đã bị người khác đặt 
      if (chair.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      // Xét trạng thái ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === chair.soGhe);

      if(indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          key={index}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          disabled={disabled}
          onClick={()=>{this.props.bookingChair(chair)}}
        >
          {chair.soGhe}
        </button>
      );
    });
  };

  renderNumberRow = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      return (
        <div key={index} className="rowNumber ps-4">
          {chair.soGhe}
        </div>
      );
    });
  };

  renderRowChair = () => {
    if (this.props.listRowChair === 0) {
      return (
        <div>
          {this.props.rowChair.hang}
          {this.renderNumberRow()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.rowChair.hang}
          {this.renderChair()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="text-light text-start ms-3 mt-1 fs-2">
        {this.renderRowChair()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BookingChairMovieReducer.danhSachGheDangDat,
  };
};

const mapDispatchToProps = dispatch => {
  return({
    bookingChair: (chair)=> {
      dispatch(BookingChairAction(chair));
    }
  });
}
export default connect(mapStateToProps, mapDispatchToProps)(Chair);
