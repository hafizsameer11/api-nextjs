import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 mb-3">
            <div className="text-center">
              <a className="logo logo-footer" href="#">
                <img src="/images/logo-light.png" height={25} alt="" />
              </a>
              <p className="text-muted para-desc mx-auto mt-3">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <ul className="list-unstyled social-icon social mb-0 mt-4">
                <li className="list-inline-item">
                  <a href="javascript:void(0)" className="rounded">
                    <i
                      data-feather="facebook"
                      className="fea icon-sm fea-social"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)" className="rounded">
                    <i
                      data-feather="instagram"
                      className="fea icon-sm fea-social"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)" className="rounded">
                    <i
                      data-feather="twitter"
                      className="fea icon-sm fea-social"
                    />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript:void(0)" className="rounded">
                    <i
                      data-feather="linkedin"
                      className="fea icon-sm fea-social"
                    />
                  </a>
                </li>
              </ul>
              {/*end icon*/}
            </div>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
      {/* Back to top */}
      <a href="#" className="back-to-top" id="back-to-top" title="Top">
        <i className="mdi mdi-arrow-up icons bg-light text-dark"> </i>
      </a>
      {/* Back to top */}
    </footer>
    {/*end footer*/}
    <footer className="footer-bar bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <p className="mb-0 footer-text para-desc mx-auto">
              © <span className="text-reset">Appgen</span>. Design with{" "}
              <i className="mdi mdi-heart text-danger" /> by{" "}
              <a
                href="http://shreethemes.in"
                target="_blank"
                className="text-reset"
              >
                Shreethemes
              </a>
              .
            </p>
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/*end container*/}
    </footer>
  </>
  
  )
}

export default Footer
