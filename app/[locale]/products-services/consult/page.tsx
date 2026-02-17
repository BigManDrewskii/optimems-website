import { Metadata } from "next"
import { SITE_URL } from "@/lib/constants/urls"
import { getTranslations } from "next-intl/server"
import { ConsultContent } from "./ConsultContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'consultPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `${SITE_URL}/${locale}/products-services/consult`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/products-services/consult`,
      languages: {
        el: `${SITE_URL}/el/products-services/consult`,
        en: `${SITE_URL}/en/products-services/consult`,
      },
    },
  }
}

export default async function ConsultPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'consultPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const serviceSchema = createProductSchema(
    'Consulting Services',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `${SITE_URL}/${locale}` },
    { name: 'Products', url: `${SITE_URL}/${locale}/products-services` },
    { name: 'Consulting', url: `${SITE_URL}/${locale}/products-services/consult` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <ConsultContent />
    </>
  )
}