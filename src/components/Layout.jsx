import React from 'react';

export default function Layout({ children, isPlaying }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: isPlaying
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
          : 'linear-gradient(135deg, #74748a 0%, #8d8d9e 100%)',
        backgroundSize: '300% 300%',
        animation: isPlaying ? 'bg-pulse 6s ease infinite' : 'none',
        transition: 'background 1s ease',
      }}
    >
      {/* 제목 */}
      <h1
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          color: 'white',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          marginBottom: '8px',
          textAlign: 'center',
          fontWeight: '800',
          letterSpacing: '0.05em',
        }}
      >
        🐱 댄싱 캣
      </h1>
      <p
        style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          marginBottom: '32px',
          textAlign: 'center',
        }}
      >
        {isPlaying ? '신나게 춤추는 중이에요! 🎶' : '잠시 쉬는 중이에요... 💤'}
      </p>

      {children}

      {/* 하단 힌트 */}
      <p
        style={{
          marginTop: '32px',
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.8rem',
          textAlign: 'center',
        }}
      >
        고양이를 클릭하거나 Space 키를 눌러보세요
      </p>
    </div>
  );
}
