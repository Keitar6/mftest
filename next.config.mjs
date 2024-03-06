import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  /**
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename: 'static/chunks/remoteEntry.js',
      })
    );

    return config;
  },
};

export default nextConfig;
