import React from 'react';
import Tcfs from './Tcfs';


class MainContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     tcfs: {
  //       1: {
  //         id: 1,
  //         name: 'David',
  //         votes: 0,
  //         image: me
  //       },        
  //       2: {
  //         id: 2,
  //         name: 'Aspen',
  //         votes: 0,
  //         image: aspen
  //       },
  //       3: {
  //         id: 3,
  //         name: 'Erin',
  //         votes: 0,
  //         image: erin
  //       },
  //       4: {
  //         id: 4,
  //         name: 'Cody',
  //         votes: 0,
  //         image: cody
  //       },
  //     }
  //   }
  // }

  // increaseVote = (tcfId) => {
  //   this.setState({
  //     tcfs: {
  //       ...this.state.tcfs,
  //       [tcfId]: {
  //         ...this.state.tcfs[tcfId],
  //         votes: this.state.tcfs[tcfId]['votes'] + 1
  //       }
  //     }
  //   })
  // }

  // decreaseVote = (tcfId) => {

  //   this.setState({
  //     tcfs: {
  //       ...this.state.tcfs,
  //       [tcfId]: {
  //         ...this.state.tcfs[tcfId],
  //         votes: this.state.tcfs[tcfId]['votes'] - 1
  //       }
  //     }
  //   })
  // }
  
  render() {
    return (
      <div>
        <Tcfs 
        />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}

export default MainContainer;
