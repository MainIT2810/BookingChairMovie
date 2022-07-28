import React, { Component } from "react";
import "./assets/CSS/bookingChairMovie.css";
import InfoChairBooking from "./InfoChairBooking";
import ChairList from "../data/ChairList.json";
import Chair from "./Chair";
export default class Home extends Component {
  
  renderRowChair = () => {
    return ChairList.map((chair, index) => {
      return (
        <div key={index}>
          <Chair rowChair={chair} listRowChair={index} />
        </div>
      );
    });
  };
  
  render() {
    return (
      <div className="app">
        <div className="overlay"></div>
        <div className="bookingMovie">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM</div>
                <div className="mt-2 text-light fs-3">Màn Hình</div>
                <div className="mt-2 d-flex justify-content-center flex-column ">
                  <div className="screen"></div>
                  {this.renderRowChair()}
                </div>
              
              </div>

              <div className="col-4">
                <div className="text-light mt-2 fs-2">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <InfoChairBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
