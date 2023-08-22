function Chart() {
  return (
    <>
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
                    <canvas id="barChart_1"></canvas>
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
      </div>
    </>
  );
}
export default Chart;
