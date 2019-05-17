<template>
   <div>
       <p>Counter is: {{ counter }}</p>
       <hr>
       <p>Counter3: {{counter3}}</p>
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
            ...mapGetters('Counter',[
                'counter',
            ]),
            ...mapGetters('Counter3',[
                'counter3'
            ])
        }

    }
</script>
