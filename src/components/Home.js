import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import CarouselComponent from './carousel';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id} style={{marginTop:0}}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                        <span className="card-title"><b>Make: {item.title}</b></span>
                        <p><b>Model: {item.model}$</b></p>
                        <p><b>Mileage: {item.mileage}$</b></p>
                        <p><b>YOM: {item.YOM}$</b></p>
                        <p><b>Price: {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container" style={{marginTop:70}}>
                <h3 className="center" style={{fontWeight:'bold'}}>PEARL<span style={{color:'pink'}}>SHINE</span> MOTORS </h3>
                <CarouselComponent />
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)