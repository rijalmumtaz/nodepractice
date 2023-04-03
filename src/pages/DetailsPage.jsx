import React, { Component, useEffect } from "react";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import ItemDetails from "json/itemDetails.json";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

// redux
import { connect } from "react-redux"; // function connects a React component to a Redux store.
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

function DetailsPage(props) {
  const { page } = props;
  // init params for
  let { id } = useParams();

  useEffect(() => {
    if (!page[id]) {
      props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${id}`,
        id
      );
    }
  }, []);

  useEffect(() => {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  console.log(page[id]);

  if (!page[id]) return null;

  return (
    <>
      <Header {...props} />
      <PageDetailTitle
        breadcrumb={breadcrumbList}
        data={page[id]}
      />
      <FeaturedImage data={page[id].imageId} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                itemDetails={page[id]}
                startBooking={props.checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Activities data={page[id].activityId} />
      <Testimoni data={page[id].testimonial} />
      <Footer />
    </>
  );
}

// old syntax
<>
  {/* class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcrumb={breadcrumbList}
          data={ItemDetails}
        />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimoni data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(DetailsPage); */}
</>;

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
