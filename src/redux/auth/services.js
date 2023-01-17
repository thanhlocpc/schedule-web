import instance from '~/interceptors/axios';
import api from '~/utils/axios';

export const loginService = async (email, password) =>
    await instance
        .post('/v1/auths/login', { email, password })
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.data);

export const getUserService = async () =>
    await api
        .get('/v1/auths/user')
        .then((res) => {
            return res.data;
        })
        .catch((e) => e.response?.message);


