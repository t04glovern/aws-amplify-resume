import React, { Component } from "react";

class CareerItem extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="jd">
        <div className="row">
          <div className="col-xs-6">
            <h4>
              <b>{item.position}</b>
            </h4>
          </div>
          <div className="col-xs-6 pull-right">
            <h5 className="pull-right">
              {item.dates}
              <br />
              {item.company} <i>({item.location})</i>
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>{item.summary}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {item.accomplishments.length > 0 ? (
              <b>Selected accomplishments: </b>
            ) : null}
            <ul>
              {item.accomplishments.map((itemm, i) => (
                <li key={i} >{itemm}</li>
              ))}
            </ul>
            {item.competencies.length > 0 ? <b>Technical competencies: </b> : null}
            {item.competencies.map((itemm, i) => (
              <span key={i} className="badge">{itemm}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CareerItem;
