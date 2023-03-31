import React, { Component, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

export default function BookingForm(props) {
  const { itemDetails, startBooking } = props;
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  });

  const prevDate = useRef({});
  const prevDuration = useRef(0);

  const updateData = (e) => {
    prevDuration.current = data.duration;
    prevDate.current = data.date;

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (prevDate.current !== data.date) {
      //when previous data.state doesnt equals with state.date
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      setData({
        data: {
          ...data,
          duration: countDuration,
        },
      });
    }
    if (prevDuration.current !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1) //why min 1? cuz its count per night not full day
      );
      setData({
        ...data,
        date: {
          ...data.date,
          endDate: endDate,
        },
      });
    }
  }, [prevDate.current, prevDuration.current]);

  // func for storing payload
  const startBookingFunction = () => {
    startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
  };

  return (
    <div
      className="card bordered"
      style={{ padding: "60px 80px" }}
    >
      <div className="mb-3">Start Booking</div>
      <h5 className="h2 text-teal mb-4">
        <span style={{ color: "#1ABC9C" }}>${itemDetails.price}</span>{" "}
        <span className="text-gray-500 fw-light">per {itemDetails.unit}</span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        onChange={updateData}
        name="duration"
        value={data.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate
        onChange={updateData}
        name="date"
        value={data.date}
      />
      <h6
        className="text-gray-500 fw-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900 fw-bold">
          ${itemDetails.price * data.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900 fw-bold">
          {data.duration}{" "}
          {data.duration > 1 ? `${itemDetails.unit}s` : `${itemDetails.unit}`}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
}

// old code
<>
  {/* export default class BookingForm extends Component {
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
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      //when previous data.state doesnt equals with state.date
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      console.log(data.date);
      console.log(prevState.data.date);
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

  // func for storing payload
  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
  };

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
          <span style={{ color: "#1ABC9C" }}>${itemDetails.price}</span>{" "}
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

        <label htmlFor="date">Pick a date</label>
        <InputDate
          onChange={this.updateData}
          name="date"
          value={data.date}
        />
        <h6
          className="text-gray-500 fw-light"
          style={{ marginBottom: 40 }}
        >
          You will pay{" "}
          <span className="text-gray-900 fw-bold">
            ${itemDetails.price * data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900 fw-bold">
            {data.duration}{" "}
            {data.duration > 1 ? `${itemDetails.unit}s` : `${itemDetails.unit}`}
          </span>
        </h6>

        <Button
          className="btn"
          hasShadow
          isPrimary
          isBlock
          onClick={this.startBooking}
        >
          Continue to Book
        </Button>
      </div>
    );
  }
} */}
</>;

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
