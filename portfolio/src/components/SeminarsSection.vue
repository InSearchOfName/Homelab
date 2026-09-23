<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createLocationDateMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="seminars" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-seminars-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-seminars-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <ContentCard
          title="Gluo: Multi-cloud (SNB)"
          titleI18n="seminar-gluo-title"
          description="A seminar on multi-cloud where we used Gluo hands-on labs to set up a multi-cloud infrastructure across AWS and Azure."
          descriptionI18n="seminar-gluo-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda-campus',
              locationI18n: 'seminar-gluo-location',
              date: '4/3/2025',
              dateI18n: 'seminar-gluo-date',
            })
          "
        />
        <ContentCard
          title="Toreon: Ethical hacking (SNB/all)"
          titleI18n="seminar-toreon-title"
          description="A seminar on ethical hacking that explained how we could find our first CVE and included several CTF challenges."
          descriptionI18n="seminar-toreon-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda-campus',
              locationI18n: 'seminar-toreon-location',
              date: '11/3/2025',
              dateI18n: 'seminar-toreon-date',
            })
          "
        />
        <ContentCard
          title="Police: Digital Investigation (SNB/all)"
          titleI18n="seminar-police-title"
          description="A seminar where police cases were presented to demonstrate their methods and the type of work they perform."
          descriptionI18n="seminar-police-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda-campus',
              locationI18n: 'seminar-police-location',
              date: '1/04/2025',
              dateI18n: 'seminar-police-date',
            })
          "
        />
        <ContentCard
          title="Cegeka: Azure Networking (SNB)"
          titleI18n="seminar-cegeka-title"
          description="A seminar on the nuances of configuring efficient, secure and scalable networks in Azure cloud."
          descriptionI18n="seminar-cegeka-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda-campus',
              locationI18n: 'seminar-cegeka-location',
              date: '22/04/2025',
              dateI18n: 'seminar-cegeka-date',
            })
          "
        />
        <ContentCard
          title="Brightest: Pentesting — break in to secure (SNB)"
          titleI18n="seminar-brightest-title"
          description="A seminar where we learned the basics of penetration testing."
          descriptionI18n="seminar-brightest-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda Campus',
              locationI18n: 'seminar-brightest-location',
              date: '5/11/2025',
              dateI18n: 'seminar-brightest-date',
            })
          "
        />
        <ContentCard
          title="Secwise: Cyber security with a focus on identity (SNB/all)"
          titleI18n="seminar-secwise-title"
          description="A seminar on how identity plays a central role in cybersecurity."
          descriptionI18n="seminar-secwise-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda Campus',
              locationI18n: 'seminar-secwise-location',
              date: '12/11/2025',
              dateI18n: 'seminar-secwise-date',
            })
          "
        />
        <ContentCard
          title="Gluo: DevSecOps (SNB)"
          titleI18n="seminar-gluo-devsecops-title"
          description="A seminar on how we as developers can bring security into our DevOps workflows."
          descriptionI18n="seminar-gluo-devsecops-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Corda Campus',
              locationI18n: 'seminar-gluo-devsecops-location',
              date: '3/12/2025',
              dateI18n: 'seminar-gluo-devsecops-date',
            })
          "
        />
        <ContentCard
          title="Cegeka: Data center visit (SNB)"
          titleI18n="seminar-cegeka-dc-title"
          description="A visit to Cegeka’s data center to see how a facility like this looks and operates on the inside."
          descriptionI18n="seminar-cegeka-dc-desc"
          :metaItems="
            createLocationDateMeta({
              location: 'Universiteitslaan 9, Hasselt (Cegeka)',
              locationI18n: 'seminar-cegeka-dc-location',
              date: '10/12/2025',
              dateI18n: 'seminar-cegeka-dc-date',
            })
          "
        />
      </ul>
    </div>
  </section>
</template>

