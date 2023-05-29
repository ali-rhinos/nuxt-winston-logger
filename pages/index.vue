<template>
  <div>
    Hello world
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup(){
    // watch(_,()=>{})
    const callAPI = async ()=>{
      const { data: count } = await useFetch('/api/hello')
    }
    callAPI()
  }
})
</script>