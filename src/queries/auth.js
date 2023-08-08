import { useMutation, useQuery } from "@tanstack/react-query";
import AuthAPI from "../api/auth.js";

export const useUser = () => {
  const getUserQuery = useQuery({
    queryFn: AuthAPI.me,
    queryKey: ["auth", "me"],
    retry:false
  });
  return getUserQuery;
};

export const useLoginUser = () => {
  const loginUserMutation = useMutation({
    mutationFn: AuthAPI.login,
    mutationKey: ["auth", "login"],
  });
  return loginUserMutation;
};
