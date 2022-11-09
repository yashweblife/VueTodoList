<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Vue Todo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-fab vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-list>
        <ItemVue v-for="item in list" :key="item.id" :data="item" @delete-item="handleDelete"/>
      </ion-list>
    </ion-content>      
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import ItemVue from '@/components/Item.vue';
import {generateId, ItemInterface} from '../utils'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    ItemVue
  },
  data:()=>{
    const list:ItemInterface[] = [
      {
        title:"Hello World",
        info:"test",
        id:generateId(),
        marked:false
      },
      {
        title:"World",
        info:"test",
        id:generateId(),
        marked:false
      },
      {
        title:"Hello",
        info:"test",
        id:generateId(),
        marked:false
      },
    ]
    return({
      list
    })
  },
  methods:{
    handleDelete(a:string){
      let x = this.list.filter((item:ItemInterface)=>item.id!=a)
      this.list = x
    },
    addItem(){
      this.list.push()
    }
  }
});
</script>

<style lang="scss" scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

</style>
