import React, {useEffect} from 'react';
import Produce from './Produce';
import {connect} from 'react-redux';
import {getProduce} from '../Actions/Actions';

const ProduceList = props => {
    useEffect((props)=>{
        props.getProduce(props.produce);
        console.log('cj: getting greenery', props.produce);
    }, []);

    return (
        <div className='produce-list'>
            {props.produce.map(item =>{
                return <Produce key={item.id} item={item}/>
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    produce: state.produce
});

export default connect(mapStateToProps, {getProduce})(ProduceList);