import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
    logo: <div className="app-brand"><span><Image width={0} height={0} sizes="100vw" style={{ width: '140px', height: 'auto' }} src="/assets/images/logo.png" alt={''} /></span><span style={{display: 'none'}}><Image width={0} height={0} sizes="100vw" style={{ width: '140px', height: 'auto' }} src="/assets/images/logo-dark.png" alt={''} /></span></div>,
    docsRepositoryBase: 'https://github.com/xizon/nextjs-doc-template',
    project: {
        link: 'https://github.com/xizon/nextjs-doc-template',
    },
    head: () => {
        const { asPath, defaultLocale, locale } = useRouter()
        const { frontMatter } = useConfig()
        const url =
            'https://xizon.github.io' +
            (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

        return (
            <>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'Custom Title'} />
                <meta
                    property="og:description"
                    content={frontMatter.description || 'Custom Title'}
                />
            </>
        )
    },
    footer: {
        text: (
            <small>©2024 Custom Title.</small>
        )
    },
    editLink: {
         text: 'Edit this page',
         // component: null
    },
    feedback: {
        useLink: () => 'https://github.com/xizon/nextjs-doc-template',
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Custom Title'
            }
        }
    },
    sidebar: {
        defaultMenuCollapseLevel: 1
    }
}


export default config
