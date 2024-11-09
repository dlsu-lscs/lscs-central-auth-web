import { GoogleLogIn } from "@/components/GoogleLogIn/GoogleLogIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const LogIn = () => {
  return (
    <>
      <div className="min-h-screen bg-[#000000] text-white md:px-28 py-8">
        <div className="flex justify-center items-center my-32">
          <Card className=" bg-[#030711] border-2 border-[#1D283A] rounded-lg px-3 py-3 flex flex-col items-center justify-center">
            <CardHeader className="space-y-3">
              <CardTitle className="text-white font-bold text-2xl text-center">
                LSCS Central Authentication
              </CardTitle>
              <CardDescription>
                LSCS's Official Authenticator using DLSU Google Email
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GoogleLogIn></GoogleLogIn>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
