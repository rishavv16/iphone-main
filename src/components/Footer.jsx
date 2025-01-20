import React from 'react';

const footerLinks = [
  {
    label: 'Privacy Policy',
    href: '/legal/privacy',
    relatedLinks: [
      { text: 'Data Protection', url: '/data-protection' },
      { text: 'Cookie Policy', url: '/cookies' },
      { text: 'User Privacy', url: '/user-privacy' }
    ]
  },
  {
    label: 'Terms and Conditions',
    href: '/legal/terms',
    relatedLinks: [
      { text: 'User Agreement', url: '/agreement' },
      { text: 'Service Terms', url: '/service-terms' },
      { text: 'Usage Policy', url: '/usage-policy' }
    ]
  },
  {
    label: 'Sales Policy',
    href: '/legal/sales',
    relatedLinks: [
      { text: 'Return Policy', url: '/returns' },
      { text: 'Shipping Info', url: '/shipping' },
      { text: 'Payment Terms', url: '/payments' }
    ]
  },
  {
    label: 'Legal',
    href: '/legal',
    relatedLinks: [
      { text: 'Warranty Info', url: '/warranty' },
      { text: 'Terms of Sale', url: '/terms-of-sale' },
      { text: 'Legal Notices', url: '/notices' }
    ]
  },
  {
    label: 'Site Map',
    href: '/site-map',
    relatedLinks: [
      { text: 'Products', url: '/products' },
      { text: 'Support', url: '/support' },
      { text: 'Store', url: '/store' }
    ]
  }
];

const Footer = () => {
  const handleLinkClick = (e, href, relatedLinks) => {
    // You can implement custom navigation logic here
    console.log('Navigating to:', href);
    console.log('Related content:', relatedLinks);
  };

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{' '}
            <a 
              href="/store-locator" 
              className="underline text-blue hover:text-blue-700"
              onClick={(e) => handleLinkClick(e, '/store-locator', [
                { text: 'Store List', url: '/stores' },
                { text: 'Store Hours', url: '/hours' }
              ])}
            >
              Find an Apple Store{' '}
            </a>
            or{' '}
            <a 
              href="/retailer-finder" 
              className="underline text-blue hover:text-blue-700"
              onClick={(e) => handleLinkClick(e, '/retailer-finder', [
                { text: 'Authorized Resellers', url: '/resellers' },
                { text: 'Partner Stores', url: '/partners' }
              ])}
            >
              other retailer
            </a>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            <a 
              href="tel:000800-040-1966" 
              className="hover:text-blue-700"
            >
              Or call 000800-040-1966
            </a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <a 
                key={link.label}
                href={link.href}
                className="font-semibold text-gray text-xs hover:text-blue-700"
                onClick={(e) => handleLinkClick(e, link.href, link.relatedLinks)}
              >
                {link.label}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;