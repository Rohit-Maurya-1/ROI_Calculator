import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.js';
import HideShow from "./HideShow";
import { FcButtingIn } from "react-icons/fc";
import { Switch } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <div
        className="main"
        style={{
          width: "800px",
          border: "1px solid black",
          margin: "auto",
          textAligne: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-11">
              <h1>ROI Calculator</h1>
            </div>
            <div className="col-1" style={{ fontSize: "34px" }}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div className="row">
            <div className="col-9"></div>
            <div
              className="col-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="logo1">
                <FcButtingIn />
              </div>
              <h5>CAKE</h5>
              <div className="logo2">
                <Switch />
              </div>
              <h5>USD</h5>
            </div>
          </div>

          <input
            type="text"
            style={{ borderRadius: "20px" }}
            value="0.000 USD"
            id="inputPassword5"
            className="form-control bg-light"
            aria-describedby="passwordHelpBlock"
          />

          <div className="row mt-2">
            <div className="col-10 ">
              <button
                type="button"
                className="btn-r btn-light m-2"
                style={{ fontWeight: "bold" }}
              >
                $1000
              </button>
              <button
                type="button"
                className="btn-r btn-light"
                style={{ fontWeight: "bold" }}
              >
                $100
              </button>
            </div>

            <div className="col-2">
              <h6>~CAKE 0.000</h6>
            </div>
          </div>

          <p className="tag">Timeframe</p>

          <div className="row mt-3">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                type="button"
                className="btn-r btn-light  "
                style={{ backgroundColor: "#F9EC85", fontWeight: "bold" }}
              >
                1 Day
              </button>
              <button type="button" className="btn-r btn-light">
                7 Days
              </button>
              <button type="button" className="btn-r btn-light">
                30 Days
              </button>
              <button type="button" className="btn-r btn-light">
                1 Year
              </button>
              <button type="button" className="btn-r btn-light">
                5 Year
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-9">Enable Accelerated APY</div>
            <div className="col-3" style={{ marginLeft: "730px" }}>
              <Switch style={{color:"#F9EC85"}}/>
            </div>
          </div>
          <div className="text mt-2">
            <p>Select Tier</p>
          </div>
          {/* //samecode */}
          <div className="row mt-3">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button
                type="button"
                className="btn-r btn-light  "
                style={{ backgroundColor: "#F9EC85", fontWeight: "bold" }}
              >
                Tier 1
              </button>
              <button type="button" className="btn-r btn-light">
                Tier 2
              </button>
              <button type="button" className="btn-r btn-light">
                Tier 3
              </button>
              <button type="button" className="btn-r btn-light">
                Tier 4
              </button>
              <button type="button" className="btn-r btn-light">
                Tier 5
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-9"></div>
            <div className="col-3" style={{ marginLeft: "650px" }}>
              <p>ROI at Current Rates</p>
            </div>
          </div>

          <input
            type="text"
            style={{ borderRadius: "20px" }}
            value="0.00 USD"
            id="inputPassword5"
            className="form-control bg-light"
            aria-describedby="passwordHelpBlock"
          />

          <div className="row">
            <div className="col-8"></div>
            <div className="col-4" style={{ marginLeft: "590px" }}>
              <p> ~0.000 CAKE + 0.000000 DON </p>
            </div>
          </div>

          <div className="row text-center">
            
              <button className="btn-p btn-dark col-5">Apply</button>
               <div className="col-2"></div>
            
              <button className="btn-p btn-light col-5">Cancel</button>
            
          </div>

          {/* //hind show button */}
          <HideShow/>
        </div>
      </div>
    </>
  );
}

export default App;
