interface PersonStructuredDataProps {
  name: string
  jobTitle: string
  url: string
  email: string
  location: string
  sameAs: string[]
  image?: string
}

export function generatePersonStructuredData({
  name,
  jobTitle,
  url,
  email,
  location,
  sameAs,
  image,
}: PersonStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    url: url,
    email: email,
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
    },
    sameAs: sameAs,
    ...(image && { image: image }),
  }
}

interface ServiceStructuredDataProps {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: string
  serviceType: string
  url: string
}

export function generateServiceStructuredData({
  name,
  description,
  provider,
  areaServed,
  serviceType,
  url,
}: ServiceStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Person",
      name: provider.name,
      url: provider.url,
    },
    areaServed: areaServed,
    serviceType: serviceType,
    url: url,
  }
}

interface OrganizationStructuredDataProps {
  name: string
  url: string
  logo: string
  contactPoint: {
    telephone: string
    contactType: string
    email: string
  }
  sameAs: string[]
}

export function generateOrganizationStructuredData({
  name,
  url,
  logo,
  contactPoint,
  sameAs,
}: OrganizationStructuredDataProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    url: url,
    logo: logo,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
    },
    sameAs: sameAs,
  }
}
