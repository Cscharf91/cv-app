import React from 'react';

class ApplicationDisplay extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    };

    render() {
        const {
            changeStatus,
            name,
            phone,
            email,
            school,
            degree,
            gradDate,
            company,
            title,
            description,
            startDate,
            endDate,
        } = this.props;

        return (
            <div className="container bg-dark text-light text-center">
      
                    <p>Name: {name}</p>
                    <p>Phone: {phone}</p>
                    <p>Email: {email}</p>

                    <p>School: {school}</p>
                    <p>Degree: {degree}</p>
                    <p>Graduation Date: {gradDate}</p>

                    <p>Company: {company}</p>
                    <p>Job Title: {title}</p>
                    <p>Description: {description}</p>
                    <p>Start Date: {startDate}</p>
                    <p>End Date: {endDate}</p>
                

                <button onClick={changeStatus} className="btn btn-primary">Edit</button>

            </div>
        );

    }
}

export default ApplicationDisplay;