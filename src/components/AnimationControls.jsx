import React from 'react';

const SPEEDS = [
  { key: 'slow', label: '느리게', emoji: '🐢', shortcut: '1' },
  { key: 'normal', label: '보통', emoji: '🐱', shortcut: '2' },
  { key: 'fast', label: '빠르게', emoji: '🐇', shortcut: '3' },
];

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '24px 32px',
        background: 'rgba(255,255,255,0.15)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {/* 시작/정지 버튼 */}
      <button
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
        aria-pressed={isPlaying}
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          fontSize: '2rem',
          background: isPlaying
            ? 'linear-gradient(135deg, #FF69B4, #9370DB)'
            : 'linear-gradient(135deg, #a0a0a0, #707070)',
          color: 'white',
          boxShadow: isPlaying
            ? '0 4px 20px rgba(255, 105, 180, 0.5)'
            : '0 4px 12px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          transform: 'scale(1)',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
        onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.95)'; }}
        onMouseUp={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>

      <p style={{
        color: 'rgba(255,255,255,0.9)',
        fontSize: '0.85rem',
        margin: '-8px 0',
      }}>
        Space키로도 제어 가능
      </p>

      {/* 속도 조절 */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {SPEEDS.map(({ key, label, emoji, shortcut }) => (
          <button
            key={key}
            onClick={() => onSpeedChange(key)}
            aria-label={`속도: ${label}`}
            aria-pressed={speed === key}
            title={`단축키: ${shortcut}`}
            style={{
              padding: '10px 16px',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: speed === key ? '700' : '400',
              background: speed === key
                ? 'linear-gradient(135deg, #FF69B4, #9370DB)'
                : 'rgba(255,255,255,0.2)',
              color: 'white',
              border: speed === key
                ? '2px solid rgba(255,255,255,0.5)'
                : '2px solid rgba(255,255,255,0.2)',
              boxShadow: speed === key ? '0 4px 15px rgba(255,105,180,0.4)' : 'none',
              transition: 'all 0.25s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              minWidth: '68px',
            }}
            onMouseEnter={e => { if (speed !== key) e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={e => { if (speed !== key) e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
          >
            <span style={{ fontSize: '1.3rem' }}>{emoji}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
