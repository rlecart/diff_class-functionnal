import React, { Component, Fragment } from 'react';

class CompClass extends Component {
  state = {
    name: '',
    lastName: '',
  };

  alertSubmit() {
    alert(`${this.state.name} ${this.state.lastName}`);
  }

  handleSubmit(e) {
    e.preventDefault();

    setTimeout(() => this.alertSubmit(), 5000);
  }

  render() {
    return (
      <Fragment>
        <div className="classr">
          <h1>Class</h1>
          <form className="formaa" onSubmit={e => this.handleSubmit(e)}>
            <div className="box">
              <p className="textbo">Nom</p>
              <input className="formaa" type="text" onChange={e => this.setState({ name: e.target.value })} text={this.state.name} />
            </div>
            <div className="box">
              <p className="textbo">Prenom</p>
              <input className="formaa" type="text" onChange={e => this.setState({ lastName: e.target.value })} text={this.state.lastName} />
            </div>
            <div className="box">
              <button className="buttonsubmit">Submit</button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default CompClass;