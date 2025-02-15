// import '../css/bootstrap.min.css';
// import '../css/style.css';
// import '../css/responsive.css';
// import '../images/fevicon.png';
// import '../css/jquery.mCustomScrollbar.min.css'


export default function Header() {
    return(
        <>
            {/* <!-- header top section start --> */}
      <div class="header_top_section">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div class="header_top_main">
                     <div class="call_text"><a href="#"><span class="padding_right0"><i class="fa fa-phone" aria-hidden="true"></i></span>  Call : +01 1234567890</a></div>
                     <div class="call_text_2"><a href="#"><span class="padding_right0"><i class="fa fa-envelope" aria-hidden="true"></i></span> demo@gmail.com</a></div>
                     <div class="call_text_1"><a href="#"><span class="padding_right0"><i class="fa fa-map-marker" aria-hidden="true"></i></span> Location</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- header top section end --> */}
      {/* <!-- header section start --> */}
      <div class="header_section">
         <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand"href="index.html"><img src="images/logo.png"/></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="treatment.html">Treatment</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="doctors.html">Doctors</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                  </form>
               </div>
            </nav>
            <div class="custom_bg">
               <div class="custom_menu">
                  <ul>
                     <li class="active"><a href="index.html">Home</a></li>
                     <li><a href="about.html">About</a></li>
                     <li><a href="treatment.html">Treatment</a></li>
                     <li><a href="doctors.html">Doctors</a></li>
                     <li><a href="blog.html">Blog</a></li>
                     <li><a href="contact.html">Contact Us</a></li>
                  </ul>
               </div>
               <form class="form-inline my-2 my-lg-0">
                  <div class="search_btn">
                     <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i><span class="signup_text">Login</span></a></li>
                     <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i><span class="signup_text">Sign Up</span></a></li>
                     <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                  </div>
               </form>
            </div>
         </div>
         {/* <!-- header section end --> */}
         {/* <!-- banner section start -->  */}
         <div class="banner_section layout_padding">
            <div class="container">
               <div class="row">
                  <div class="col-md-12">
                     <h1 class="banner_taital">We care Of You</h1>
                     <p class="banner_text">When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to </p>
                     <div class="read_bt"><a href="#">Read More</a></div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!-- banner section end --> */}
      </div>
      {/* <!-- header section end --> */}
        </>
    )
}