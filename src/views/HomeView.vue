<script setup lang="ts">
import { firebaseDb } from '@/main';
import { collection, doc, setDoc } from "firebase/firestore";
import { computed, ref, watch } from 'vue';
import { useCollection, useCurrentUser, useDocument } from 'vuefire';


const user = useCurrentUser();
let predictions = useDocument<PartyForm>(doc(firebaseDb, 'predictions', String(user.value?.email)))

const allPredictions = useCollection(collection(firebaseDb, 'predictions'))


let partyForm = ref({
  PiS: undefined,
  KO: undefined,
  TD: undefined,
  Lewica: undefined,
  Konfa: undefined,
  BS: undefined
})

type PartyForm = typeof partyForm;

const official: PartyForm = {
  PiS: 35.38,
  KO: 30.70,
  TD: 14.40,
  Lewica: 8.61,
  Konfa: 7.16,
  BS: 1.86
}

const parties = ['PiS', 'KO', 'TD', 'Lewica', 'Konfa', 'BS']

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

const showForm = false;

const yourResult = computed(() => {
  if (!predictions.value) return;
  let pointsArray = [];
  parties.forEach(party => {
    let points = 100;
    const difference = predictions.value[party] - official[party];
    const differenceRounded = difference.toFixed(1);
    points -= Math.abs(differenceRounded) * 10;
    pointsArray.push({
      points,
      party
    })
  })
  return pointsArray
});

const resultSum = computed(() => yourResult.value?.reduce((accumulator, currentValue) => accumulator + currentValue.points, 0))
</script>

<template>
  <main v-if="user">
    <div v-if="predictions" class="my-3">
      <h3>Twoje typy:</h3>
      <p v-for="(prediction, index) in Object.keys(predictions)" :key="index">{{ prediction }} - {{
        predictions[prediction]
      }}%</p>
      <h3 class="mt-5">Oficjalne wyniki:</h3>
      <p v-for="(element, index) in Object.keys(official)" :key="index">{{ element }} - {{
        official[element]
      }}%</p>
      <h3 class="mt-5">Twoje punkty:</h3>
      <p v-for="(element, index) in yourResult" :key="index">{{ element.party }} - {{ element.points }} </p>
      <h3 class="mt-5">Suma</h3>
      <p>{{ resultSum }}</p>
    </div>
    <FormKit v-if="showForm" @submit="submit" type="form">
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
  <main v-else>
    Najpierw musisz się zalogować
  </main>
</template>
<style scoped>
img {
  cursor: pointer;
}
</style>
