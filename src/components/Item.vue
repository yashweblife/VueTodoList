<template>
    <ion-card :class="marked ? 'marked' : ''">
        <ion-card-header>
            <ion-toolbar>
                <ion-title>{{ data.title }}</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="markItem">Mark</ion-button>
                    <ion-button @click="handleDelete">Clear</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-card-header>
        <ion-card-content>
            {{ data.info }}
        </ion-card-content>
    </ion-card>
</template>
<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonButtons, IonTitle, IonToolbar, IonButton } from '@ionic/vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'ItemVue',
    components: {
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonButtons,
        IonButton,
        IonTitle,
        IonToolbar
    },
    props: ["data"],
    data: () => {
        return ({
            marked: false
        })
    },
    methods: {
        markItem() {
            this.marked = !this.marked
        },
        handleDelete() {
            this.$emit("delete-item", this.data.id)
        }
    }
})
</script>


<style lang="scss" scoped>
.marked {
    opacity: 0.3;

    ion-title {
        text-decoration: line-through;
    }
}
</style>
