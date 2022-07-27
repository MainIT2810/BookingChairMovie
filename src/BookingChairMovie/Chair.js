import React, { Component } from "react";

export default class Chair extends Component {
  renderChair = () => {
    return this.props.rowChair.danhSachGhe.map((chair, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      // Trạng thái ghế đã bị người khác đặt
      if (chair.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      return (
        <button
        key={index}
        className={`ghe ${cssGheDaDat}`}
        disabled={disabled}
        >
          {chair.soGhe}
        </button>
      );
    });
  };

  renderNumberRow = () => {
    return this.props.rowChair.danhSachGhe.map((row, index) => {
      return (
        <button className="rowNumber" key={index}>
          {row.soghe}
        </button>
      );
    });
  };

  renderRowChair = () => {
    if (this.props.listRowChair.soHangGhe === 0) {
      return (
        <div className="ms-5">
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


