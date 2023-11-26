import {ref}from "vue";
//fetch edilen fonksiyonu bu sayfadan alarak kullanırız
const getContentsFetch=()=>{
    const contents=ref([]);
    const err=ref(null);
    const getContents = async()=>{
      try{
      let data= await fetch('https://jsonplaceholder.typicode.com/posts');
      contents.value = await data.json();
  
      if(!data.ok){
        throw new Error("Verilere Erişilemedi.");
      }
      }catch(erorr){
      err.value=erorr.message;
       }
    };
    return {contents ,err ,getContents};
};

export default getContentsFetch;