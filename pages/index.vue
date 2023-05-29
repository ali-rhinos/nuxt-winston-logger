<template>
  <div>
    Hello world
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup(){
    throw new Error("You")
    // const callAPI = async ()=>{
    //   const resp = await useFetch('/api/hello')
    // }
    // callAPI()
  }
})
</script>