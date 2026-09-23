<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { ContentMetaItem } from '../utils/contentMeta'

interface Props {
  title?: string
  titleI18n?: string
  description?: string
  descriptionI18n?: string
  metaItems?: ContentMetaItem[]
  link?: string
  as?: 'li' | 'div'
}

const props = withDefaults(defineProps<Props>(), {})
const { t } = useI18n()

const displayTitle = computed(() => (props.titleI18n ? t(props.titleI18n) : props.title))
const displayDescription = computed(() =>
  props.descriptionI18n ? t(props.descriptionI18n) : props.description,
)
</script>

<template>
  <component :is="props.as ?? 'li'" class="seminar-item entry-item">
    <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
      <h3>{{ displayTitle }}</h3>
    </a>
    <h3 v-else>{{ displayTitle }}</h3>

    <p>{{ displayDescription }}</p>

    <template v-if="metaItems">
      <p v-for="(item, index) in metaItems" :key="index" class="meta">
        <strong v-if="item.labelI18n">{{ t(item.labelI18n) }}</strong>
        <strong v-else-if="item.label">{{ item.label }}</strong>

        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">
          <span v-if="item.valueI18n">{{ t(item.valueI18n) }}</span>
          <span v-else>{{ item.value }}</span>
        </a>
        <span v-else-if="item.valueI18n">{{ t(item.valueI18n) }}</span>
        <span v-else>{{ item.value }}</span>

        <template v-if="index < metaItems.length - 1"><br /></template>
      </p>
    </template>

    <slot></slot>
  </component>
</template>

<style scoped>
.seminar-item {
  background: color-mix(in oklab, var(--bg-secondary) 80%, var(--bg-primary));
  border: 1px solid var(--border-color);
  padding: 1.1rem;
  border-radius: var(--radius-lg);
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.seminar-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 50px var(--shadow-color-hover);
  border-color: var(--border-color);
}

.seminar-item h3 {
  margin: 0 0 0.4rem 0;
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
}

.seminar-item p {
  margin: 0.25rem 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
}

.seminar-item .meta {
  color: var(--text-tertiary);
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.seminar-item .meta strong {
  color: var(--text-secondary);
  font-weight: 600;
}

.entry-item {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: #0ea5e9;
}

a h3 {
  margin: 0 0 0.4rem 0;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

a h3:hover {
  color: #0ea5e9;
}
</style>
