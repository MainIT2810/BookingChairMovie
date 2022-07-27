import React, { Component } from "react";

export default class InfoChairBooking extends Component {
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

            <tbody className="text-warning"></tbody>

            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Tổng tiền</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
