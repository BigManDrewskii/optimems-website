import { Metadata } from "next"
import { SITE_URL } from "@/lib/constants/urls"
import { getTranslations } from "next-intl/server"
import { SolarControlContent } from "./SolarControlContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'solarControlPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `${SITE_URL}/${locale}/products-services/solar-control`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/products-services/solar-control`,
      languages: {
        el: `${SITE_URL}/el/products-services/solar-control`,
        en: `${SITE_URL}/en/products-services/solar-control`,
      },
    },
  }
}

export default async function SolarControlPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'solarControlPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const productSchema = createProductSchema(
    '+SolarControl',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `${SITE_URL}/${locale}` },
    { name: 'Products', url: `${SITE_URL}/${locale}/products-services` },
    { name: '+SolarControl', url: `${SITE_URL}/${locale}/products-services/solar-control` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SolarControlContent />
    </>
  )
}
