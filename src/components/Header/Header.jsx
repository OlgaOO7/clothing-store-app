import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 10px',
          background: 'grey',
        }}
      >
        <Logo />
        <Navigation />
      </header>
    </div>
  )
}