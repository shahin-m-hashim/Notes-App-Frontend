import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import { logoutUser } from "api/authApi";
import queryClient from "config/queryClientConfig";

export default function LogoutBtn() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear();
      localStorage.clear();
      sessionStorage.clear();
      navigate("/auth/login");
    },
  });

  return (
    <button
      type="button"
      onClick={() => mutation.mutate()}
      className="text-sm text-white xs:py-1 xs:px-3 cursor-pointer"
    >
      <img
        alt="home"
        className="pt-1.5 xs:hidden size-6"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />
      <span className="hidden xs:inline">Logout</span>
    </button>
  );
}
