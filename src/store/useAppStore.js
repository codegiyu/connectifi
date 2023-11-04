import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import createAuthSlice from "./slices/createAuthSlice";
import createChatgptSlice from "./slices/createChatgptSlice";

const useAppStore = create(
    persist(
        (...a) => ({
            ...createAuthSlice(...a),
            ...createChatgptSlice(...a)
        }),
        {
            name: "connectifiStore",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)

export default useAppStore