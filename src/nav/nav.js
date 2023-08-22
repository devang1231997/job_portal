import { Link } from 'react-router-dom';


function Nav() {
    return (
        <>
            <div className="nav-header">
                <a href="index.js" className="brand-logo">
                    <svg className="logo-abbr" width="66.5px" height="66.5px">
                        <g>
                            <path className="svg-logo-circle" fill-rule="evenodd" fill="rgb(64, 24, 157)"
                                d="M32.999,66.000 C14.774,66.000 -0.000,51.225 -0.000,33.000 C-0.000,14.775 14.774,-0.000 32.999,-0.000 C51.225,-0.000 66.000,14.775 66.000,33.000 C66.000,51.225 51.225,66.000 32.999,66.000 Z" />
                        </g>
                        <g>
                            <path className="svg-logo-icon-text" fill-rule="evenodd" stroke="rgb(255, 255, 255)"
                                stroke-width="1px" stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(255, 255, 255)"
                                d="M58.273,11.788 L53.346,35.007 C52.729,37.824 51.661,40.116 50.142,41.883 C48.623,43.602 46.868,44.939 44.874,45.894 C42.928,46.849 40.840,47.470 38.609,47.757 C36.379,48.091 34.243,48.258 32.202,48.258 C29.829,48.258 27.788,48.091 26.080,47.757 C24.371,47.470 22.852,47.040 21.523,46.467 C20.242,45.894 19.079,45.202 18.035,44.390 C16.991,43.530 15.947,42.599 14.902,41.597 L17.181,30.780 L30.565,30.780 C30.565,30.924 30.493,31.282 30.351,31.855 C30.256,32.380 30.138,33.025 29.995,33.789 C29.853,34.553 29.710,35.389 29.568,36.296 C29.473,37.203 29.426,38.039 29.426,38.803 C29.426,39.281 29.473,39.782 29.568,40.307 C29.663,40.832 29.829,41.334 30.066,41.811 C30.304,42.241 30.636,42.623 31.063,42.958 C31.538,43.244 32.107,43.387 32.771,43.387 C34.006,43.387 34.979,42.886 35.690,41.883 C36.450,40.832 37.114,38.946 37.683,36.224 L44.858,2.204 C50.110,4.228 54.714,7.552 58.273,11.788 Z" />
                        </g>
                    </svg>
                    {/* <svg className="brand-title" width="101.5px" height="29.5px">
                        <path className="svg-logo-text-path" fill-rule="evenodd" stroke="rgb(0, 0, 0)" stroke-width="1px"
                            stroke-linecap="butt" stroke-linejoin="miter" fill="rgb(64, 24, 157)"
                            d="M99.505,17.384 C99.302,18.169 98.998,18.840 98.593,19.398 L87.915,19.398 C87.813,19.955 87.737,20.487 87.687,20.994 C87.661,21.501 87.649,21.957 87.649,22.362 C87.649,22.590 87.661,22.843 87.687,23.122 C87.712,23.401 87.763,23.667 87.839,23.920 C87.940,24.148 88.067,24.351 88.219,24.528 C88.396,24.680 88.637,24.756 88.941,24.756 C89.169,24.756 89.422,24.680 89.701,24.528 C90.005,24.376 90.296,24.161 90.575,23.882 C90.879,23.603 91.158,23.261 91.411,22.856 C91.690,22.451 91.905,21.995 92.057,21.488 L98.289,21.488 L97.301,25.554 C96.794,25.883 96.211,26.162 95.553,26.390 C94.894,26.618 94.197,26.808 93.463,26.960 C92.728,27.087 91.981,27.175 91.221,27.226 C90.461,27.302 89.739,27.340 89.055,27.340 C87.788,27.340 86.610,27.226 85.521,26.998 C84.432,26.770 83.482,26.377 82.670,25.820 C81.860,25.263 81.214,24.528 80.733,23.616 C80.277,22.679 80.049,21.526 80.049,20.158 C80.049,18.917 80.239,17.701 80.619,16.510 C81.024,15.319 81.683,14.268 82.595,13.356 C83.532,12.419 84.773,11.671 86.319,11.114 C87.890,10.557 89.840,10.278 92.171,10.278 C94.704,10.278 96.604,10.671 97.871,11.456 C99.163,12.241 99.809,13.470 99.809,15.142 C99.809,15.826 99.708,16.573 99.505,17.384 ZM92.589,13.280 C92.335,13.001 92.032,12.862 91.677,12.862 C91.271,12.862 90.892,13.001 90.537,13.280 C90.208,13.533 89.904,13.888 89.625,14.344 C89.346,14.775 89.093,15.281 88.865,15.864 C88.637,16.421 88.447,17.017 88.295,17.650 L92.627,17.650 C92.678,17.346 92.728,17.029 92.779,16.700 C92.830,16.421 92.868,16.117 92.893,15.788 C92.944,15.459 92.969,15.155 92.969,14.876 C92.969,14.090 92.842,13.559 92.589,13.280 ZM79.024,8.340 C78.644,8.644 78.201,8.872 77.694,9.024 C77.188,9.176 76.668,9.252 76.136,9.252 C75.123,9.252 74.274,9.011 73.590,8.530 C72.906,8.049 72.564,7.289 72.564,6.250 C72.564,5.693 72.678,5.199 72.906,4.768 C73.134,4.312 73.438,3.945 73.818,3.666 C74.224,3.362 74.679,3.134 75.186,2.982 C75.718,2.830 76.263,2.754 76.820,2.754 C77.808,2.754 78.644,2.995 79.328,3.476 C80.012,3.957 80.354,4.705 80.354,5.718 C80.354,6.301 80.227,6.807 79.974,7.238 C79.746,7.669 79.429,8.036 79.024,8.340 ZM75.832,27.036 L68.118,27.036 L71.576,10.696 L79.366,10.696 L75.832,27.036 ZM67.055,19.550 C66.878,20.411 66.625,21.311 66.295,22.248 C65.967,23.160 65.523,23.996 64.966,24.756 C64.433,25.516 63.750,26.137 62.914,26.618 C62.103,27.099 61.128,27.340 59.988,27.340 C59.304,27.340 58.632,27.264 57.974,27.112 C57.340,26.960 56.757,26.757 56.226,26.504 C55.719,26.251 55.263,25.959 54.857,25.630 C54.478,25.275 54.199,24.921 54.021,24.566 L53.755,24.566 L52.045,27.036 L45.890,27.036 L51.286,1.500 L59.076,1.500 L56.605,13.128 L56.871,13.128 C57.707,12.165 58.645,11.481 59.683,11.076 C60.747,10.645 61.799,10.430 62.838,10.430 C63.724,10.430 64.459,10.569 65.042,10.848 C65.650,11.101 66.131,11.456 66.485,11.912 C66.840,12.368 67.093,12.913 67.245,13.546 C67.397,14.179 67.473,14.851 67.473,15.560 C67.473,15.915 67.448,16.447 67.397,17.156 C67.347,17.865 67.233,18.663 67.055,19.550 ZM59.304,14.572 C59.152,14.243 58.860,14.078 58.429,14.078 C57.923,14.078 57.454,14.268 57.024,14.648 C56.592,15.003 56.276,15.307 56.074,15.560 L54.591,22.362 C54.769,22.666 54.997,22.957 55.276,23.236 C55.579,23.515 55.934,23.654 56.340,23.654 C56.948,23.654 57.454,23.337 57.859,22.704 C58.265,22.045 58.594,21.285 58.847,20.424 C59.101,19.537 59.279,18.663 59.379,17.802 C59.506,16.915 59.569,16.257 59.569,15.826 C59.569,15.319 59.481,14.901 59.304,14.572 ZM42.082,24.908 C40.156,26.529 37.370,27.340 33.722,27.340 C30.606,27.340 28.377,26.745 27.034,25.554 C25.590,24.312 24.868,22.451 24.868,19.968 C24.868,18.321 25.198,16.827 25.856,15.484 C26.540,14.141 27.515,13.027 28.782,12.140 C30.631,10.899 33.165,10.278 36.382,10.278 C39.397,10.278 41.588,10.810 42.956,11.874 C44.400,12.989 45.122,14.838 45.122,17.422 C45.122,19.018 44.856,20.462 44.324,21.754 C43.792,23.021 43.045,24.072 42.082,24.908 ZM37.180,13.432 C37.054,13.052 36.762,12.862 36.306,12.862 C35.622,12.862 35.027,13.229 34.520,13.964 C34.039,14.699 33.646,15.573 33.342,16.586 C33.038,17.599 32.810,18.638 32.658,19.702 C32.531,20.766 32.468,21.627 32.468,22.286 C32.468,23.933 32.912,24.756 33.798,24.756 C34.431,24.756 34.976,24.401 35.432,23.692 C35.914,22.983 36.293,22.121 36.572,21.108 C36.851,20.069 37.054,19.005 37.180,17.916 C37.332,16.801 37.408,15.839 37.408,15.028 C37.408,14.319 37.332,13.787 37.180,13.432 ZM20.309,23.996 C19.499,24.908 18.561,25.617 17.497,26.124 C16.459,26.631 15.344,26.960 14.154,27.112 C12.963,27.289 11.823,27.378 10.733,27.378 C9.467,27.378 8.378,27.289 7.466,27.112 C6.554,26.960 5.743,26.732 5.033,26.428 C4.350,26.124 3.729,25.757 3.171,25.326 C2.614,24.870 2.057,24.376 1.500,23.844 L2.716,18.106 L9.859,18.106 C9.859,18.182 9.821,18.372 9.745,18.676 C9.695,18.955 9.632,19.297 9.556,19.702 C9.480,20.107 9.404,20.551 9.328,21.032 C9.277,21.513 9.252,21.957 9.252,22.362 C9.252,22.615 9.277,22.881 9.328,23.160 C9.379,23.439 9.467,23.705 9.594,23.958 C9.720,24.186 9.897,24.389 10.126,24.566 C10.379,24.718 10.683,24.794 11.038,24.794 C11.696,24.794 12.216,24.528 12.595,23.996 C13.001,23.439 13.356,22.438 13.659,20.994 L17.497,2.906 L25.744,2.906 L22.020,20.348 C21.690,21.843 21.120,23.059 20.309,23.996 Z" />
                    </svg> */}
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span><span className="line"></span><span className="line"></span>
                    </div>
                </div>
            </div>
            <div class="header">
                <div class="header-content">
                    <nav class="navbar navbar-expand">
                        <div class="collapse navbar-collapse justify-content-between">
                            <div class="header-left">
                                <div class="dashboard_bar">
                                    Dashboard                    </div>
                            </div>

                            <ul class="navbar-nav header-right">
                                <li class="nav-item">
                                    <div class="input-group search-area d-xl-inline-flex d-none">
                                        <input type="text" class="form-control" placeholder="Search something here..."></input>
                                        <div class="input-group-append">
                                            <button class="input-group-text"><i class="flaticon-381-search-2"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link bell bell-link" href="#">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5678 26.5202C22.8079 26.5202 23.0447 26.6115 23.2249 26.7856C24.3769 27.8979 26.0572 28.2683 27.551 27.8047C26.5897 25.802 26.4564 23.5075 27.2014 21.383C28.126 18.7398 28.3577 16.0905 27.3055 13.4334C26.381 11.0992 24.5971 9.15994 22.3395 8.05408C22.4784 8.79455 22.5484 9.54903 22.5484 10.3115C22.5484 13.5478 21.304 16.5916 19.0444 18.8823C16.7846 21.1733 13.7553 22.4615 10.5147 22.5097C9.91267 22.5191 9.31331 22.4837 8.72073 22.4056C10.5017 25.5274 13.8606 27.5606 17.5516 27.6153C19.1663 27.6403 20.7166 27.302 22.1604 26.6125C22.2904 26.5503 22.4296 26.5202 22.5678 26.5202Z" fill="#3E4954" />
                                            <path d="M10.541 0.00236249C4.79223 -0.111786 0.0134501 4.53885 -0.000411333 10.2863C-0.00380737 11.6906 0.270302 13.052 0.814361 14.3331C0.822262 14.3517 0.829608 14.3706 0.836262 14.3897C1.58124 16.5142 1.4481 18.8086 0.486678 20.8114C1.98059 21.2748 3.66073 20.9046 4.81275 19.7922C5.09656 19.518 5.5212 19.449 5.8773 19.6192C7.3209 20.3087 8.87143 20.648 10.486 20.6221C16.1898 20.5374 20.6576 16.0085 20.6576 10.3117C20.6576 4.73921 16.1193 0.114501 10.541 0.00236249ZM4.81898 11.8517C3.99305 11.8517 3.32348 11.1832 3.32348 10.3587C3.32348 9.53414 3.99305 8.86568 4.81898 8.86568C5.64492 8.86568 6.31449 9.53414 6.31449 10.3587C6.31442 11.1832 5.64492 11.8517 4.81898 11.8517ZM10.3286 11.8517C9.50268 11.8517 8.8331 11.1832 8.8331 10.3587C8.8331 9.53414 9.50268 8.86568 10.3286 8.86568C11.1545 8.86568 11.8241 9.53414 11.8241 10.3587C11.8241 11.1832 11.1545 11.8517 10.3286 11.8517ZM15.8383 11.8517C15.0124 11.8517 14.3428 11.1832 14.3428 10.3587C14.3428 9.53414 15.0124 8.86568 15.8383 8.86568C16.6642 8.86568 17.3338 9.53414 17.3338 10.3587C17.3338 11.1832 16.6642 11.8517 15.8383 11.8517Z" fill="#3E4954" />
                                        </svg>
                                        <span class="badge light text-white bg-primary rounded-circle">18</span>
                                    </a>
                                </li>
                                <li class="nav-item dropdown notification_dropdown">
                                    <a class="nav-link  ai-icon" href="#" role="button" data-bs-toggle="dropdown">
                                        <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.45251 25.6682C10.0606 27.0357 11.4091 28 13.0006 28C14.5922 28 15.9407 27.0357 16.5488 25.6682C15.4266 25.7231 14.2596 25.76 13.0006 25.76C11.7418 25.76 10.5748 25.7231 9.45251 25.6682Z" fill="#3E4954" />
                                            <path d="M25.3531 19.74C23.8769 17.8785 21.3995 14.2195 21.3995 10.64C21.3995 7.09073 19.1192 3.89758 15.7995 2.72382C15.7592 1.21406 14.5183 0 13.0006 0C11.4819 0 10.2421 1.21406 10.2017 2.72382C6.88095 3.89758 4.60064 7.09073 4.60064 10.64C4.60064 14.2207 2.12434 17.8785 0.647062 19.74C0.154273 20.3616 0.00191325 21.1825 0.240515 21.9363C0.473484 22.6721 1.05361 23.2422 1.79282 23.4595C3.08755 23.8415 5.20991 24.2715 8.44676 24.491C9.84785 24.5851 11.3543 24.64 13.0007 24.64C14.646 24.64 16.1524 24.5851 17.5535 24.491C20.7914 24.2715 22.9127 23.8415 24.2085 23.4595C24.9477 23.2422 25.5268 22.6722 25.7597 21.9363C25.9983 21.1825 25.8448 20.3616 25.3531 19.74Z" fill="#3E4954" />
                                        </svg>
                                        <span class="badge light text-white bg-primary rounded-circle">52</span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div id="DZ_W_Notification1" class="widget-media dz-scroll p-3 height380">
                                            <ul class="timeline">
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2">
                                                            {/* <img src={require('./images/avatar/1.jpg')}/> */}
                                                            {/* <img alt="image" width="50" src="./public/images/avatar/1.jpg"/> */}
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-info">
                                                            KG
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Resport created successfully</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-success">
                                                            <i class="fa fa-home"></i>
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2">
                                                            {/* <img src={require('./public/images/avatar/1.jpg')} /> */}

                                                            {/* <img alt="image" width="50" src="public/images/avatar/1.jpg"> */}
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Dr sultads Send you Photo</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-danger">
                                                            KG
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Resport created successfully</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="timeline-panel">
                                                        <div class="media me-2 media-primary">
                                                            <i class="fa fa-home"></i>
                                                        </div>
                                                        <div class="media-body">
                                                            <h6 class="mb-1">Reminder : Treatment Time!</h6>
                                                            <small class="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a class="all-notification" href="#">See all notifications <i class="ti-arrow-right"></i></a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown header-profile">
                                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown">
                                        {/* <img src={require('../images/profile/17.jpg')}></img> */}
                                        <img src={require('../images/avatar/1.jpg')}></img>
                                        <div class="header-info">
                                            <span class="text-black">Oda Dink</span>
                                            <p class="fs-12 mb-0">Super Admin</p>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="app-profile.html" class="dropdown-item ai-icon">
                                            <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" class="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <span class="ms-2">Profile </span>
                                        </a>
                                        <a href="email-inbox.html" class="dropdown-item ai-icon">
                                            <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" class="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                            <span class="ms-2">Inbox </span>
                                        </a>
                                        <a href="page-login.html" class="dropdown-item ai-icon">
                                            <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" class="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                            <span class="ms-2">Logout </span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="deznav">
                <div className="deznav-scroll">
                    <ul className="metismenu" id="menu">
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-networking"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>
                            <ul aria-expanded="false">
                                {/* <li><a href="index.js">Dashboard Light</a></li> */}
                                {/* <li><a href="index2.js">Dashboard Dark</a></li> */}
                                <li>
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/searchjob/Searchjob">Search Job</Link>
                                </li>
                                <li>
                                    <Link to="/aplica/Aplicationmain">Aplication</Link>
                                </li>
                                <li><a href="profile.js">Profile</a></li>
                                <li><a href="companies.js">Companies</a></li>
                                <li><a href="statistics.js">Statistics</a></li>
                                <li><a href="./public/js/dashboard">Statistics</a></li>
                            </ul>
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-television"></i>
                            <span className="nav-text">Author</span>
                        </a>
                            <ul aria-expanded="false">
                                <li><a href="app-profile.className=js">Profile</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Email</a>
                                    <ul aria-expanded="false">
                                        <li><a href="email-compose.js">Compose</a></li>
                                        <li><a href="email-inbox.js">Inbox</a></li>
                                        <li><a href="email-read.js">Read</a></li>
                                    </ul>
                                </li>
                                <li><a href="app-calender.js">Calendar</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Shop</a>
                                    <ul aria-expanded="false">
                                        <li><a href="#">Product Grid</a></li>
                                        <li><a href="#">Product List</a></li>
                                        <li><a href="#">Product Details</a></li>
                                        <li><a href="#">Order</a></li>
                                        <li><a href="#">Checkout</a></li>
                                        <li><a href="#">Invoice</a></li>
                                        <li><a href="#">Customers</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-controls-3"></i>
                            <span className="nav-text">User Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="chart-flot.js">Flot</a></li>
                                <li><a href="chart-morris.js">Morris</a></li>
                                <li><a href="chart-chartjs.js">Chartjs</a></li>
                                <li><a href="chart-chartist.js">Chartist</a></li>
                                <li><a href="chart-sparkline.js">Sparkline</a></li>
                                <li><a href="chart-peity.js">Peity</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-internet"></i>
                            <span className="nav-text">Role Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="ui-accordion.js">Accordion</a></li>
                                <li><a href="ui-alert.js">Alert</a></li>
                                <li><a href="ui-badge.js">Badge</a></li>
                                <li><a href="ui-button.js">Button</a></li>
                                <li><a href="ui-modal.js">Modal</a></li>
                                <li><a href="ui-button-group.js">Button Group</a></li>
                                <li><a href="ui-list-group.js">List Group</a></li>
                                <li><a href="ui-media-object.js">Media Object</a></li>
                                <li><a href="ui-card.js">Cards</a></li>
                                <li><a href="ui-carousel.js">Carousel</a></li>
                                <li><a href="ui-dropdown.js">Dropdown</a></li>
                                <li><a href="ui-popover.js">Popover</a></li>
                                <li><a href="ui-progressbar.js">Progressbar</a></li>
                                <li><a href="ui-tab.js">Tab</a></li>
                                <li><a href="ui-typography.js">Typography</a></li>
                                <li><a href="ui-pagination.js">Pagination</a></li>
                                <li><a href="ui-grid.js">Grid</a></li>

                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-heart"></i>
                            <span className="nav-text">Employer Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="uc-select2.js">Select 2</a></li>
                                <li><a href="uc-nestable.js">Nestedable</a></li>
                                <li><a href="uc-noui-slider.js">Noui Slider</a></li>
                                <li><a href="uc-sweetalert.js">Sweet Alert</a></li>
                                <li><a href="uc-toastr.js">Toastr</a></li>
                                <li><a href="map-jqvmap.js">Jqv Map</a></li>
                                <li><a href="uc-lightgallery.js">Light Gallery</a></li>
                            </ul> */}
                        </li>
                        <li><a href="widget-basic.js" className="ai-icon" aria-expanded="false">
                            <i className="flaticon-381-settings-2"></i>
                            <span className="nav-text">Candidate Management</span>
                        </a>
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-notepad"></i>
                            <span className="nav-text">Pack Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="form-element.js">Form Elements</a></li>
                                <li><a href="form-wizard.js">Wizard</a></li>
                                <li><a href="form-ckeditor.js">ckeditor</a></li>
                                <li><a href="form-pickers.js">Pickers</a></li>
                                <li><a href="form-validation-jquery.js">Jquery Validate</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-network"></i>
                            <span className="nav-text">Payment Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="table-bootstrap-basic.js">Bootstrap</a></li>
                                <li><a href="table-datatable-basic.js">Datatable</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Report</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Job Posting Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Category</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Resume Template Management</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Candidate Verification</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                        <li className="has-menu"><a className="has-arrow ai-icon" href="javascript:void(0)" aria-expanded="false">
                            <i className="flaticon-381-layer-1"></i>
                            <span className="nav-text">Settings</span>
                        </a>
                            {/* <ul aria-expanded="false">
                                <li><a href="page-register.js">Register</a></li>
                                <li><a href="page-login.js">Login</a></li>
                                <li><a className="has-arrow" href="javascript:void(0)" aria-expanded="false">Error</a>
                                    <ul aria-expanded="false">
                                        <li><a href="page-error-400.js">Error 400</a></li>
                                        <li><a href="page-error-403.js">Error 403</a></li>
                                        <li><a href="page-error-404.js">Error 404</a></li>
                                        <li><a href="page-error-500.js">Error 500</a></li>
                                        <li><a href="page-error-503.js">Error 503</a></li>
                                    </ul>
                                </li>
                                <li><a href="page-lock-screen.js">Lock Screen</a></li>
                            </ul> */}
                        </li>
                    </ul>

                    <div className="copyright">
                        <p><strong>Jobie Dashboard</strong> © 2023 All Rights Reserved</p>
                        <p>by DexignZone</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Nav;