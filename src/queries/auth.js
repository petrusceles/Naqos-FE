import { useMutation, useQuery } from "@tanstack/react-query";
import { login, me, edit_profile, update_password } from "../api/auth.js";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useUser = (isNavigate=false) => {
  const navigate = useNavigate();
  const getUserQuery = useQuery({
    queryFn: me,
    queryKey: ["auth", "me"],
    retry: false,
    onError:() => {
      isNavigate && navigate("/");
    }
  });
  return getUserQuery;
};

export const useLoginUser = () => {
  const loginUserMutation = useMutation({
    mutationFn: login,
    mutationKey: ["auth", "login"]
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