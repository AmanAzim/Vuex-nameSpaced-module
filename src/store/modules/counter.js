const counter={
    namespaced:true,//Must to use nameSpace
    state:{
        counter:0,
    },
    getters:{
        counter:state=>{
            return state.counter;
        }
    },

    mutations:{
        increment:(state, by) => {
            state.counter+=by;
        },
        decrement:state => {
            state.counter--;
        },
    },

    actions:{
        increment:(context, by)=>{
            context.commit('increment', by);
        },
        decrement:({commit})=>{
            commit('decrement');
        },
        asyn_increment:({commit}, payload)=>{
            setTimeout(()=>{
                commit('increment', payload.by);
            }, payload.duration);
        },
        asyn_decrement:({commit})=>{
            setTimeout(()=>{
                commit('decrement');
            }, 1000);
         }
    }

};

export default counter;
