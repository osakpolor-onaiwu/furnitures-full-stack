import React, { Component } from "react";
import { connect } from "react-redux";
import SideNav from "../layout/sidenav";
import AddToCartAction from "../../redux/actions/cartAction";
import Footer from "../layout/footer";
import Navbar from "../layout/navbar";
import { Link, Redirect } from "react-router-dom";

class Products extends Component {
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
                <div id="productList" key={pro.id}>
                    <Link id="productlink" to={`/productDetail/${pro.id}`}>
                        <img src={pro.image} alt="propic" />
                        <h4>{pro.name}</h4>
                        <h5>Price: {pro.price} Naira</h5>
                    </Link>
                    <button onClick={() => this.Add(pro)} type="submit">
                        Add to Cart
                    </button>
                </div>
            );
        })
    ) : (
        <div>loading products...</div>
    );

    categories = this.props.category.length ? (
        this.props.category.map((cat) => {
            return <h2 key={cat.id}>{cat.name}</h2>;
        })
    ) : (
        <div></div>
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
                        <section id="catTitle">{this.categories}</section>
                        <section id="productli">{this.productsList}</section>
                        <Footer />
                    </section>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state, ownprops) => {
    const id = ownprops.match.params.Products;
    return {
        category: state.category.category.filter((cat) => {
            return cat.id == id;
        }),
        products: state.products.product.filter((pro) => {
            return pro.category == id;
        }),
        user: state.auth.user,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddToCartAction: (product) => {
            dispatch(AddToCartAction(product));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
