import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/Auth/authSlice";
import axios from "axios";

const OAuthCallback = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const exchangeCode = async () => {
            try {
                const params = new URLSearchParams(window.location.search);

                const code = params.get("code");

                if (!code) {
                    throw new Error("OAuth code missing");
                }

                const response = await axios.post(
                    "http://127.0.0.1:8000/api/auth/oauth/exchange",
                    {
                        code,
                    }
                );

                const { token, user } = response.data;

                dispatch(
                    setCredentials({
                        token,
                        user
                    })
                );

                navigate("/success");
                
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