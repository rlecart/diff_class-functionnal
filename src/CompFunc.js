import React, { Fragment } from 'react';

const CompFunc = ({ }) => {
  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const alertSubmit = () => {
    alert(`${name} ${lastName}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => alertSubmit(), 5000);
  };

  return (
    <Fragment>
      <div className="func">
        <h1>Functionnal</h1>
        <form className="formaa" onSubmit={e => handleSubmit(e)}>
          <div className="box">
            <p className="textbo">Nom</p>
            <input className="formaa" type="text" onChange={e => setName(e.target.value)} text={name} />
          </div>
          <div className="box">
            <p className="textbo">Prenom</p>
            <input className="formaa" type="text" onChange={e => setLastName(e.target.value)} text={lastName} />
          </div>
          <div className="box">
            <button className="buttonsubmit">Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CompFunc;