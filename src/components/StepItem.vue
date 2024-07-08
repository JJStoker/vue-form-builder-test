<script setup lang="ts">
import { StepType, type Step } from '@/interfaces/Steps'
import { useCounterStore } from '@/stores/counter'
import { defineProps, computed, ref } from 'vue'

export interface Props {
  step: Step
}

const { step } = defineProps<Props>()

const title = computed(() => {
  return `${step.title} - ${step.type} - ${step.id}`
})

const emit = defineEmits<{
  (e: 'change', id: Step['id'], event: string | number | boolean): void
}>()

const value = ref();
</script>

<template>
  <div>
    <h2 :title="title">{{ step.title }}</h2>
    <p>{{ step.description }}</p>
    <input
      type="text"
      height="140px"
      v-if="step.type == StepType.TEXTAREA"
      @keyup="(e) => emit('change', step.id, value)"
      v-model="value"
    />
    <input
      type="date"
      v-if="step.type == StepType.DATETIME"
      @change="(e) => emit('change', step.id, value)"
      v-model="value"
    />
    <input
      type="time"
      v-if="step.type == StepType.DATETIME"
      @change="(e) => emit('change', step.id, value)"
      v-model="value"
    />
    <select v-if="step.type == StepType.SELECT" @keydown="(e) => emit('change', step.id, value)" v-model="value">
      <option v-for="option in step.options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <input
      type="checkbox"
      v-if="step.type == StepType.CHECKBOX"
      @change="(e) => emit('change', step.id, value)"
      v-model="value"
    />
    <div v-if="step.type == StepType.RADIO">
      <div v-for="option in step.options" :key="option.value">
        <input
          type="radio"
          :id="option.value"
          :value="option.value"
          v-model="value"
          @change="(e) => emit('change', step.id, value)"
        />
        <label :for="option.value">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
