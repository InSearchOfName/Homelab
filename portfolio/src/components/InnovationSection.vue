<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createLocationDateMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="innovation" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-innovation-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-innovation-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <ContentCard
          title="Innovation track — Exclusive Networks: firewalls (Security & Cloud)"
          titleI18n="innovation-exclusive-title"
          description="Hands-on work with firewalls and different configuration setups."
          descriptionI18n="innovation-exclusive-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda Campus',
              locationI18n: 'innovation-exclusive-location',
              date: '2/10/2025',
              dateI18n: 'innovation-exclusive-date',
            })
          "
        />
        <ContentCard
          title="Innovation track — Resilix: security"
          titleI18n="innovation-resilix-title"
          description="We covered cyber attacks, ransomware, and incident response, then worked through a practical case. My group placed second and won tickets to BSides Limburg."
          descriptionI18n="innovation-resilix-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda Campus',
              locationI18n: 'innovation-resilix-location',
              date: '9/10/2025',
              dateI18n: 'innovation-resilix-date',
            })
          "
        />
        <ContentCard
          title="Hackathon: Cyber Security Challenge Belgium 2025 (Online Qualifiers)"
          titleI18n="innovation-hackathon-title"
          description="A security competition for higher-education students featuring challenges in cryptography, reverse engineering, network analysis, web & mobile security, and forensic investigation. Participation: Team (Backdoor Boys)."
          descriptionI18n="innovation-hackathon-desc"
          link="https://platform.cybersecuritychallenge.be/"
          :metaItems="[
            {
              label: 'Location:',
              labelI18n: 'label-location',
              value: 'Online via the CTF platform of Cyber Security Challenge',
              valueI18n: 'innovation-hackathon-location',
              href: 'https://platform.cybersecuritychallenge.be/',
            },
            {
              label: 'Date:',
              labelI18n: 'label-date',
              value: '14/03/2025 10AM – 15/03/2025 6PM',
              valueI18n: 'innovation-hackathon-date',
            },
            {
              label: 'Team:',
              labelI18n: 'innovation-hackathon-team-label',
              value: 'Backdoor Boys',
              valueI18n: 'innovation-hackathon-team',
            },
            {
              label: 'Placement:',
              labelI18n: 'innovation-hackathon-placement-label',
              value: '116/358',
              valueI18n: 'innovation-hackathon-placement',
            },
          ]"
        />
        <ContentCard
          title="Hackathon: Cyber Security Challenge Belgium 2026 (Online Qualifiers)"
          titleI18n="innovation-hackathon-2026-title"
          description="A security competition for higher-education students featuring challenges in cryptography, reverse engineering, network analysis, web & mobile security, and forensic investigation. Participation: Solo."
          descriptionI18n="innovation-hackathon-2026-desc"
          link="https://platform.cybersecuritychallenge.be/"
          :metaItems="[
            {
              label: 'Location:',
              labelI18n: 'label-location',
              value: 'Online via the CTF platform of Cyber Security Challenge',
              valueI18n: 'innovation-hackathon-2026-location',
              href: 'https://platform.cybersecuritychallenge.be/',
            },
            {
              label: 'Date:',
              labelI18n: 'label-date',
              value: '27/03/2026 9AM – 28/03/2026 6PM',
              valueI18n: 'innovation-hackathon-2026-date',
            },
          ]"
        />
      </ul>
    </div>
  </section>
</template>

