import React from 'react';
// TODO: set up react-router!!
// import { Link }
// import { connect } from "react-redux";

import Buyer from './Buyer';
import Farmer from './Farmer';

const Dashboard = (props) => {
  return (
    <div>
      {
        props.user.grower ?
        <Farmer /> :
        <Buyer />
      }
    </div>
  )
}

// export default connect(mapStateToProps, {})(Dashboard);
export default Dashboard