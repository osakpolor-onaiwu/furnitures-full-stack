import React, { Component } from "react";
import { connect } from "react-redux";
import SideNav from "../layout/sidenav";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
import AddToCartAction from "../../redux/actions/cartAction";
import { Link } from "react-router-dom";

export class ProductDetails extends Component {
    Add = (pro) => {
        if (this.props.isAuthenticated) {
            this.props.AddToCartAction({
                name: pro.name,
                price: pro.price,
                unit: pro.units,
                image: pro.image,
                owner: this.props.user.id,
            });
        } else {
            this.props.history.push("/login");
        }
    };
    productsList = this.props.products.length ? (
        this.props.products.map((pro) => {
            return (
                <div id="itemDetail" key={pro.id}>
                    <img src={pro.image} alt="propic" />
                    <h4>{pro.name}</h4>
                    <h5>Price: {pro.price} Naira</h5>
                    <p>
                        <strong>Item Description:</strong>
                        {pro.description}
                    </p>
                    <button onClick={() => this.Add(pro)} type="submit">
                        Add to Cart
                    </button>
                </div>
            );
        })
    ) : (
        <div>loading products...</div>
    );

    render() {
        return (
            <main id="prods">
                <Navbar />

                <div id="products">
                    <section id="sideNav">
                        <SideNav />
                    </section>
                    <section id="productSec">
                        <section id="p">{this.productsList}</section>
                        <Footer />
                    </section>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state, ownprops) => {
    const id = ownprops.match.params.productDetail;
    return {
        products: state.products.product.filter((pro) => {
            return pro.id == id;
        }),
        state: state.auth.user,
        isAuthenticated:state.auth.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddToCartAction: (product) => {
            dispatch(AddToCartAction(product));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
