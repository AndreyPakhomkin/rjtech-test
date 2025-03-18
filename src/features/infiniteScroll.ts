import { AnyAction } from "@reduxjs/toolkit";
import { useEffect, RefObject } from "react";
import { useAppDispatch } from "src/shared/hooks/storeHooks";

interface UseInfiniteScrollProps {
    ref: RefObject<HTMLDivElement>;
    isFetching: boolean;
    isLoading: boolean;
    action: () => AnyAction;
}

export const useInfiniteScroll = ({ ref, isFetching, isLoading, action }: UseInfiniteScrollProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isFetching && !isLoading) {
                    dispatch(action());
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isFetching, isLoading, dispatch, action, ref]);
};
