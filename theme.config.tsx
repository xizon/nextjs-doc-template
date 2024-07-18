import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';


const config: DocsThemeConfig = {
    logo: <div className="app-brand"><span><Image width={0} height={0} sizes="100vw" style={{ width: '140px', height: 'auto' }} src="/assets/images/logo.png" alt={''} /></span><span style={{display: 'none'}}><Image width={0} height={0} sizes="100vw" style={{ width: '140px', height: 'auto' }} src="/assets/images/logo-dark.png" alt={''} /></span></div>,
    docsRepositoryBase: 'https://github.com/xizon/nextjs-doc-template',
    project: {
        link: 'https://github.com/xizon/nextjs-doc-template',
    },
    footer: {
        text: 'Custom documentation',
    },
    editLink: {
         text: 'Edit this page',
         // component: null
    },
    feedback: {
        useLink: () => 'https://github.com/xizon/nextjs-doc-template',
    } 
}


export default config
