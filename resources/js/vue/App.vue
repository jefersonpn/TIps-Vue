
<script setup>
import { ref } from 'vue';
import { useToast } from "primevue/usetoast";

const text = ref();
const toast = useToast();
const greet = () => {
  toast.add({ severity: 'success', summary: 'Notification', detail:  "Ciao, " + text.value, life: 3000});
}
</script>
<script>
export default{
  data:() => {
    return {
      isFav: false,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        { title: 'the way of kigns', author: 'brandon sanderson', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', isFav: true },
      ]
    }
  },
  methods: {
    toggleFav(book){
      book.isFav = !book.isFav
    },
  }
}
</script>

<template>
  <div class="container">
    <Toast></Toast>

    <div class="p-fluid formgrid grid">
      <div class="col">
        <ul>
          <li v-for="book in books" :key="book.id" @click="toggleFav(book)" >
            <h3>{{ book.title }}</h3>
            <p>{{ book.author }}</p>
            <i  :class="{ 'pi pi-heart-fill text-red text-xl': book.isFav, 'pi pi-heart text-xl': !book.isFav }"></i>
          </li>
        </ul>
      </div>
      <div class="cardForm">
        <div class="field col-12 md:col-4">
            <label for="cnpj">CNPJ</label>
            <InputMask id="cnpj" mask="99.999.999/9999-99" type="cnpj" v-model="val1" placeholder="99.999.999/9999-99" />
        </div>
      
        <div class="field col-12 md:col-4 flex">
          <div class="col-7 mr-2 my-4">
            <span class="p-float-label">
              <InputText id="txt" type="text" class="p-inputtext-sm" v-model="text" />
              <label for="txt">Nome</label>
            </span>
          </div>
          <div class="col my-4">
            <Button class="p-button-sm" label="Greet" @click="greet" icon="pi pi-user"></Button>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<style scoped>
i{
  color: red;
}
.cardForm{
  width: 300px;
}

body{
  background: #eee;
  max-width: 960px;
  margin: 20px;
}
p, h3, ul{
  margin: 0;
  padding: 0;
}
li{
  list-style-type: none;
  background: rgb(247, 245, 245);
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>