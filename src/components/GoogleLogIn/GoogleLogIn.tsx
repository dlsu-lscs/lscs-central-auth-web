import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export const GoogleLogIn = () => {
  const [user, setUser] = useState<any>();
  const [, setCurrentUser] = useCookies<string>(["currentUser"]);
  const [currentToken, setCurrentToken] = useCookies<string>(["currentToken"]);

  const logIn = useGoogleLogin({
    onSuccess: (response) => setUser(response),
    onError: (error) => console.log(error),
  });

  useEffect(() => {
    const getGoogleAccount = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        );
        console.log(response);
        const checkEmail = async (email: string) => {
          try {
            const response = await axios.post(
              "/auth/check-email",
              { email: email },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log(response.data.email);
            if (response.data.success == "Email is an LSCS member") {
              console.log(user.access_token);
              setCurrentUser("currentUser", email, { path: "/" });
              setCurrentToken("currentToken", user.access_token, { path: "/" });
              setTimeout(() => {
                console.log("Redirecting to home page");
                window.location.replace("/");
              }, 200);
            }
          } catch (e) {
            console.log(e);
          }
        };
        checkEmail(response.data.email);
      } catch (e) {
        console.log(e);
      }
    };
    if (user) {
      getGoogleAccount();
    }
  }, user);

  return (
    <>
      <Button
        variant="outline"
        className="flex justify-center items-center hover:brightness-50"
        onClick={logIn}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        Log In using Gmail
      </Button>
    </>
  );
};
