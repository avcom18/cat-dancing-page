import { useState, useCallback, useEffect } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState('normal'); // 'slow' | 'normal' | 'fast'

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const setAnimationSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  // 키보드 단축키: Space = 시작/정지, 1/2/3 = 속도 조절
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        toggle();
      }
      if (e.key === '1') setSpeed('slow');
      if (e.key === '2') setSpeed('normal');
      if (e.key === '3') setSpeed('fast');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggle]);

  const durationMap = {
    slow: '2.5s',
    normal: '1.2s',
    fast: '0.6s',
  };

  return {
    isPlaying,
    speed,
    duration: durationMap[speed],
    toggle,
    setAnimationSpeed,
  };
}
