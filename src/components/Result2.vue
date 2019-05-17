<template>
    <div>
        <p>Counter is: {{ counter }}</p>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return {
                // doubleCounter:this.$store.getters.doubleCounter, //this will never work only computed property works
            }
        },
        computed:{
            ...mapGetters('Counter2',[
                'counter'
            ])
        }

    }
</script>
