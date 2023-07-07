import { useEffect } from "react";

export const useClearRoute = () => {
    useEffect(() => {
        setTimeout(() => history.replaceState(null, "test", "/"), 0);
    }, [])
};