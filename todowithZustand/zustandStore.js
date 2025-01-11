import {create} from "zustand" 

let useZustandStore=create((set)=>({
count : 0,
count2:2,
increment: (val) => set((state) => ({ count: state.count + val })),
decrement:(val)=>set((state)=>({count:state.count-val}))
}));

export default useZustandStore;