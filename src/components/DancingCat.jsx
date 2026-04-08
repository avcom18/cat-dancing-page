import React, { useState } from 'react';
import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const NOTES = ['♪', '♫', '♩', '♬', '🎵'];

function MusicNote({ note, style }) {
  return (
    <span
      style={{
        position: 'absolute',
        fontSize: '1.5rem',
        animation: 'note-float 1.5s ease-out infinite',
        pointerEvents: 'none',
        userSelect: 'none',
        ...style,
      }}
    >
      {note}
    </span>
  );
}

function Sparkle({ style }) {
  return (
    <span
      style={{
        position: 'absolute',
        fontSize: '1.2rem',
        animation: 'sparkle 1s ease-in-out infinite',
        pointerEvents: 'none',
        userSelect: 'none',
        ...style,
      }}
    >
      ✨
    </span>
  );
}

export default function DancingCat({ isPlaying, duration, speed }) {
  const animationName = speed === 'fast' ? 'dance-fast' : 'dance';
  const animationStyle = isPlaying
    ? {
        animation: `${animationName} ${duration} ease-in-out infinite, glow ${duration} ease-in-out infinite`,
      }
    : {};

  const noteDelay = (index) => ({ animationDelay: `${index * 0.4}s` });

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '320px',
        height: '320px',
      }}
    >
      {/* 배경 원 */}
      <div
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: isPlaying
            ? 'radial-gradient(circle, rgba(255,182,193,0.3) 0%, rgba(147,112,219,0.2) 60%, transparent 80%)'
            : 'radial-gradient(circle, rgba(200,200,200,0.2) 0%, transparent 70%)',
          transition: 'background 0.5s',
        }}
      />

      {/* 음표들 */}
      {isPlaying && (
        <>
          <MusicNote note="♪" style={{ top: '30px', left: '20px', color: '#FF69B4', ...noteDelay(0) }} />
          <MusicNote note="♫" style={{ top: '10px', right: '25px', color: '#9370DB', ...noteDelay(0.3) }} />
          <MusicNote note="♩" style={{ top: '60px', left: '5px', color: '#FF69B4', fontSize: '1rem', ...noteDelay(0.6) }} />
          <MusicNote note="♬" style={{ top: '20px', right: '10px', color: '#9370DB', fontSize: '1rem', ...noteDelay(0.9) }} />
          <MusicNote note="🎵" style={{ top: '50px', right: '40px', fontSize: '1.1rem', ...noteDelay(1.2) }} />
        </>
      )}

      {/* 반짝임 */}
      {isPlaying && (
        <>
          <Sparkle style={{ top: '15px', left: '55px', animationDelay: '0.2s' }} />
          <Sparkle style={{ top: '25px', right: '55px', animationDelay: '0.7s' }} />
          <Sparkle style={{ bottom: '50px', left: '30px', animationDelay: '1.1s' }} />
        </>
      )}

      {/* 고양이 본체 */}
      <div
        onClick={() => {}}
        style={{
          position: 'relative',
          zIndex: 2,
          transformOrigin: 'center bottom',
          ...animationStyle,
        }}
      >
        <img
          src={catSvg}
          alt="춤추는 고양이"
          style={{
            width: '200px',
            height: '220px',
            filter: isPlaying ? 'none' : 'grayscale(60%)',
            transition: 'filter 0.5s',
          }}
        />
      </div>

      {/* 발 그림자 */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100px',
          height: '16px',
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.15)',
          filter: 'blur(4px)',
          animation: isPlaying ? `foot-tap ${duration} ease-in-out infinite` : 'none',
          zIndex: 1,
        }}
      />
    </div>
  );
}
