import create from 'zustand';

const useStore = create((set: any, get: any) => ({
  counter: 2,
  changeCounter: (payload: number) => set({ counter: payload })
}));

export default useStore;