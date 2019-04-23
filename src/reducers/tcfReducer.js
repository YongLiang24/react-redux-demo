import aspen from '../assets/aspen.jpeg';
import cody from '../assets/cody.jpeg';
import me from '../assets/me.jpeg';
import erin from '../assets/erin.jpeg';

const initialState = {
  TESTING: 'something here',
  tcfs: {
    1: {
      id: 1,
      name: 'David',
      votes: 0,
      image: me
    },        
    2: {
      id: 2,
      name: 'Aspen',
      votes: 0,
      image: aspen
    },
    3: {
      id: 3,
      name: 'Erin',
      votes: 0,
      image: erin
    },
    4: {
      id: 4,
      name: 'Cody',
      votes: 0,
      image: cody
    },
  }
}

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


const tcfReducer = (state = initialState, action) => {
  console.log('Reducer fired!', action);
  switch(action.type) {
    case 'INCREASE_VOTE': 
      return {    
        ...state,
            tcfs: {
              ...state.tcfs,
              [action.payload.id]: {
                ...state.tcfs[action.payload.id],
                votes: state.tcfs[action.payload.id]['votes'] + 1
              }
            }
          }
          case 'DECREASE_VOTE': 
          return {    
            ...state,
                tcfs: {
                  ...state.tcfs,
                  [action.payload.id]: {
                    ...state.tcfs[action.payload.id],
                    votes: state.tcfs[action.payload.id]['votes'] - 1
                  }
                }
              }
    default:
      return state;
  }
}

export default tcfReducer;