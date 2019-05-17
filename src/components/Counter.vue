<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
        <button class="btn btn-primary" @click="asyn_increment({by:20, duration:500})">Asyn Increment</button>
        <button class="btn btn-primary" @click="asyn_decrement">Asyn Decrement</button>
        <hr>
        <button class="btn btn-primary" @click="increment3(100)">Increment</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions('Counter',[
                'increment',
                'decrement',
                'asyn_increment',
                'asyn_decrement',
            ]),
            ...mapActions('Counter3',[
                'increment3',
            ])
        }
    }
</script>
