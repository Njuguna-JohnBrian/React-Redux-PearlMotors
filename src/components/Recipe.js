import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addDiscount } from './actions/cartActions'
class Recipe extends Component{
    
    componentWillUnmount() {
         if(this.refs.discount.checked)
              this.props.substractDiscount()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addDiscount();
        }
        else{
            this.props.substractDiscount();
        }
    }

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="discount" onChange= {this.handleChecked} />
                                <span>Discount(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addDiscount: ()=>{dispatch({type: 'ADD_DISCOUNT'})},
        substractDiscount: ()=>{dispatch({type: 'SUB_DISCOUNT'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
