<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <input type="text" v-bind:value="value1" v-on:input="updateValue"/>
                <input type="text" v-model="value2"/>
                <p>{{value2}}</p>
                <hr>
                <app-result2></app-result2>
                <hr>
                <app-counter2></app-counter2>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';
    import Counter2 from './components/Counter2.vue';
    import Result2 from './components/Result2.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appCounter2:Counter2,
            appResult2:Result2,
        },
        data() {
            return {
                counter: 0
            }
        },
        computed:{
            value1(){
                return this.$store.getters.value;
            },
            value2:{
                get(){
                    return this.$store.getters.value;
                },
                set(event){
                    this.$store.dispatch('updateValue', event);
                }
            }
        },
        methods:{
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);
            }
        }
    }
</script>

