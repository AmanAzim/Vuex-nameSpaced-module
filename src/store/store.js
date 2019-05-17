import Vue from  'vue';
import Vuex from 'vuex';

import Counter from './modules/counter';
import Counter2 from './modules/counter2';
import Counter3 from './modules/counter3';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        value:0,
    },
    getters:{
        value:state=>{
            return state.value;
        }
    },
 /* mutations: {
        updateValue:(state, payload)=>{
              state.value=payload;
        }
    },
    actions:{
        updateValue:({commit}, payload)=>{
            commit('updateValue', payload);
        }
    }, */
    mutations,
    actions,
    modules:{
        Counter,
        Counter2,
        Counter3,
    }
});
