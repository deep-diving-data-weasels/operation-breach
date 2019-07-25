import React, { Component, Fragment } from 'react';
//TODO: linter error for why
class Aside extends Component {
  render (){
    return (
      <Fragment>
        <aside>
          <ul>
            <div class ="logo">
            <p><img src="image/github.png" /> </p>
            <p><img src="image/linkedIn.png" /> </p>
            </div>

            
          </ul>
        </aside>
      </Fragment>
    );//end return
  }//end render
}//END CLASS

export default Aside;
