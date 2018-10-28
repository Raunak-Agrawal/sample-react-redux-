import { TEST_DISPATCH } from "../actions/types";
import { DETAIL_DISPATCH } from "../actions/types";
const initialstate = {};
export default function(state = initialstate, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return action.payload;
    case DETAIL_DISPATCH:
      return action.payload;
    default:
      return state;
  }
}
