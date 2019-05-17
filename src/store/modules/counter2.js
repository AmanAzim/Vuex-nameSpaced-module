const counter2={
    namespaced:true,//Must to use nameSpace
    state:{
        counter:0,
    },
    getters:{
        counter:state=>{
            return state.counter;
        },

    },

    mutations:{
        increment:(state, by) => {
            state.counter+=by;
        },
    },

    actions:{
        increment:(context, by)=>{
            context.commit('increment', by);
        },

    }

};

export default counter2;
