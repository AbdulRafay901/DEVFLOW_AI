import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const exchangeCode = async () => {
            try {
                const params = new URLSearchParams(window.location.search);

                const code = params.get("code");

                if (!code) {
                    throw new Error("OAuth code missing");
                }

                const response = await axios.post(
                    "http://backend.test/api/auth/oauth/exchange",
                    {
                        code,
                    }
                );

                const { token, user } = response.data;

                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));

                navigate("/");
            } catch (error) {
                console.error(error);

                navigate("/login");
            }
        };

        exchangeCode();
    }, [navigate]);

    return <p>Logging you in...</p>;
};

export default OAuthCallback;