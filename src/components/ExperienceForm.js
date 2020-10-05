import React, { Component } from 'react';

class ExperienceForm extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const {
            company,
            title,
            description,
            startDate,
            endDate,
            changeCompany,
            changeTitle,
            changeDescription,
            changeStartDate,
            changeEndDate
        } = this.props;
        
        return (
            <div className="container bg-dark text-light text-center">
                <h3>Experience</h3>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="company">Company Name</label>
                            <input type="text" id="company" value={company} onChange={changeCompany} className="form-control" required />
                        </div>
                        <div className="col-sm form-group">
                            <label htmlFor="title">Job Title</label>
                            <input type="text" id="title" value={title} onChange={changeTitle} className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" value={description} onChange={changeDescription} className="form-control" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm form-group">
                            <label htmlFor="start">Start Date</label>
                            <input type="date" id="start" value={startDate} onChange={changeStartDate} className="form-control" required />
                        </div>
                        <div className="col-sm form-group">
                            <label htmlFor="end">End Date</label>
                            <input type="date" id="end" value={endDate} onChange={changeEndDate} className="form-control" required />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div> */}
            </div>
        );
    }
}

export default ExperienceForm;