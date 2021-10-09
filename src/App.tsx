import { AdBanner } from './components/AdBanner/AdBanner';
import { Comments } from './components/Comments/Comments';
import { ThreeEightsGrid } from './components/ThreeEighthsGrid/ThreeEighthsGrid';
import { sprinkles } from './sprinkles.css';

const APP_STYLE = sprinkles({
  background: {
    lightMode: 'green-500',
    darkMode: 'gray-900',
  },
  display: 'flex',
  justifyContent: 'center',
  paddingY: '4x',
});

const CONTENT_STYLE = sprinkles({
  width: '800px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const App = () => (
  <div
    className={APP_STYLE}
  >
    <main className={CONTENT_STYLE}>
      <AdBanner />
      <ThreeEightsGrid />
      <Comments />
    </main>
  </div>
);
