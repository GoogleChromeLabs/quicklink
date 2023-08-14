/* eslint-env node */

'use strict';

const process = require('node:process');

const IS_NETLIFY = process.env.NETLIFY === 'true';

module.exports = () => {
  return {
    title: 'Quicklink',
    subtitle: 'Instant next-page navigations',
    description: 'Faster subsequent page-loads by prefetching in-viewport links during idle time.',
    logo: '/assets/images/logos/quicklink.svg',
    socialImage: '/assets/images/og-image.png',
    // If we are on Netlify, use the `DEPLOY_PRIME_URL` environment variable
    url: IS_NETLIFY ? process.env.DEPLOY_PRIME_URL : 'https://getquick.link',
    isNetlify: IS_NETLIFY,
    quicklinkGithubURL: 'https://github.com/GoogleChromeLabs/quicklink',
    quicklinkVersion: '2.3.0',
    quicklinkSizeLimit: '1KB',
    bottomResource: {
      caption: 'View source on GitHub',
    },
    useWithFrameworks: [
      {
        title: 'wordpress',
        logoFileName: 'wordpress.svg',
        url: 'https://wordpress.org/plugins/quicklink/',
      },
      {
        title: 'drupal',
        logoFileName: 'drupal.svg',
        url: 'https://www.drupal.org/project/quicklink/',
      },
      {
        title: 'magento',
        logoFileName: 'magento.svg',
        url: 'https://marketplace.magento.com/rafaelcg-magento2-quicklink.html',
      },
      {
        title: 'react',
        logoFileName: 'react.svg',
        url: 'https://github.com/HOUCe/react-quicklink-component/',
      },
      {
        title: 'angular',
        logoFileName: 'angular.svg',
        url: 'https://github.com/mgechev/ngx-quicklink/',
      },
      {
        title: 'vue',
        logoFileName: 'vue.svg',
        url: 'https://nuxtjs.org/api/components-nuxt-link/',
      },
    ],
    trustedByLogos: [
      {
        websiteUrl: 'https://www.ray-ban.com/',
        logoFileName: 'rayban.com.png',
        companyName: 'Ray-Ban',
      },
      {
        websiteUrl: 'https://www.oakley.com/',
        logoFileName: 'oakley.com.png',
        companyName: 'Oakley',
      },
      {
        websiteUrl: 'https://www.syfy.com/',
        logoFileName: 'syfy.com.png',
        companyName: 'SYFY WIRE',
      },
      {
        websiteUrl: 'https://www.newegg.com/',
        logoFileName: 'newegg.com.png',
        companyName: 'Newegg',
      },
      {
        websiteUrl: 'https://www.barefootwine.ca/',
        logoFileName: 'barefootwine.ca.png',
        companyName: 'BAREFOOT',
      },
      {
        websiteUrl: 'https://hashnode.com/',
        logoFileName: 'hashnode.com.png',
        companyName: 'Hashnode',
      },
      {
        websiteUrl: 'https://www.hartfordwines.com/',
        logoFileName: 'hartfordwines.com.png',
        companyName: 'HARTFORD',
      },
      {
        websiteUrl: 'https://vinyla.com/',
        logoFileName: 'vinyla.com.png',
        companyName: 'Vinyla',
      },
      {
        websiteUrl: 'https://www.matsuda.com/',
        logoFileName: 'matsuda.com.png',
        companyName: 'MATSUDA',
      },
      {
        websiteUrl: 'https://paulrand.design/',
        logoFileName: 'paulrand.design.png',
        companyName: 'Paul Rand',
      },
      {
        websiteUrl: 'http://www.week.co.jp/',
        logoFileName: 'week.co.jp.png',
        companyName: 'Komachi',
      },
      {
        websiteUrl: 'https://www.quiply.com/',
        logoFileName: 'quiply.com.png',
        companyName: 'Quiply',
      },
      {
        websiteUrl: 'https://saintagnes.org/',
        logoFileName: 'saintagnes.org.png',
        companyName: 'St Agnes',
      },
    ],
  };
};
