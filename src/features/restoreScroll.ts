import { useEffect } from "react";

export const useRestoreScroll = () => {
    useEffect(() => {
        const savedScrollPosition = sessionStorage.getItem("scrollPosition");
        if (savedScrollPosition) {
            requestAnimationFrame(() => {
                window.scrollTo(0, parseInt(savedScrollPosition, 10));
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem("scrollPosition", window.scrollY.toString());
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
};
