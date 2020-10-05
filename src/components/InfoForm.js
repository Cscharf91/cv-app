import React, { Component } from 'react';

class InfoForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const {
            name,
            phone,
            email,
            changeName,
            changeEmail,
            changePhone
        } = this.props;
        
        return (
            <div className="container bg-dark text-light text-center">
                <h3>Basic Info</h3>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={changeName} className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" value={phone} onChange={changePhone} className="form-control" required />
                        </div>

                        <div className="col-sm form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" value={email} onChange={changeEmail} className="form-control" required />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div> */}
            </div>
        );
    }
}

export default InfoForm;