

const createWalletSlice = (set, get) => ({
    walletLoading: false,
    fundWallet: async (amount) => {
        try {
            set({ walletLoading: true });
            
            const balance = get().user.walletBalance;
            const updateUser = get().updateUser;
            const res = await updateUser([{ property: "walletBalance", newValue: Number((+balance || 0) + +amount) }]);
            return res;
        } catch (error) {
            console.error({fundWalletErr: error});
        } finally {
            set({ walletLoading: false})
        }
    },
    buyItem: async (amount) => {
        try {
            set({ walletLoading: true });
            
            const balance = get().user.walletBalance;
            const updateUser = get().updateUser;
            const res = await updateUser([{ property: "walletBalance", newValue: Number((+balance || 0) - +amount) }]);
            return res;
        } catch (error) {
            console.error({fundWalletErr: error});
        } finally {
            set({ walletLoading: false})
        }
    }
})

export default createWalletSlice;