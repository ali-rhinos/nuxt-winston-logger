<template>
  <div>
    Hello world
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup(){
    const callAPI = async ()=>{
      const resp = await useFetch('/api/hello')
    }
    callAPI()
  }
})
</script>