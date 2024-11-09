import { GoogleOAuthProvider } from "@react-oauth/google";
import { Layout } from "./layout/Layout";

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="742104294908-maet14jq2ohqpl0uu0ma4qpllc30t0k5.apps.googleusercontent.com">
        <Layout></Layout>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;
