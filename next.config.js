const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
  })
  
  // Static Exports
  let exportHtmlEnabled = true;
  
  
  //
  const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
  
      // disable source map 
      productionBrowserSourceMaps: true,
  
      // !!! for docker (`output: 'standalone'`)
      // This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.
  
      output: !exportHtmlEnabled ? undefined : 'export',
  
  
      // image optimize
      images: {
          unoptimized: true
      },
  
  
      //  add a page route with html extension 
      // Rename the file under pages directory to `.html.tsx`
      pageExtensions: ['html.jsx', 'jsx', 'js', 'tsx', 'ts', 'mdx'],
      // omit the html extension 
      trailingSlash: false,
      env: {
          exportHtml: `${exportHtmlEnabled}`
      }
    
  }
  
  module.exports = withNextra(nextConfig);
  