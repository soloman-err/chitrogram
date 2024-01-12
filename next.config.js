/** @type {import('next').NextConfig} */

const hostnames = ['images.unsplash.com'];

module.exports = {
  images: {
    remotePatterns: hostnames?.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
};
