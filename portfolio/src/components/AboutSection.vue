<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="section">
    <div class="container about-grid">
      <aside class="about-right" aria-labelledby="skills-heading">
        <h3 id="skills-heading">{{ t('section-skills-title') }}</h3>
        <ul class="skill-list">
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-aws" aria-hidden="false" title="AWS">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                alt="AWS"
                data-i18n="skill-aws"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-azure" aria-hidden="false" title="Azure">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
                alt="Azure"
                data-i18n="skill-azure"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-ansible" aria-hidden="false" title="Ansible">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg"
                alt="Ansible"
                data-i18n="skill-ansible"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-jenkins" aria-hidden="false" title="Jenkins">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg"
                alt="Jenkins"
                data-i18n="skill-jenkins"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a
              class="skill-icon"
              data-i18n="skill-githubactions"
              aria-hidden="false"
              title="GitHub Actions"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
                alt="GitHub Actions"
                data-i18n="skill-githubactions"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a
              href="https://github.com/InSearchOfName"
              class="skill-icon"
              data-i18n="skill-github"
              aria-hidden="false"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                alt="GitHub"
                data-i18n="skill-github"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-java" aria-hidden="false" title="Java">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="Java"
                data-i18n="skill-java"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-python" aria-hidden="false" title="Python">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="Python"
                data-i18n="skill-python"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-linux" aria-hidden="false" title="Linux">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                alt="Linux"
                data-i18n="skill-linux"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a
              class="skill-icon"
              data-i18n="skill-cloudflare"
              aria-hidden="false"
              title="Cloudflare"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg"
                alt="Cloudflare"
                data-i18n="skill-cloudflare"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-docker" aria-hidden="false" title="Docker">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                alt="Docker"
                data-i18n="skill-docker"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-k3s" aria-hidden="false" title="k3s">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k3s/k3s-original.svg"
                alt="k3s"
                data-i18n="skill-k3s"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a
              class="skill-icon"
              data-i18n="skill-postgresql"
              aria-hidden="false"
              title="PostgreSQL"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
                data-i18n="skill-postgresql"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
          <li class="skill-item entry-item">
            <a class="skill-icon" data-i18n="skill-mongodb" aria-hidden="false" title="MongoDB">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
                data-i18n="skill-mongodb"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </a>
          </li>
        </ul>
      </aside>

      <div class="about-left">
        <div class="section__header">
          <h2 class="section__title">{{ t('section-about-title') }}</h2>
        </div>
        <p class="section__lede">{{ t('section-about-intro') }}</p>
        <p>{{ t('section-about-workstyle') }}</p>
        <p>{{ t('section-about-teamwork') }}</p>
        <p>{{ t('section-about-technical') }}</p>
        <p>{{ t('section-about-ambition') }}</p>

        <h4 id="socials-heading">{{ t('section-socials-title') }}</h4>
        <div class="social-links">
          <a
            class="social-link"
            href="https://github.com/InSearchOfName"
            target="_blank"
            rel="noopener noreferrer"
            data-i18n="social-github-label"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <img
              class="social-icon"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub profile"
              data-i18n="social-github-label"
              loading="lazy"
              decoding="async"
              fetchpriority="low"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  grid-template-areas: 'left right';
  gap: var(--space-6);
  align-items: start;
}

.about-left {
  grid-area: left;
  min-width: 0;
}

.about-right {
  grid-area: right;
  width: 320px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 1rem;
  box-sizing: border-box;
  position: sticky;
  top: calc(var(--site-header-height) + var(--space-4));
  color: var(--text-primary);
  box-shadow: 0 10px 40px var(--shadow-color);
}

.about-right h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: var(--text-primary);
}

.skill-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-icon {
  display: inline-flex;
  width: 72px;
  height: 72px;
  border-radius: 14px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background 0.3s ease;
  background: var(--skill-bg);
}

.skill-icon img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
  display: block;
}

.skill-icon:focus-visible,
.skill-icon:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--shadow-color-hover);
  outline: none;
  background: var(--skill-bg-hover);
}

.social-links {
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  align-items: center;
  margin-top: 0.3rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 0;
}

.social-icon {
  width: 56px;
  height: 56px;
  display: block;
  object-fit: contain;
  transition:
    width 0.15s,
    height 0.15s;
}

h4 {
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

@media (max-width: 860px) {
  .about-grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      'left'
      'right';
    gap: var(--space-4);
  }

  .about-right {
    width: 100%;
    position: static;
  }

  .skill-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0;
    margin: 0;
    justify-items: center;
  }
}
</style>
