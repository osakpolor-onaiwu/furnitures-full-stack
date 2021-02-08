import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SideNav = ({ categories }) => {
    const showCategory = categories.length ? (
        categories.map((cat) => {
            return (
                <div key={cat.id}>
                    <Link className="sidelink" to={`/category/${cat.name}`}>
                        {cat.name}
                    </Link>
                </div>
            );
        })
    ) : (
        <div>
            <h4>loading Categories...</h4>
        </div>
    );
    return <div id="side">{showCategory}</div>;
};

const mapStateToProps = (state) => {
    return {
        categories: state.category.category
    };
};

export default connect(mapStateToProps)(SideNav);
