import React, {useEffect} from 'react';
import Produce from './Produce';
import {connect} from 'react-redux';
import {getProduce} from '../Actions/Actions';

const ProduceList = props => {
    const getProduce = props.getProduce;
    const produce = props.produce;
    useEffect(()=>{
        getProduce(produce);
        console.log('cj: getting greenery', produce);
    }, [getProduce, produce]);

    return (
        <div className='produce-list'>
            {produce.map(item =>{
                return <Produce key={item.id} item={item}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    produce: state.produce
});

export default connect(mapStateToProps, {getProduce})(ProduceList);