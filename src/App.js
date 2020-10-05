import React from 'react';
import Edit from './components/Edit';
import ApplicationDisplay from './components/ApplicationDisplay';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      school: "",
      degree: "",
      gradDate: "",
      company: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      edit: true
    }

    this.changeStatus = this.changeStatus.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeSchool = this.changeSchool.bind(this);
    this.changeDegree = this.changeDegree.bind(this);
    this.changeGradDate = this.changeGradDate.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
  }

  changeStatus = (e) => {
    e.preventDefault();
    if (this.state.edit) {
      this.setState({edit: false});
    } else {
      this.setState({edit: true});
    }
  }

  changeName = (e) => {
    this.setState({name: e.target.value});
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value});
  }

  changePhone = (e) => {
    this.setState({phone: e.target.value});
  }

  changeSchool = (e) => {
    this.setState({school: e.target.value});
  }

  changeDegree = (e) => {
    this.setState({degree: e.target.value});
  }

  changeGradDate = (e) => {
    this.setState({gradDate: e.target.value});
  }

  changeCompany = (e) => {
    this.setState({company: e.target.value});
  }

  changeTitle = (e) => {
    this.setState({title: e.target.value});
  }

  changeDescription = (e) => {
    this.setState({description: e.target.value});
  }

  changeStartDate = (e) => {
    this.setState({startDate: e.target.value});
  }

  changeEndDate = (e) => {
    this.setState({endDate: e.target.value});
  }

  render() {
    const {
      edit,
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
    } = this.state;
    let display;

    if (edit) {
      display = <Edit 
        changeStatus={this.changeStatus}
        name={name}
        phone={phone}
        email={email}
        changeName={this.changeName}
        changeEmail={this.changeEmail}
        changePhone={this.changePhone}
        school={school}
        degree={degree}
        gradDate={gradDate}
        changeSchool={this.changeSchool}
        changeDegree={this.changeDegree}
        changeGradDate={this.changeGradDate}
        company={company}
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
        changeCompany={this.changeCompany}
        changeTitle={this.changeTitle}
        changeDescription={this.changeDescription}
        changeStartDate={this.changeStartDate}
        changeEndDate={this.changeEndDate}
      />
    } else {
      display = <ApplicationDisplay 
        changeStatus={this.changeStatus}
        name={name}
        phone={phone}
        email={email}
        school={school}
        degree={degree}
        gradDate={gradDate}
        company={company}
        title={title}
        description={description}
        startDate={startDate}
        endDate={endDate}
    />
    }

    return (
      <div className="app">
        <div className="jumbotron-fluid bg-primary text-light">
          <h1 className="display-5">CV Application</h1>
          <p className="lead">By Cory S, 2020</p>
        </div>
        <div>
        {display}
        </div>
      </div>  
    );
  }
}

export default App;
