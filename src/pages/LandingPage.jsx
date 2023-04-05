import React, { Component, useEffect, useState } from "react";
import Header from "parts/Header";

import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

// redux
import { connect } from "react-redux";
import { fetchPage } from "store/actions/page";

function LandingPage(props) {
  const [refMostPicked, setRefMostPicked] = useState(React.createRef());

  const { page } = props;

  useEffect(() => {
    // logic axios
    if (!page.landingPage) props.fetchPage(`/landing-page`, "landingPage");
  });

  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }, []);

  if (!page.hasOwnProperty("landingPage")) return null;

  return (
    <>
      <Header {...props}></Header>
      <Hero
        refMostPicked={refMostPicked}
        data={page.landingPage.hero}
      />
      <MostPicked
        refMostPicked={refMostPicked}
        data={page.landingPage.mostPicked}
      />
      <Categories data={page.landingPage.category} />
      <Testimoni data={page.landingPage.testimonial}></Testimoni>
      <Footer />
    </>
  );
}

// func for storing redux data
const mapStateToProps = (state) => ({
  page: state.page,
});

// old syntax
<>
  {/* export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero
          refMostPicked={this.refMostPicked}
          data={landingPage.hero}
        />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial}></Testimoni>
        <Footer />
      </>
    );
  }
} */}
</>;

export default connect(mapStateToProps, { fetchPage })(LandingPage);
