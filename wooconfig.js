const wooConfig = {
  CMS_URL: process.env.NEXT_PUBLIC_CMS_URL,
  CMS_GRAPHQL_URL: process.env.NEXT_PUBLIC_CMS_URL + '/graphql',
  SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE,
  SITE_LOGO_URL: '/logo/sitelogo.png',
  CURRENCY: process.env.NEXT_PUBLIC_CURRENCY,
  CURRENCY_SYMBOL: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL,
  LOCALE_NAME: process.env.NEXT_PUBLIC_LOCALE_NAME,
  CONTACT_EMAIL_TO: process.env.NEXT_PUBLIC_CONTACT_EMAIL_TO,
  SUPPORT_EMAIL_ID: 'info@woocomnext.com',
  APP_DESCRIPTION: 'Next.js GraphQL headless wordpress WooCommerce SEO',
  FRONT_END_BASE_URL: 'https://kakelstore.vercel.app',
};

module.exports = wooConfig;
