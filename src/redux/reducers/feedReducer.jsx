const initialState = {
    feed:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'FEED_SUCCESS':
        console.log('feed success')
        return { ...state }

    case "FEED_ERROR":
        console.log(action.err)

    default:
        return state
    }
}
