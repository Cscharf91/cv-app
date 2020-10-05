import React, { Component } from 'react';

class EducationForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const {
            school,
            degree,
            gradDate,
            changeSchool,
            changeDegree,
            changeGradDate
        } = this.props;
        
        return (
            <div className="container bg-dark text-light text-center">
                <h3>Education</h3>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="school">School</label>
                            <input type="text" id="school" value={school} onChange={changeSchool} className="form-control" required />
                        </div>

                        <div className="col-sm form-group">
                            <label htmlFor="degree">Degree</label>
                            <input type="text" id="degree" value={degree} onChange={changeDegree} className="form-control" required />
                        </div>

                        <div className="col-sm form-group">
                            <label htmlFor="grad-date">Graduation Date</label>
                            <input type="date" id="grad-date" value={gradDate} onChange={changeGradDate} className="form-control" required />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div> */}
            </div>
        );
    }
}

export default EducationForm;