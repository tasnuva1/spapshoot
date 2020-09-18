import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import MainHead from "./MainHead";
import "../sass/main.scss";
import gsap from "gsap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [], loader: false, loadImages: [] };

    this.imageRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 100 },
    });

    this.setState({ images: response.data.results });
    // console.log(response);
  };

  onPhoto = async (term) => {
    const response = await unsplash.get("/photos", {
      params: { per_page: 30 },
    });
    this.setState({ loadImages: response.data.map((arr) => arr.urls.thumb) });

    console.log(this.state.loadImages.length);
    // console.log(response);
  };

  // animation
  componentDidMount() {
    this.onPhoto();

    const tl = gsap.timeline();
    tl.to(".loading-2", 2.4, {
      width: "100%",
      ease: "Expo.easeInOut",
      onComplete: () => {
        this.setState({ loader: true });
      },
    })
      .to(".p", {
        yPercent: -80,
        opacity: 0,
      })
      .to(".preloader", {
        height: "0vh",
        ease: "slow(0.7, 0.7, false)",
      })
      .from(".nav", {
        xPercent: -20,
        opacity: 0,
        ease: "Power3.out",
      })
      .from(".hero__heading, .hero__rates", {
        yPercent: 20,
        opacity: 0,
        ease: "Power3.out",
      })
      .from(".converter", {
        yPercent: 10,
        opacity: 0,
        ease: "Power3.out",
      });
  }

  render() {
    return (
      <>
        <div
          className="loading-box"
          style={this.state.loader ? { opacity: "0" } : { opacity: "1" }}
        ></div>

        <MainHead />
        <div className="container">
          <div className="hero">
            <div className="hero__heading">
              <h1 className="heading-1">
                Raba Live
                <br /> Exchange Rates
              </h1>
              <p className="date">23rd September 2020</p>
            </div>
            <div className="hero__rates">
              {/* // ani */}
              <div className="table-wrapper">
                {this.state.loadImages.map((image) => {
                  return (
                    <table>
                      <tr>
                        <th>
                          <img src={image} alt="Don't-gonna-do-extra-styff" />
                        </th>
                      </tr>
                    </table>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- coverter --> */}
        <div className="container">
          <div className="converter">
            <div className="converter__box">
              <h2 className="heading-2">
                currency
                <br />
                converter
              </h2>
              <p className="paragraph">
                Choose the currency and the amounts to get the exchange rate
              </p>
            </div>
            <div className="converter__box converter__box2">
              <div className="ui container" style={{ marginTop: "30px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
              </div>
            </div>
            <div className="converter__box converter__box3">
              <span>&copy;</span> Copyright 2020
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
