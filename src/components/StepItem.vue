<script setup lang="ts">
import { StepType, type Step } from '@/interfaces/Steps'
import { computed } from 'vue'

export interface Props {
  step: Step
}

const props = defineProps<Props>()
const value = defineModel<Step["value"]>()
const title = computed(() => `${props.step.title} - ${props.step.type} - ${props.step.id}`)

</script>

<template>
  <div>
    <h2 :title="title">{{ props.step.title }}</h2>
    <p>{{ props.step.description }}</p>
    <textarea v-if="props.step.type == StepType.TEXTAREA" v-model="value" rows="4" />
    <input type="date" v-if="props.step.type == StepType.DATETIME" v-model="value" />
    <input type="time" v-if="props.step.type == StepType.DATETIME" v-model="value" />
    <select v-if="props.step.type == StepType.SELECT" v-model="value">
      <option
        v-for="option in props.step.options"
        :key="`${props.step.id}-${option.value}`"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <input type="checkbox" v-if="props.step.type == StepType.CHECKBOX" v-model="value" />
    <div v-if="props.step.type == StepType.RADIO">
      <div v-for="option in props.step.options" :key="`${props.step.id}-${option.value}`">
        <input
          type="radio"
          :id="`${props.step.id}-${option.value}`"
          :value="option.value"
          v-model="value"
        />
        <label :for="`${props.step.id}-${option.value}`">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
