<script setup lang="ts">
import { StepType } from '@/interfaces/Steps'

const stepType = defineModel<StepType>()

const stepTitles: { [key in StepType]?: string } = {
  [StepType.TEXTAREA]: 'Textarea',
  [StepType.DATETIME]: 'DATETIME',
  [StepType.SELECT]: 'Select'
}
</script>

<template>
  <select v-model="stepType">
    <option v-for="type in Object.values(StepType)" :key="type" :value="type">
      {{ stepTitles[type] || 'PLACEHOLDER' }} - {{ type }}
    </option>
  </select>
</template>
