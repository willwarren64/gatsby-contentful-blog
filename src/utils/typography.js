import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
import '../global.css'
// import Wordpress2016 from 'typography-theme-wordpress-2016'

kirkhamTheme.overrideThemeStyles = () => ({
    a: {
        color: 'var(--textLink)',
    },
    // gatsby-remark-autolink-headers - don't underline when hidden
    'a.anchor': {
        boxShadow: 'none',
    },
    // gatsby-remark-autolink-headers - use theme colours for the link icon
    'a.anchor svg[aria-hidden="true"]': {
        stroke: 'var(--textLink)',
    },
    p: {
        color: 'var(--textNormal)',
    },
    h1: {
        color: 'var(--textNormal)',
    },
    h2: {
        color: 'var(--textNormal)',
    },
    h3: {
        color: 'var(--textNormal)',
    },
    h4: {
        color: 'var(--textNormal)',
    },
    label: {
        color: 'var(--textNormal)',
    },
    hr: {
        background: 'var(--hr)',
    },
})

const typography = new Typography(kirkhamTheme)

export default typography
export const rhythm = typography.rhythm