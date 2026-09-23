export interface ContentMetaItem {
  label?: string
  labelI18n?: string
  value?: string
  valueI18n?: string
  href?: string
}

interface LocationDateMetaArgs {
  location: string
  locationI18n: string
  date: string
  dateI18n: string
  locationHref?: string
}

export const createLocationDateMeta = ({
  location,
  locationI18n,
  date,
  dateI18n,
  locationHref,
}: LocationDateMetaArgs): ContentMetaItem[] => [
  {
    label: 'Location:',
    labelI18n: 'label-location',
    value: location,
    valueI18n: locationI18n,
    href: locationHref,
  },
  {
    label: 'Date:',
    labelI18n: 'label-date',
    value: date,
    valueI18n: dateI18n,
  },
]

export const createRepositoryMeta = (
  href: string,
  valueI18n = 'personal-k3s-link-text',
): ContentMetaItem[] => [
  {
    value: 'Repository',
    valueI18n,
    href,
  },
]
