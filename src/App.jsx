import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const DOC_LINKS = [
  { href: 'https://vite.dev/', icon: viteLogo, text: 'Explore Vite', imgClass: 'logo' },
  { href: 'https://react.dev/', icon: reactLogo, text: 'Learn more', imgClass: 'button-icon' },
];

const SOCIAL_LINKS = [
  { id: 'github-icon', href: 'https://github.com/vitejs/vite', label: 'GitHub' },
  { id: 'discord-icon', href: 'https://chat.vite.dev/', label: 'Discord' },
  { id: 'x-icon', href: 'https://x.com/vite_js', label: 'X.com' },
  { id: 'bluesky-icon', href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky' },
];

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Нажми на кнопку ниже, чтобы изменить этот текст!')

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Vite + React</h1>
            <p style={{ fontSize: '1.2rem', minHeight: '1.5em' }}>
              {message}
            </p>
        </div>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              className="counter"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            <button
              className="magic-button"
              onClick={() => setMessage('Ура! Текст успешно изменен! 🎉')}
            >
              Нажми меня
            </button>
          </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="./icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            {DOC_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img className={link.imgClass} src={link.icon} alt="" />
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="./icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {SOCIAL_LINKS.map((social) => (
              <li key={social.id}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <svg
                    className="button-icon"
                    role="presentation"
                    aria-hidden="true"
                  >
                    <use href={`./icons.svg#${social.id}`}></use>
                  </svg>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
