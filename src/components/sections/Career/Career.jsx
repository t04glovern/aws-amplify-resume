import React, { Component } from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listJobs } from "../../../graphql/queries";
import CareerItem from "./CareerItem";

class Career extends Component {
  render() {
    return (
      <Connect query={graphqlOperation(listJobs)}>
        {({ data: { listJobs: jobs } }) => {
          if (!jobs || !jobs.items) {
            return null;
          }
          return (
            <div className="row section">
              <div className="col-xs-3"><h2>Career</h2></div>
              <div className="col-xs-9">
                {jobs.items.map(item => (
                  <div key={item.id}>
                    <CareerItem item={item} />
                    <hr/>
                  </div>
                ))}
              </div>
            </div>
          );
        }}
      </Connect>
    );
  }
}

export default Career;
