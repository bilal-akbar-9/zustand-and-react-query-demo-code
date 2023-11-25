import { create } from "zustand";

const useCount = create(set => ({
    likeCount : 0,
    dislikeCount : 0,
    increment: () =>
    set(state =>
    (
        { likeCount: state.likeCount + 1 }
    )
    ),
    decrement: () => set(state => ({ likeCount: state.likeCount - 1 })),
    myValue: (value) => set({ likeCount: value }),
    reset: () => set({ likeCount: 0 }),
    incrementDislike: () => set(state => ({ dislikeCount: state.dislikeCount + 1 })),
}));

export default useCount