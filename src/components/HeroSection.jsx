import React from 'react'

const HeroSection = () => {
  return (
    <section
    className="bg-home d-flex align-items-center"
    style={{ height: "auto" }}
    id="home"
  >
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
          <div className="title-heading margin-top-100">
            <h1 className="display-4 fw-bold mb-3">
              We're Creating <span className="text-primary">Solutions...</span>
            </h1>
            <p className="para-desc mx-auto text-muted">
              Launch your campaign and benefit from our expertise on designing and
              managing conversion centered bootstrap4 html page.
            </p>
            <div className="col-lg-7 col-md-10 mx-auto">
              <div className="text-center subcribe-form mt-4 pt-2 position-relative">
                <form>
                  <div className="form-group mb-0">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="rounded-pill shadow"
                      placeholder="Your Email Id"
                    />
                    <button type="submit" className="btn btn-pills btn-primary">
                      Subscribe Now
                    </button>
                  </div>
                </form>
                {/*end form*/}
              </div>
              {/*end subscribe form*/}
            </div>
            {/*end col*/}
          </div>
          <div className="home-dashboard">
            <img
              src="/images/saas/saas-2.png"
              alt=""
              style={{ zIndex: -1 }}
              className="img-fluid"
            />
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
  </section>
  
  )
}

export default HeroSection
