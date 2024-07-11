<script setup lang="ts">
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'
import { StepType, type Step } from '../interfaces/Steps'
import StepItem from '@/components/StepItem.vue'
import StepTypePicker from '@/components/StepTypePicker.vue';

const defaultOptions: { [key in StepType]?: Step['options'] } = {
  [StepType.RADIO]: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]
}

const steps = ref<Step[]>([
  {
    id: uuid(),
    title: 'Step 1',
    description: 'This is step 1',
    type: StepType.TEXTAREA
  },
  {
    id: uuid(),
    title: 'Step 2',
    description: 'This is step 2',
    type: StepType.RADIO,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' }
    ]
  }
])
const newStep = ref<StepType>()

function addStepItem() {
  steps.value.push({
    id: uuid(),
    title: `Step ${steps.value.length + 1}`,
    description: `This is step ${steps.value.length + 1}`,
    type: newStep.value || StepType.TEXTAREA,
    options: newStep.value ? defaultOptions[newStep.value] : []
  })
}

function removeRandomStepItem() {
  steps.value.splice(Math.floor(Math.random() * steps.value.length), 1)
}
</script>

<template>
  <h2>My Form Builder</h2>
  <TransitionGroup name="slide-fade">
    <StepItem v-for="step in steps" :key="step.id" :step="step" v-model="step.value" />
  </TransitionGroup>
  <StepTypePicker v-model="newStep" />
  <button @click="addStepItem">Add Step</button>
  <button @click="removeRandomStepItem">Remove random step</button>
  <pre>{{ steps }}</pre>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.1, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
