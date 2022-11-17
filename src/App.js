import React from "react";
import "./styles.css";
import "animate.css";

const styles = {
  flexRow: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row"
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  topContainer: {
    height: 40,
    width: 400,
    backgroundColor: "#7394bf",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  },
  topInnerContainer: {
    height: 25,
    width: 385,
    backgroundColor: "#F0E68C",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    border: "2px solid black",
    display: "flex",
    alignItems: "center"
  },
  body: {
    height: 150,
    width: 400,
    backgroundColor: "#20B2AA",
    padding: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    display: "flex",
    borderColor: "black",
    justifyContent: "space-around",
    alignItems: "space-between",
    border: "2px solid black",
    borderTopWidth: 0
  },
  speakerBig: {
    height: 100,
    width: 100,
    backgroundColor: "#F0E68C",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  },
  speakerRing: {
    height: 60,
    width: 60,
    backgroundColor: "#DCDCDC",
    borderRadius: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  },
  speakerSmall: {
    height: 50,
    width: 50,
    backgroundColor: "#7394bf",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid black"
  },
  smallBtn: {
    height: 5,
    width: 5,
    backgroundColor: "gray",
    border: "2px solid black",
    borderRadius: 5
  },
  line: {
    width: 280,
    border: "1px solid black",
    marginLeft: 10
  },
  mirror: {
    height: 20,
    width: 60,
    backgroundColor: "#DCDCDC",
    border: "2px solid black",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden"
  },
  smallBtnWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteScrewLeft: {
    position: "absolute",
    top: -70,
    left: -10,
    width: 20,
    height: 20,
    borderRadius: 20,
    border: "2px solid black",
    backgroundColor: "white",
    fontSize: 25,
    lineHeight: 0.7
  },
  whiteScrewRight: {
    position: "absolute",
    top: -70,
    right: -115,
    width: 20,
    height: 20,
    borderRadius: 20,
    border: "2px solid black",
    backgroundColor: "white",
    fontSize: 25,
    lineHeight: 0.7
  },
  midScrewWrapper: {
    height: 60,
    width: 80,
    backgroundColor: "#F0E68C",
    marginBottom: 10,
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  midStripsContainer: {
    height: 30,
    width: 80,
    backgroundColor: "#F0E68C",
    border: "2px solid black",
    display: "flex",
    flexDirection: "row"
  },
  midScrewContainer: {
    height: 20,
    width: 60,
    backgroundColor: "#DCDCDC",
    border: "2px solid black",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  smallScrew: {
    height: 9,
    width: 9,
    backgroundColor: "black",
    borderRadius: 9,
    color: "white",
    fontSize: 9,
    lineHeight: 0.9,
    textAlign: "center"
  },
  whiteStrip: {
    marginTop: 0,
    marginLeft: 10,
    width: 7,
    height: 30,
    backgroundColor: "white"
  },
  slideBtnsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10
  },
  slideBtn: {
    height: 3,
    width: 6,
    backgroundColor: "#DCDCDC",
    border: "2px solid black",
    borderRadius: 3
  },
  slideBtnLine: {
    height: 10,
    width: 2,
    backgroundColor: "black",
    marginLeft: 4
  },
  handleLeft: {
    height: 40,
    width: 10,
    backgroundColor: "#20B2AA",
    border: "2px solid black",
    borderBottomWidth: 0,
    borderTopLeftRadius: 10
  },
  handleRod: {
    height: 10,
    width: 370,
    backgroundColor: "#F0E68C",
    border: "2px solid black",
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  handleRight: {
    height: 40,
    width: 10,
    backgroundColor: "#20B2AA",
    border: "2px solid black",
    borderBottomWidth: 0,
    borderTopRightRadius: 10
  },
  shine1: {
    height: 6,
    width: 54,
    backgroundColor: "white",
    transform: "rotate(45deg)",
    opacity: 0.8
  },
  shine2: {
    height: 6,
    width: 40,
    backgroundColor: "white",
    transform: "rotate(45deg)",
    opacity: 0.8
  },
  musicNotes: {
    display: "block",
    float: "left",
    fontSize: "2em",
    color: "#000"
  }
};

export default function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={styles.handleLeft} />
        <div style={styles.handleRod} />
        <div style={styles.handleRight} />
      </div>
      <div style={styles.topContainer}>
        <div style={styles.topInnerContainer}>
          <div style={styles.mirror}>
            <div style={styles.shine1} />
            <div style={styles.shine2} />
          </div>
          <div style={{ paddingLeft: 10 }}>
            <div style={styles.smallBtnWrapper}>
              <div style={styles.smallBtn} />
              <hr style={styles.line} />
            </div>
            <div style={styles.smallBtnWrapper}>
              <div style={styles.smallBtn} />
              <hr style={styles.line} />
            </div>
          </div>
        </div>
      </div>

      <div style={styles.body}>
        <div style={styles.flexCenter}>
          <div
            style={{
              position: "relative"
            }}
          >
            <div style={styles.whiteScrewLeft}>+</div>
          </div>
          <div style={styles.speakerBig}>
            <div
              className="animate__animated animate__heartBeat animate__fast animate__infinite"
              style={styles.speakerRing}
            >
              <div style={styles.speakerSmall} />
            </div>
          </div>
        </div>
        <div>
          <div style={styles.midScrewWrapper}>
            <div style={styles.midScrewContainer}>
              <div style={styles.smallScrew}>+</div>
              <div style={styles.smallScrew}>+</div>
            </div>
          </div>
          <div style={styles.midStripsContainer}>
            <div style={styles.whiteStrip} />
            <div style={styles.whiteStrip} />
            <div style={styles.whiteStrip} />
            <div style={styles.whiteStrip} />
          </div>
          <div>
            <div style={styles.slideBtnsContainer}>
              <div>
                <div style={styles.slideBtn} />
                <div style={styles.slideBtnLine} />
              </div>
              <div style={{ marginLeft: 5 }}>
                <div style={styles.slideBtn} />
                <div style={styles.slideBtnLine} />
              </div>
              <div style={{ marginLeft: 5 }}>
                <div style={styles.slideBtnLine} />
                <div style={styles.slideBtn} />
              </div>
              <div style={{ marginLeft: 5 }}>
                <div style={styles.slideBtn} />
                <div style={styles.slideBtnLine} />
              </div>
              <div style={{ marginLeft: 5 }}>
                <div style={styles.slideBtnLine} />
                <div style={styles.slideBtn} />
              </div>
            </div>
          </div>
        </div>
        <div style={styles.flexCenter}>
          <div
            style={{
              position: "relative"
            }}
          >
            <div style={styles.whiteScrewRight}>+</div>
          </div>
          <div style={styles.speakerBig}>
            <div
              className="animate__animated animate__heartBeat animate__fast animate__infinite"
              style={styles.speakerRing}
            >
              <div style={styles.speakerSmall} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
