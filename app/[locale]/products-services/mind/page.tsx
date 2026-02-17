import { Metadata } from "next"
import { SITE_URL } from "@/lib/constants/urls"
import { getTranslations } from "next-intl/server"
import { MindContent } from "./MindContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'mindPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `${SITE_URL}/${locale}/products-services/mind`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}/products-services/mind`,
      languages: {
        el: `${SITE_URL}/el/products-services/mind`,
        en: `${SITE_URL}/en/products-services/mind`,
      },
    },
  }
}

export default async function MindPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'mindPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const productSchema = createProductSchema(
    '+Mind',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `${SITE_URL}/${locale}` },
    { name: 'Products', url: `${SITE_URL}/${locale}/products-services` },
    { name: '+Mind', url: `${SITE_URL}/${locale}/products-services/mind` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <MindContent />
    </>
  )
}
