
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RequiredAuthProvider
        authUrl={process.env.REACT_APP_AUTH_URL}
        displayWhileLoading={<Loading />}
        displayIfLoggedOut={<RedirectToLogin />}
    >
        <YourApp />
    </RequiredAuthProvider>,
    document.getElementById("root")
);