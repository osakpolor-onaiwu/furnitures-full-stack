import axios from "axios";
import TokenConfig from "./tokenConfig";

const DeleteCartItem = (id) => {
    console.log(id);

    return (dispatch, getState) => {
        axios
            .delete(
                `http://localhost:8000/furnitures/cart/${id}/`,
                TokenConfig(getState)
            )
            .then(res => {
                console.log(res);
                dispatch({ type: "DELETE_ITEM" });
                axios
                    .get(
                        "http://localhost:8000/furnitures/cartget/",
                        TokenConfig(getState)
                    )
                    .then(res => {
                        console.log(res.data);
                        dispatch({
                            type:'GET_CART',
                            payload:res.data
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export default DeleteCartItem;
