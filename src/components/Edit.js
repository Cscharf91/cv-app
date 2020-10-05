import React from 'react';
import InfoForm from './InfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';

class Edit extends React.Component {
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
            changeName,
            changeEmail,
            changePhone,
            school,
            degree,
            gradDate,
            changeSchool,
            changeDegree,
            changeGradDate,
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
                <form onSubmit={changeStatus}>
                <InfoForm
                    name={name}
                    phone={phone}
                    email={email}
                    changeName={changeName}
                    changeEmail={changeEmail}
                    changePhone={changePhone} 
                />
                <EducationForm
                    school={school}
                    degree={degree}
                    gradDate={gradDate}
                    changeSchool={changeSchool}
                    changeDegree={changeDegree}
                    changeGradDate={changeGradDate}
                />
                <ExperienceForm 
                    company={company}
                    title={title}
                    description={description}
                    startDate={startDate}
                    endDate={endDate}
                    changeCompany={changeCompany}
                    changeTitle={changeTitle}
                    changeDescription={changeDescription}
                    changeStartDate={changeStartDate}
                    changeEndDate={changeEndDate}
                />

                <button type="submit" className="btn btn-primary">Submit</button>

                </form>

            </div>
        );

    }
}

export default Edit;