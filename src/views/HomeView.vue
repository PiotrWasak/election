<script setup lang="ts">
import { firebaseDb } from '@/main';
import { doc, setDoc } from "firebase/firestore";
import { ref, watch } from 'vue';
import { useCurrentUser, useDocument } from 'vuefire';


const user = useCurrentUser();
let predictions = useDocument<PartyForm>(doc(firebaseDb, 'predictions', String(user.value?.email)))

let partyForm = ref({
  PiS: 0,
  KO: 0,
  TD: 0,
  Lewica: 0,
  Konfa: 0,
  BS: 0
})

type PartyForm = typeof partyForm;

watch(() => predictions.value, (value) => {
  partyForm.value = {
    ...value
  };
})

watch(() => user.value, () => {
  predictions = useDocument(doc(firebaseDb, 'predictions', String(user.value?.email)))
})


async function submit() {
  await setDoc(doc(firebaseDb, "predictions", String(user.value?.email)), partyForm.value);
}
</script>

<template>
  <main>
    <div v-if="predictions" class="my-3">
      <h3>Twoje typy:</h3>
      <p v-for="(prediction, index) in Object.keys(predictions)" :key="index">{{ prediction }} - {{
        predictions[prediction]
      }}%</p>
    </div>
    <FormKit @submit="submit" type="form">
      <FormKit v-model="partyForm.PiS" validation="required" help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)"
        number step="0.1" placeholder="Np: 37.5" label="Prawo i Sprawiedliwość" type="number" />
      <FormKit v-model="partyForm.KO" validation="required" help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)"
        number placeholder="Np: 37.5" label="Koalicja Obywatelska" type="number" />
      <FormKit v-model="partyForm.TD" validation="required" help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)"
        number placeholder="Np: 37.5" label="Trzecia Droga" type="number" />
      <FormKit v-model="partyForm.Lewica" validation="required"
        help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)" number placeholder="Np: 37.5" label="Lewica"
        type="number" />
      <FormKit v-model="partyForm.Konfa" validation="required"
        help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)" number placeholder="Np: 37.5" label="Konfederacja"
        type="number" />
      <FormKit v-model="partyForm.BS" validation="required" help="Podaj z dokładnością do 1 miejsca po przecinku(kropce)"
        number placeholder="Np: 37.5" label="Bezpartyjni Samorządowcy" type="number" />

      <span v-if="partyForm">Suma: {{ Object.values(partyForm).reduce((accumulator, currentValue) => accumulator +
        currentValue, 0)
      }}%</span>
    </FormKit>
  </main>
</template>
<style scoped>
img {
  cursor: pointer;
}
</style>
