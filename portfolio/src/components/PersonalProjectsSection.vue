<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ContentCard from './ContentCard.vue'
import { createRepositoryMeta } from '../utils/contentMeta'

const { t } = useI18n()
</script>

<template>
  <section id="personalProject" class="section">
    <div class="container">
      <div class="section__header">
        <h2 class="section__title">{{ t('section-personalProject-title') }}</h2>
      </div>
      <p class="section__lede">{{ t('section-personalProject-desc') }}</p>

      <ul class="entry-list grid grid--2">
        <ContentCard
          title="Book Writer"
          titleI18n="personal-bookwriter-title"
          description="A client-side Minecraft Fabric mod: run .write in chat to fill writable books from your inventory, with titles, automatic splitting across volumes, and async signing so the game stays responsive."
          descriptionI18n="personal-bookwriter-desc"
          link="https://modrinth.com/mod/insearchofnames-book-writer"
          :metaItems="createRepositoryMeta('https://github.com/InSearchOfName/Book-Writer')"
        />
        <ContentCard
          title="Fuck YT Shorts"
          titleI18n="personal-ytshorts-title"
          description="A lightweight Firefox add-on that hides YouTube Shorts shelves and suggestions with simple injected CSS."
          descriptionI18n="personal-ytshorts-desc"
          link="https://addons.mozilla.org/en-US/firefox/addon/fuck-ytshorts-v0_1/"
          :metaItems="createRepositoryMeta('https://github.com/InSearchOfName/Fuck-YTshorts')"
        />
        <ContentCard
          title="HTTP Server"
          titleI18n="personal-http-title"
          description="A small C HTTP server I wrote to learn the language—Makefile build, serves a sample index.html, and keeps the scope realistic rather than RFC-complete."
          descriptionI18n="personal-http-desc"
          link="https://github.com/InSearchOfName/HTTP-Server"
          :metaItems="createRepositoryMeta('https://github.com/InSearchOfName/HTTP-Server')"
        />
        <ContentCard
          title="Homelab"
          titleI18n="personal-homelab-title"
          description="I run a homelab on Proxmox for virtualization and workloads, and I host Jenkins there for builds and automation."
          descriptionI18n="personal-homelab-desc"
        />
        <ContentCard
          title="K3s-ansible"
          titleI18n="personal-k3s-title"
          description="A simple ansible script that autonomously sets up an k3s cluster. I see it as a finished project."
          descriptionI18n="personal-k3s-desc"
          :metaItems="createRepositoryMeta('https://github.com/InSearchOfName/K3s-Ansible')"
        />
      </ul>
    </div>
  </section>
</template>

