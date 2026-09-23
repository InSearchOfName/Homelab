<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createLocationDateMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="personalDevelopment" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-personalDevelopment-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-personalDevelopment-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <ContentCard
          title="Projectweek 2TIN"
          titleI18n="development-projectweek-title"
          description="First week of the research project where we got to know our teams and an overview of what the project will entail."
          descriptionI18n="development-projectweek-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'PXL-campus',
              locationI18n: 'development-projectweek-location',
              date: 'from 10/02/2025 till 14/03/2025',
              dateI18n: 'development-projectweek-date',
            })
          "
        />
        <ContentCard
          title="POP session 2TIN: Brain at work! Do not disturb!"
          titleI18n="development-pop-title"
          description="A session about smartphone habits and how focus today is lower than in the past."
          descriptionI18n="development-pop-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'PXL-campus, Corda-campus',
              locationI18n: 'development-pop-location',
              date: 'from 18/02/2025 till 25/03/2025',
              dateI18n: 'development-pop-date',
            })
          "
        />
        <ContentCard
          title="POP session 2TIN: POPping"
          titleI18n="development-popping-title"
          description="Team-building activities on how we can collaborate effectively in a team."
          descriptionI18n="development-popping-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'PXL Campus',
              locationI18n: 'development-popping-location',
              date: '24/03/2025',
              dateI18n: 'development-popping-date',
            })
          "
        />
        <ContentCard
          title="POP session 3TIN: My team and I"
          titleI18n="development-myteam-title"
          description="A session on how we should work as a team and the core values that go with it."
          descriptionI18n="development-myteam-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'PXL Campus, Corda Campus',
              locationI18n: 'development-myteam-location',
              date: '8/10/2025',
              dateI18n: 'development-myteam-date',
            })
          "
        />
      </ul>
    </div>
  </section>
</template>

