import React, { Component } from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { getDetail } from "../../../graphql/queries";

class Header extends Component {
  render() {
    return (
      <Connect query={graphqlOperation(getDetail, { id: 1 })}>
        {({ data: { getDetail: person } }) => {
          if (!person) {
            return null;
          }
          return (
            <div className="row header">
              <div className="col-xs-9">
                <h1 className="name">{person.name}</h1>
                <h4 className="profession">{person.profession}</h4>
                { person.certified
                  ? <img src="/img/aws-logo.png" alt="AWS" width="200" />
                  : null
                }
              </div>

              <div className="col-xs-3">
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-map-marker" /> {person.location}
                  </li>
                  <li>
                    <i className="fa fa-flag-o" /> {person.citizenship}
                  </li>
                  <li>
                    <i className="fa fa-birthday-cake" /> {person.birthday}
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />
                    <a href={"mailto:" + person.email}> {person.email}</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />
                    <a href={"https://" + person.site}> nathanglover.com</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" /> {person.phone}
                  </li>
                  <li>
                    <i className="fa fa-github" />
                    <a href={"https://github.com/" + person.github}> {person.github}</a>
                  </li>
                  <li>
                    <i className="fa fa-stack-overflow" />
                    <a href={"https://stackoverflow.com/story/" + person.stackoverflow}> {person.stackoverflow}</a>
                  </li>
                </ul>
              </div>
            </div>
          );
        }}
      </Connect>
    );
  }
}

export default Header;
