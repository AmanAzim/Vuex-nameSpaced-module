<template>
    <div>
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
    export default {
        methods: {
            ...mapActions('Counter2',[
                'increment',
            ])
        }
    }
</script>
