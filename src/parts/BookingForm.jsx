import React, { Component } from "react";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state, //spread the state
      data: {
        ...this.state.data, //
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidMount(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      //when previous data.state doesnt equals with state.date
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1) //why min 1? cuz its count per night not full day
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <div
        className="card bordered"
        style={{ padding: "60px 80px" }}
      >
        <div className="mb-3">Start Booking</div>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-500 fw-light">per {itemDetails.unit}</span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
