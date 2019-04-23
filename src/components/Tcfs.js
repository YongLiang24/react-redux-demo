import React from 'react';
import TcfCard from './TcfCard';
import { connect } from 'react-redux';

const Tcfs = props => {



  const mapTcfs = () => {
    let tcfArray = Object.values(props.tcfs);
    let tcfCards = tcfArray.map(tcf => {
      return (
        <TcfCard 
          key={ tcf.id }

          tcf={ tcf }
        />
      )
    })
    return tcfCards;
  }

  return (
    <div>
      <div className='container'>
        {mapTcfs()}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tcfs: state.tcf.tcfs
  }
}
 
export default connect(mapStateToProps)(Tcfs);
