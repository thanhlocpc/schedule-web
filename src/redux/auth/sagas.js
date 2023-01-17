import { call, put, takeEvery } from 'redux-saga/effects';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN,
    LOADING,
    GET_USER,
} from './constants';
import {
    loginService,
    getUserService,
} from './services';

// import history from '~/utils/history';
import RootNavigate from '~/utils/navigate';
import { updateUser } from '~/services/workspaces.sevices';

function* loginSaga(action) {
    const { email, password } = action.payload;
    console.log('login: ', email, '|', password);
    try {
        yield put({ type: LOADING });
        const response = yield call(loginService, email, password);
        console.log(response);
        if (response.status == 1) {
            // lưu token
            localStorage.setItem('token', response.data);

            // lấy thông tin user
            const user = yield call(getUserService);
            yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });

            RootNavigate.getNavigate()('/');
        } else {
            yield put({ type: LOGIN_FAIL, payload: { error: response.message } });
        }
    } catch (error) {
        yield put({ type: LOGIN_FAIL, error });
    }
}

function* getUserInfoSaga() {
    try {
        // lấy thông tin user
        const user = yield call(getUserService);
        if (user) {
            yield put({ type: LOGIN_SUCCESS, payload: { user: user.data } });
        }
    } catch (error) { }
}


function* authSagas() {
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(GET_USER, getUserInfoSaga);
}

export default authSagas;
