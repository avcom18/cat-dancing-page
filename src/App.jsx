import React from 'react';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';
import './styles/animations.css';

export default function App() {
  const { isPlaying, speed, duration, toggle, setAnimationSpeed } = useAnimation();

  return (
    <Layout isPlaying={isPlaying}>
      {/* 고양이 - 클릭으로도 토글 */}
      <div
        onClick={toggle}
        style={{ cursor: 'pointer' }}
        role="button"
        aria-label={isPlaying ? '클릭하여 정지' : '클릭하여 시작'}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && toggle()}
      >
        <DancingCat isPlaying={isPlaying} duration={duration} speed={speed} />
      </div>

      {/* 컨트롤 패널 */}
      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={setAnimationSpeed}
      />
    </Layout>
  );
}
