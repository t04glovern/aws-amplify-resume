import React, { Component } from "react";
import Career from "./sections/Career/Career";
import Header from "./sections/Header/Header";

class Resume extends Component {
 render() {
   return (
     <div className="container">
        <Header />
        <Career/>
     </div>
   );
 }
}

export default Resume;
