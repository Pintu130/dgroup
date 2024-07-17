import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="new_footer_area bg_color">
        <div class="new_footer_top">
          {/* <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                //   style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
                >
                  <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                  <p>
                    Address: Shop no - 1/5, sanskar Avenue, behind Yogi petrol
                    pump, zadeshwar, Bharuch, Gujarat - 392001
                  </p>
                  <p>Phone no. - +919106512707, +919558037242</p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                //   style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
                >
                  <h3 class="f-title f_600 t_color f_size_18">Quick Link</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="index.php">Home</a>
                    </li>
                    <li>
                      <a href="about.php">About</a>
                    </li>
                    <li>
                      <a href="service.php">Services</a>
                    </li>
                    <li>
                      <a href="contact.php">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                //   style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
                >
                  <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                  <ul class="list-unstyled f_list">
                    <li>
                      <a href="terms-and-condition.php">
                        Term &amp; conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div
                  class="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                //   style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
                >
                  <h3 class="f-title f_600 t_color f_size_18">Follow Us</h3>
                  <div class="f_social_icon">
                    <a href="https://www.facebook.com/profile.php?id=100064874804409&mibextid=ZbWKwL">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com/dgpm_?igshid=N2ZiY2E3YmU=">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </div> */}
          <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
          </div>
        </div>
      </footer>

      <div class="bg-dark py-4 bg-gray-950 text-white">
        <div class="text-center">
          <p class="mb-2">
            Copyright &copy;{" "}
            <a
              class="fw-semi-bold"
              href="http://dgrouppackersandmovers.com/"
              target="_blank"
            >
              dgrouppackersandmovers.com
            </a>
            , All Right Reserved.
          </p>

          <p class="mb-0">
            Designed & Distributed By: <a href="#">Pintu Sharma</a>{" "}
          </p>
        </div>
      </div>

      <a
        href="#"
        class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i class="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
