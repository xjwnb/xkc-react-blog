/*
 * @Author: your name
 * @Date: 2021-02-14 14:19:49
 * @LastEditTime: 2021-02-14 16:36:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \xkc-react-blog\src\store\reducers\user.js
 */

// action
import { USER_INFO } from "../actionTypes";

// 默认 state
const initState = {
  id: 1,
  name: "",
  personal_profile: "",
  avatarUrl: "",
  bgUrl: "",
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        ...action.userinfo,
      };

    default:
      return state;
  }
}
