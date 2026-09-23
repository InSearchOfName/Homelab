<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createLocationDateMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="internationalization" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-internationalization-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-internationalization-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <li class="internationalization-row">
          <div class="photo-slot" aria-label="FOSDEM photo placeholder">
            <img
              class="photo-slot__img"
              src="/img/Fosdem.jpg"
              alt="FOSDEM"
              loading="lazy"
              decoding="async"
            />
          </div>

          <ContentCard
            as="div"
            class="internationalization-card"
            title="FOSDEM"
            titleI18n="internationalization-fosdem-title"
            description="FOSDEM is an annual two-day conference in Brussels on free and open-source software. Developers from around the world share talks, workshops, and projects."
            descriptionI18n="internationalization-fosdem-desc"
            link="https://fosdem.org/"
            :metaItems="
              createLocationDateMeta({
                location: 'ULB, Brussels',
                locationI18n: 'internationalization-fosdem-location',
                date: '31/01/2026 through 1/02/2026',
                dateI18n: 'internationalization-fosdem-date',
              })
            "
          />
        </li>

        <li class="internationalization-row internationalization-row--reverse">
          <ContentCard
            as="div"
            class="internationalization-card"
            title="Berlin Trip"
            titleI18n="internationalization-berlintrip-title"
            description="Study trip to Germany focused on higher education, industry innovation, and local tech communities."
            descriptionI18n="internationalization-berlintrip-desc"
            :metaItems="
              createLocationDateMeta({
                location: 'Germany (Bielefeld, Hannover, Berlin)',
                locationI18n: 'internationalization-berlintrip-location',
                date: '22/04/2026 through 25/04/2026',
                dateI18n: 'internationalization-berlintrip-date',
              })
            "
          >
            <ul class="trip-itinerary">
              <li>
                <p class="trip-itinerary__title">
                  <strong>{{ t('internationalization-berlintrip-bielefeld-title') }}</strong>
                </p>
                <p>{{ t('internationalization-berlintrip-bielefeld-desc') }}</p>
              </li>
              <li>
                <p class="trip-itinerary__title">
                  <strong>
                    <a
                      href="https://www.hannovermesse.de/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ t('internationalization-berlintrip-hannover-title') }}
                    </a>
                  </strong>
                </p>
                <p>{{ t('internationalization-berlintrip-hannover-desc') }}</p>
              </li>
              <li>
                <p class="trip-itinerary__title">
                  <strong>{{ t('internationalization-berlintrip-berlin-title') }}</strong>
                </p>
                <p>
                  {{ t('internationalization-berlintrip-berlin-desc-before') }}
                  <a href="https://www.ccc.de/en/" target="_blank" rel="noopener noreferrer">
                    {{ t('internationalization-berlintrip-ccc-label') }}
                  </a>
                  {{ t('internationalization-berlintrip-berlin-desc-after') }}
                </p>
              </li>
            </ul>
          </ContentCard>

          <div class="photo-slot" aria-label="Berlin Trip photo placeholder">
            <img
              class="photo-slot__img"
              src="/img/berlin_phil.jpg"
              alt="Berlin Trip"
              loading="lazy"
              decoding="async"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.entry-list.grid {
  align-items: start;
}

.entry-list.grid--2 {
  grid-template-columns: 1fr;
}

.internationalization-row {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
  align-items: start;
}

@media (min-width: 720px) {
  .internationalization-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    align-items: stretch;
  }

  .internationalization-row--reverse {
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  }

  .photo-slot {
    height: 100%;
    min-height: 0;
  }
}

.photo-slot {
  margin-top: 0;
  border: 1px dashed var(--border-color);
  border-radius: var(--radius-md);
  background: color-mix(in oklab, var(--bg-secondary) 60%, var(--bg-primary));
  color: var(--text-tertiary);
  min-height: 160px;
  overflow: hidden;
  position: relative;
}

.photo-slot__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.internationalization-card {
  height: 100%;
}

.trip-itinerary {
  margin: var(--space-3) 0 0 0;
  padding-left: 1.25rem;
}

.trip-itinerary li {
  margin: 0 0 var(--space-3) 0;
}

.trip-itinerary li:last-child {
  margin-bottom: 0;
}

.trip-itinerary__title {
  margin-top: 0.55rem;
}
</style>

