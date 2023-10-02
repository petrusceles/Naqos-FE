import axios from "axios";
import config from "../config/index.js";
export const login = async ({ email, password }) => {
  // console.log("SEND")
  return await axios.post(
    `${config.BASE_URL}/auth/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
};

export const me = async () => {
  return await axios.get(`${config.BASE_URL}/auth/me`, {
    withCredentials: true,
  });
};

export const edit_profile = async ({ update }) => {
  const form = new FormData();
  update?.name && form.append("name", update?.name);
  update?.phone_number && form.append("phone_number", update?.phone_number);
  update?.email && form.append("email", update?.email);
  update?.avatar && form.append("avatar", update?.avatar);
  update?.password && form.append("password", update?.password);
  update?.old_password && form.append("old_password", update?.old_password);
  update?.bank && form.append("bank", update?.bank);
  update?.bank_number && form.append("bank_number", update?.bank_number);
  update?.bank_name && form.append("bank_name", update?.bank_name);

  return await axios.put(`${config.BASE_URL}/user/${update.id}`, form, {
    withCredentials: true,
  });
};

export const update_password = async ({ update }) => {
  return await axios.put(`${config.BASE_URL}/user/update-password`, {
    id: update?.id,
    password: update?.password,
    old_password: update?.old_password,
  });
};

export const logout = async () => {
  return await axios.delete(`${config.BASE_URL}/auth/logout`, {
    withCredentials: true,
  });
};

export const get_user_roles = async () => {
  return await axios.get(`${config.BASE_URL}/role`);
};

export const sign_up = async ({ data }) => {
  return await axios.post(`${config.BASE_URL}/user`, data);
};
