export default function (state = null, action) {
  console.log("harinathreddy"+action.type);
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
    }
    return state;
}
