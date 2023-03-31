import axios from "axios";
import React, { Component } from "react";
import Nav from "../components/Nav";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    const comingData = async () => {
      const productData = await axios.get("https://fakestoreapi.com/products");
      this.setState({
        products: productData.data,
      });
    };
    comingData();
  }

  render() {
    return (
      <>
      <Nav/>
      <div className="container">
        <div className="row g-4">
          {this.state.products.map((item) => {
            return (
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 text-center">
                  <img src={item.image} className="card-img-top align-self-center" alt="..." height="250px"/>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </>
    );
  }
}

export default Products;
