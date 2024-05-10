import React from 'react'

const HowWorks = () => {
  return (
    <section className="py-4 bg-light">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-flex about-serv text-center align-items-center py-3">
            <h3 className="shadow bg-primary icons-serv text-white rounded-pill me-3">
              <i data-feather="airplay" className="fea icon-ex-md" />
            </h3>
            <div className="content">
              <h5 className="title mb-0">Consutancy</h5>
            </div>
          </div>
          {/*end about section*/}
        </div>
        {/*end col*/}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-flex about-serv text-center align-items-center py-3">
            <h3 className="shadow bg-primary icons-serv text-white rounded-pill me-3">
              <i data-feather="feather" className="fea icon-ex-md" />
            </h3>
            <div className="content">
              <h5 className="title mb-0">UI/UX Design</h5>
            </div>
          </div>
          {/*end about section*/}
        </div>
        {/*end col*/}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-flex about-serv text-center align-items-center py-3">
            <h3 className="shadow bg-primary icons-serv text-white rounded-pill me-3">
              <i data-feather="code" className="fea icon-ex-md" />
            </h3>
            <div className="content">
              <h5 className="title mb-0">Smart Coding</h5>
            </div>
          </div>
          {/*end about section*/}
        </div>
        {/*end col*/}
        <div className="col-lg-3 col-md-6 col-12">
          <div className="d-flex about-serv text-center align-items-center py-3">
            <h3 className="shadow bg-primary icons-serv text-white rounded-pill me-3">
              <i data-feather="mail" className="fea icon-ex-md" />
            </h3>
            <div className="content">
              <h5 className="title mb-0">Fast Support</h5>
            </div>
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

export default HowWorks
