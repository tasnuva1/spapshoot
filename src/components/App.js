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

    this.state = { images: [], loader: false };

    this.imageRef = React.createRef();
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    console.log(response);
  };

  ///////////////////////////////////////////

  // animation
  componentDidMount() {
    const tl = gsap.timeline();
    tl.to(".loading-2", 4, {
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
        <div class="hero__rates ani">
          <div className="table-wrapper">
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">AED</td>
                <td>ExampleAED</td>
              </tr>
              <tr>
                <td class="code">ARS</td>
                <td>ExampleARS</td>
              </tr>
              <tr>
                <td class="code">AUD</td>
                <td>ExampleAUD</td>
              </tr>
              <tr>
                <td class="code">BGN</td>
                <td>ExampleBGN</td>
              </tr>
              <tr>
                <td class="code">BRL</td>
                <td>ExampleBRL</td>
              </tr>
              <tr>
                <td class="code">BSD</td>
                <td>ExampleBSD</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">CAD</td>
                <td>ExampleCAD</td>
              </tr>
              <tr>
                <td class="code">CHF</td>
                <td>ExampleCHF</td>
              </tr>
              <tr>
                <td class="code">CLP</td>
                <td>ExampleCLP</td>
              </tr>
              <tr>
                <td class="code">CNY</td>
                <td>ExampleCNY</td>
              </tr>
              <tr>
                <td class="code">COP</td>
                <td>ExampleCOP</td>
              </tr>
              <tr>
                <td class="code">CZK</td>
                <td>ExampleCZK</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">DKK</td>
                <td>ExampleDKK</td>
              </tr>
              <tr>
                <td class="code">DOP</td>
                <td>ExampleDOP</td>
              </tr>
              <tr>
                <td class="code">EGP</td>
                <td>ExampleEGP</td>
              </tr>
              <tr>
                <td class="code">EUR</td>
                <td>ExampleEUR</td>
              </tr>
              <tr>
                <td class="code">FJD</td>
                <td>ExampleFJD</td>
              </tr>
              <tr>
                <td class="code">GBP</td>
                <td>ExampleGBP</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">GTQ</td>
                <td>ExampleGTQ</td>
              </tr>
              <tr>
                <td class="code">HKD</td>
                <td>ExampleHKD</td>
              </tr>
              <tr>
                <td class="code">HRK</td>
                <td>ExampleHRK</td>
              </tr>
              <tr>
                <td class="code">HUF</td>
                <td>ExampleHUF</td>
              </tr>
              <tr>
                <td class="code">IDR</td>
                <td>ExampleIDR</td>
              </tr>
              <tr>
                <td class="code">ILS</td>
                <td>ExampleILS</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">INR</td>
                <td>ExampleINR</td>
              </tr>
              <tr>
                <td class="code">ISK</td>
                <td>ExampleISK</td>
              </tr>
              <tr>
                <td class="code">JPY</td>
                <td>ExampleJPY</td>
              </tr>
              <tr>
                <td class="code">KRW</td>
                <td>ExampleKRW</td>
              </tr>
              <tr>
                <td class="code">KZT</td>
                <td>ExampleKZT</td>
              </tr>
              <tr>
                <td class="code">MXN</td>
                <td>ExampleMXN</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">MYR</td>
                <td>ExampleMYR</td>
              </tr>
              <tr>
                <td class="code">NOK</td>
                <td>ExampleNOK</td>
              </tr>
              <tr>
                <td class="code">NZD</td>
                <td>ExampleNZD</td>
              </tr>
              <tr>
                <td class="code">PAB</td>
                <td>ExamplePAB</td>
              </tr>
              <tr>
                <td class="code">PEN</td>
                <td>ExamplePEN</td>
              </tr>
              <tr>
                <td class="code">PHP</td>
                <td>ExamplePHP</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">PKR</td>
                <td>ExamplePKR</td>
              </tr>
              <tr>
                <td class="code">PLN</td>
                <td>ExamplePLN</td>
              </tr>
              <tr>
                <td class="code">PYG</td>
                <td>ExamplePYG</td>
              </tr>
              <tr>
                <td class="code">RON</td>
                <td>ExampleRON</td>
              </tr>
              <tr>
                <td class="code">RUB</td>
                <td>ExampleRUB</td>
              </tr>
              <tr>
                <td class="code">SAR</td>
                <td>ExampleSAR</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">SEK</td>
                <td>ExampleSEK</td>
              </tr>
              <tr>
                <td class="code">SGD</td>
                <td>ExampleSGD</td>
              </tr>
              <tr>
                <td class="code">THB</td>
                <td>ExampleTHB</td>
              </tr>
              <tr>
                <td class="code">TRY</td>
                <td>ExampleTRY</td>
              </tr>
              <tr>
                <td class="code">TWD</td>
                <td>ExampleTWD</td>
              </tr>
              <tr>
                <td class="code">UAH</td>
                <td>ExampleUAH</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>currency code</th>
                <th>currency Rate</th>
              </tr>
              <tr>
                <td class="code">UYU</td>
                <td>ExampleUYU</td>
              </tr>
              <tr>
                <td class="code">ZAR</td>
                <td>ExampleZAR</td>
              </tr>
            </table>
          </div>
        </div>
        <MainHead />
        <div className="ui container" style={{ marginTop: "30px" }}>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}

export default App;
