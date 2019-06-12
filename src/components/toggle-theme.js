import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class MyComponent extends React.Component {
    render() {
    return (
        <ThemeToggler>
            {({ theme, toggleTheme }) => (
            <label className="switch">

                <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                />{' '}
                <span class="slider"/>
            </label>
            )}
        </ThemeToggler>
    )
    }
}

export default MyComponent