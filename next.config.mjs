import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'false',
})


/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding');
        return config;
    },
};

export default bundleAnalyzer(nextConfig)
