import React, {useEffect} from 'react';
import Produce from './Produce';
import {connect} from 'react-redux';
import {getProduce, addToCart} from '../Actions/Actions';

const ProduceList = props => {
    const getProduce = props.getProduce;
    const produce = props.produce;
    useEffect(()=>{
        getProduce();
    }, [getProduce]);

    return (
        <div className='produce-list'>
            {produce.map(item =>{
                return <Produce key={item.id} item={item} addToCart={props.addToCart} />
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    produce: state.produce
});

export default connect(mapStateToProps, {getProduce, addToCart})(ProduceList);