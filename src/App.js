import React, { Component } from "react";
import "./App.css";
import { thingsILove } from "./data";
import AudioPlayer from "react-responsive-audio-player";
// import seedRandom from "seed-random";
import "../node_modules/react-responsive-audio-player/dist/audioplayer.css";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couplePictures: 78,
      petPictures: 31,
      quoteCount: thingsILove.length
    };
  }

  componentDidMount() {
    setInterval(() => this.setState(), 60 * 1000 * 60 * 4);
  }

  render() {
    // const date = new Date();
    // seedRandom(date.getDate() + date.getDay() + date.getFullYear(), {
    //   global: true
    // });

    const coupleNumber = Math.floor(
      Math.random() * Math.floor(this.state.couplePictures)
    );
    const petNumber = Math.floor(
      Math.random() * Math.floor(this.state.petPictures)
    );
    const quoteNumber = Math.floor(
      Math.random() * Math.floor(this.state.quoteCount)
    );
    return (
      <div className="App">
        <h1>
          {" "}
          &#x1f48a; Daily Love Dose: {moment().format(
            "MMM Do, YYYY"
          )} &#x1f48a;{" "}
        </h1>
        <div className="body">
          <div className="leftSection">
            <h3>&#x1F48F;</h3>
            <img
              src={`https://s3.us-east-2.amazonaws.com/karolinaandmario/couplepics/${coupleNumber}.jpg`}
              alt="Couple"
            />
            <h2>Thing I &#x1F49C; About You </h2>
            <blockquote>{thingsILove[quoteNumber]}</blockquote>
          </div>
          <div className="rightSection">
            <h3>&#x1F431; &#x1F436; &#x1F431; </h3>
            <img
              src={`https://s3.us-east-2.amazonaws.com/karolinaandmario/petpics/${petNumber}.jpg`}
              alt="Pets"
            />
            <div>
              <AudioPlayer
                playlist={[
                  {
                    url:
                      "https://s3.us-east-2.amazonaws.com/karolinaandmario/songs/Where+We+Are.mp3",
                    title: "I love you always"
                  }
                ]}
                controls={["playpause", "progress"]}
                style={{
                  width: "350px",
                  fontSize: "0.8em",
                  marginTop: "25px",
                  background: "linear-gradient(300deg, #f8905f, #e14aff)",
                  marginBottom: "25px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
