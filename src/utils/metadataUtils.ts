
// SEO metadata utilities

/**
 * Updates document title and meta tags dynamically
 * @param title Page title
 * @param description Meta description
 */
export const updateMetadata = (title: string, description: string): void => {
  // Update document title
  document.title = title ? `${title} | GIC Sports` : 'GIC Sports - Web3 Solutions for Athletes';
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'GIC Sports empowers athletes with Web3 tools, scouting, and investment opportunities.');
  }
  
  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
  if (ogTitle) {
    ogTitle.setAttribute('content', title ? `${title} | GIC Sports` : 'GIC Sports - Web3 Solutions for Athletes');
  }
  
  if (ogDescription) {
    ogDescription.setAttribute('content', description || 'GIC Sports empowers athletes with Web3 tools, scouting, and investment opportunities.');
  }
  
  // Update Twitter tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title ? `${title} | GIC Sports` : 'GIC Sports - Web3 Solutions for Athletes');
  }
  
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description || 'GIC Sports empowers athletes with Web3 tools, scouting, and investment opportunities.');
  }
};

/**
 * Generates structured data for different page types
 * @param type Type of structured data
 * @param data Custom data for the structured data
 */
export const generateStructuredData = (type: 'website' | 'organization', data?: any): string => {
  let structuredData = {};
  
  switch (type) {
    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'GIC Sports',
        'url': 'https://gicsports.com/',
        'description': 'GIC Sports empowers athletes with Web3 tools, scouting, and investment opportunities.',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://gicsports.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        },
        ...data
      };
      break;
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'GIC Sports',
        'url': 'https://gicsports.com/',
        'logo': 'https://gicsports.com/logo.png',
        'sameAs': [
          'https://twitter.com/gicsports',
          'https://facebook.com/gicsports',
          'https://linkedin.com/company/gicsports'
        ],
        ...data
      };
      break;
    default:
      break;
  }
  
  return JSON.stringify(structuredData);
};
