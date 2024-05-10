import React from 'react'

const Contact = () => {
  return (
    <section className="section" id="contact">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4 pb-2">
            <h4 className="title mb-4">Get in touch !</h4>
            <p className="text-muted para-desc mx-auto mb-0">
              Launch your campaign and benefit from our expertise on designing and
              managing conversion centered bootstrap4 html page.
            </p>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
      <div className="row align-items-center">
        <div className="col-md-6 order-md-1 order-2 mt-md-5 mt-4 pt-2">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
              style={{ border: 0 }}
              className="rounded"
              allowFullScreen=""
            />
          </div>
        </div>
        {/*end col*/}
        <div className="col-md-6 order-md-2 order-1 mt-md-5 mt-4 pt-2">
          <div className="custom-form rounded shadow p-4">
            <div id="message" />
            <form
              method="post"
              action="php/contact.php"
              name="contact-form"
              id="contact-form"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Your Name <span className="text-danger">*</span>
                    </label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="First Name :"
                    />
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                      Your Email <span className="text-danger">*</span>
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Your email :"
                    />
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      name="subject"
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                {/*end col*/}
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Comments</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows={4}
                      className="form-control"
                      placeholder="Your Message :"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              {/*end row*/}
              <div className="row">
                <div className="col-sm-12 text-center">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="submitBnt btn btn-primary w-100"
                    defaultValue="Send Message"
                  />
                  <div id="simple-msg" />
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </form>
            {/*end form*/}
          </div>
          {/*end custom-form*/}
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/*end container*/}
  </section>
  
  )
}

export default Contact
