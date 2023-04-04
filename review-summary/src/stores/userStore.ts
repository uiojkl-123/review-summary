import { create, StoreApi, UseBoundStore } from 'zustand'
import { devtools } from 'zustand/middleware';

// export const useUserStore: UseBoundStore<StoreApi<UserStore>> = create(devtools((set: any) => ({
//     user: null,
//     setUser: (user: User) => set(() => ({ user: user })),
//     userLoading: true,
//     setUserLoading: (userLoading: boolean) => set(() => ({ userLoading: userLoading })),
// })));
