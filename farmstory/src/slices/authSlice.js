import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie, removeCookie } from '../util/cookieUtil'

const initState = {
  username: "",
  accessToken : "",
}
const authSlice = createSlice({
  name : "authSlice",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      const data = action.payload;

      // redux 저장소 상태 업데이트
      state.username = data.username;
      state.accessToken = data.accessToken;

      // 영구 보관을 위해 cookie 저장
      setCookie('auth', data, 1);

    },
    logout: (state) => {
      removeCookie('auth');

      // initState : 초기화
      return {...initState};
    },
  }
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;