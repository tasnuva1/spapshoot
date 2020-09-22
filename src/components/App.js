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

    this.state = {
      images: [],
      loader: false,
      loadImages: [],
      dayOfMonth: null,
      curMonth: null,
      curYear: null,
    };

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
      params: { per_page: 100 }, // num
    });
    this.setState({ loadImages: response.data.map((arr) => arr.urls.thumb) });

    console.log(this.state.loadImages.length);
    // console.log(response);
  };

  // animation
  componentDidMount() {
    this.tick();
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

  ////////////////

  tick = () => {
    let objToday = new Date();
    let domEnder = new Array(
      "th",
      "st",
      "nd",
      "rd",
      "th",
      "th",
      "th",
      "th",
      "th",
      "th"
    );
    this.setState({
      dayOfMonth:
        objToday.getDate() < 10
          ? "0" + objToday.getDate() + domEnder[objToday.getDate()]
          : objToday.getDate() +
            domEnder[
              parseFloat(
                ("" + objToday.getDate()).substr(
                  ("" + objToday.getDate()).length - 1
                )
              )
            ],
    });
    let months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    );
    this.setState({ curMonth: months[objToday.getMonth()] });
    this.setState({ curYear: objToday.getFullYear() });
  };

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
                Spapshoot Live
                <br /> Photography
              </h1>
              {/* <p className="date">23rd September 2020</p> */}
              <p className="date">{`${this.state.dayOfMonth} ${this.state.curMonth} ${this.state.curYear}`}</p>
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
                Images
                <br />
                Search Tool
              </h2>
              <p className="paragraph">
                {/* Choose the currency and the amounts to get the exchange rate */}
                Search any images from the internet’s source of freely-usable
                images.
              </p>
            </div>
            <div className="converter__box converter__box2">
              <div className="ui container" style={{ marginTop: "30px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
              </div>
            </div>
            <div className="converter__box converter__box3">
              <span>&copy;</span> Copyright {`${this.state.curYear}`}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
