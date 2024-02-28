import React from 'react';

const Contact = () => {
  return (
    <>
      <form>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card transparent-card">
                <div className="card-body">
                  <h4 className="card-header bg-primary">Contact Page</h4>
                  <div className="card-body form-group">
                    <label>Username:*</label>
                    <input type="email" className="form-control" required /> <br />
                    <label>Password:*</label>
                    <input type="password" className="form-control" required /> <br />
                    <label>MobileNo:*</label>
                    <input type="number" className="form-control" required /> <br />
                    <label>Comments:</label>
                    <input type="text" className="form-control" placeholder="Give your feedback" /><br />
                    <button className="btn btn-success" maxLength="10">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
