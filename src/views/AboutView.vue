<template>
    <div class="about">
    <div v-for="content in contents" :key="content">
    {{ content.title }}
    </div>
    <div v-if="err">{{ err }}</div>
  </div>
</template>

<script>
import {ref} from "vue";
import getContentFetch from "../composables/getContentsFetch";
export default {
 setup(){
  const  {contents ,err ,getContents}=getContentFetch();
  getContents();
  return {contents , err}
 }
}
</script>

<style>

</style>