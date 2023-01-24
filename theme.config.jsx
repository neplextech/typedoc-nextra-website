/* eslint-disable */

export default {
    logo: <span>TypeDoc Nextra</span>,
    project: {
        link: 'https://github.com/neplextech/typedoc-nextra',
    },
    chat: {
        link: 'https://discord.gg/xxXJkUb9FM',
    },
    docsRepositoryBase: 'https://github.com/neplextech/typedoc-nextra-website/blob/main/pages',
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="TypeDoc Nextra" />
            <meta property="og:description" content="Build your site with Nextra and TypeDoc" />
        </>
    ),
    banner: {
        key: 'typedoc-nextra-discord',
        text: <a href="https://discord.gg/xxXJkUb9FM" target="_blank">
            🎉 Welcome to TypeDoc Nextra docs. Join our Discord →
        </a>,
        dismissible: false
    },
    footer: {
        text: <span>
            MIT {new Date().getFullYear()} © <a href="https://github.com/neplextech/typedoc-nextra" target="_blank">TypeDoc Nextra</a>.
        </span>,
    }
}