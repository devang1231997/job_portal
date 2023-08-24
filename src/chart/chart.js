function Chart() {
  return (
    <>
      <div className="content-body ">
        <div className="container-fluid">
          <div className="page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="javascript:void(0)">Charts</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0)">ChartJS</a>
              </li>
            </ol>
          </div>
          {/* <!-- row --> */}

          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Bar Chart</h4>
                    </div>
                    <div className="card-body">
                        <div id="flotBar1" className="flot-chart" style={{padding: "0px", position: "relative"}}>
                        <canvas class="flot-base" width="538" height="251" style={{ direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "538px", height: "251.188px" }}></canvas>
                      <div className="flot-text" style={{ position: "absolute", inset: "0px", fontSize: "smaller", color: "rgb(84, 84, 84)" }}>
                        <div class="flot-x-axis flot-x1-axis xAxis x1Axis" style={{ position: "absolute", inset: "0px" }}>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "21px", textAlign: "center" }}>0</div>
                          <div style={{ position: "absolute", maxwidth: "59px", top: "238px", font: "400 10px / 12px poppins, sansserif", color: "rgb(255, 255, 255)", left: "89px", textAlign: "center" }}>2</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "156px", textAlign: "center" }}>4</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "223px", textAlign: "center" }}>6</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "291px", textAlign: "center" }}>8</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "357px", textAlign: "center" }}>10</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "424px", textAlign: "center" }}>12</div>
                          <div style={{ position: "absolute", maxWidth: "59px", top: "238px", font: "400 10px / 12px poppins, sans-serif", color: "rgb(255, 255, 255)", left: "492px", textAlign: "center" }}>14</div>
                        </div>
                        <div class="flot-y-axis flot-y1-axis yAxis y1Axis" style={{position: "absolute", inset: "0px"}}>
                          <div style={{position: "absolute", top: "227px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "4px", textAlign: "right"}}>0.0</div>
                          <div style={{position: "absolute", top: "190px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "5px", textAlign: "right"}}>2.5</div>
                          <div style={{position: "absolute", top: "152px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "4px", textAlign: "right"}}>5.0</div>
                          <div style={{position: "absolute", top: "115px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "5px", textAlign: "right"}}>7.5</div>
                          <div style={{position: "absolute", top: "77px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "1px", textAlign: "right"}}>10.0</div>
                          <div style={{position: "absolute", top: "40px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "2px", textAlign: "right"}}>12.5</div>
                          <div style={{position: "absolute", top: "2px", font: "400 10px / 12px poppins, sansSerif", color: "rgb(255, 255, 255)", left: "1px", textAlign: "right"}}>15.0</div>
                        </div>
                      </div>
                      <canvas class="flot-overlay" width="538" height="251" style={{direction: "ltr", position: "absolute", left: "0px", top: "0px", width: "538px", height: "251.188px"}}></canvas>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Gradient Bar Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="barChart_2"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Stalked Bar Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="barChart_3"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Line Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="lineChart_1"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Gradient Line Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="lineChart_2"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Dual Line Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="lineChart_3"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic Area Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="areaChart_1"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Gradinet Area Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="areaChart_2"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-12 col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Dual Area Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="areaChart_3"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Radar Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="radar_chart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Pie Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="pie_chart"></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Doughnut Chart</h4>
                    </div>
                    <div className="card-body">
                      <div className="chart-point">
                        <div className="check-point-area">
                          <canvas id="doughnut_chart"></canvas>
                        </div>
                        <ul className="chart-point-list">
                          <li>
                            <i className="fa fa-circle text-primary me-1"></i> 40%
                            Tickets
                          </li>
                          <li>
                            <i className="fa fa-circle text-success me-1"></i> 35%
                            Events
                          </li>
                          <li>
                            <i className="fa fa-circle text-warning me-1"></i> 25%
                            Other
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Polar Chart</h4>
                    </div>
                    <div className="card-body">
                      <canvas id="polar_chart"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}
export default Chart;
