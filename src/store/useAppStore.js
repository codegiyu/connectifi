import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import createAuthSlice from "./slices/createAuthSlice";
import createChatgptSlice from "./slices/createChatgptSlice";
import createWalletSlice from "./slices/createWalletSlice";
import createCartSlice from "./slices/createCartSlice";

const useAppStore = create(
    persist(
        (...a) => ({
            ...createAuthSlice(...a),
            ...createChatgptSlice(...a),
            ...createWalletSlice(...a),
            ...createCartSlice(...a)
        }),
        {
            name: "connectifiStore",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useAppStore