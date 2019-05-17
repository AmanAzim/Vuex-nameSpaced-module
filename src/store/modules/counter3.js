const counter3={
    namespaced:true,//Must to use nameSpace
    state:{
        counter:0,
    },
    getters:{
        counter3:state=>{
            return state.counter;
        },

    },

    mutations:{
        increment3:(state, by) => {
            state.counter+=by;
        },
    },

    actions:{
        increment3:(context, by)=>{
            context.commit('increment3', by);
        },

    }

};

export default counter3;
