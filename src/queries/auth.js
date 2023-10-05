import { useMutation, useQuery } from "@tanstack/react-query";
import {
  login,
  me,
  edit_profile,
  update_password,
  logout,
  send_verif,
  verif,
} from "../api/auth.js";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { get_user_roles, sign_up } from "../api/auth.js";

export const useUser = (isNavigate = false) => {
  const navigate = useNavigate();
  const getUserQuery = useQuery({
    queryFn: me,
    queryKey: ["auth", "me"],
    retry: false,
    onError: () => {
      isNavigate && navigate("/");
    },
  });
  return getUserQuery;
};

export const useUserMutate = () => {
  const getUserMutation = useMutation({
    mutationFn: me,
    queryKey: ["auth", "me", "mutation"],
    retry: false,
  });
  return getUserMutation;
};

export const useLoginUser = () => {
  const loginUserMutation = useMutation({
    mutationFn: login,
    mutationKey: ["auth", "login"],
  });
  return loginUserMutation;
};

export const useEditUserProfile = () => {
  const editProfileUserMutaton = useMutation({
    mutationFn: edit_profile,
    mutationKey: ["auth", "edit", "profile"],
  });
  return editProfileUserMutaton;
};

export const useLogout = () => {
  const logoutQuery = useMutation({
    mutationFn: logout,
    mutationKey: ["logout"],
  });
  return logoutQuery;
};

export const useUserRole = () => {
  const getUserRoleQuery = useQuery({
    queryFn: get_user_roles,
    queryKey: ["roles"],
  });
  return getUserRoleQuery;
};

export const useSignUp = () => {
  const signUpQuery = useMutation({
    mutationFn: sign_up,
    mutationKey: ["sign-up"],
  });
  return signUpQuery;
};

export const useSendVerif = () => {
  const sendVerifQuery = useMutation({
    mutationFn: send_verif,
    mutationKey: ["send", "verif"],
  });
  return sendVerifQuery;
};

export const useVerif = ({ data }) => {
  console.log(data);
  const verifQuery = useQuery({
    queryFn: () => verif({ data }),
    queryKey: ["verif"],
  });
  return verifQuery;
};
