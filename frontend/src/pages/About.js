import Footer from "../components/Footer";
import Header from "../components/Header";


export default function About(){
    return(
        <>
            <Header/>
            {/* <!-- about section start --> */}
      <div class="about_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <h1 class="about_taital">About Hospital</h1>
                  <p class="about_text"> has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors  has a more-or-less normal distribution of letters, as o</p>
                  <div class="about_bt"><a href="#">Read More</a></div>
               </div>
               <div class="col-md-6">
                  <div class="about_img"><img src="images/about-img.png"/></div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- about section end --> */}
            <Footer/>
        </>
    )
}