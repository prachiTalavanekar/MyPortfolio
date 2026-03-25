import React, { useEffect, useRef, useState } from 'react';

const CursorEffect = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp = () => setClicking(false);

    const onMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();
      const isInteractive =
        tag === 'a' || tag === 'button' || tag === 'input' ||
        tag === 'textarea' || tag === 'select' ||
        e.target.closest('a') || e.target.closest('button');
      setHovering(!!isInteractive);
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Sharp center dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: clicking ? '6px' : '8px',
          height: clicking ? '6px' : '8px',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 6px rgba(255,255,255,0.8), 0 0 12px rgba(71,19,150,0.6)',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: 'width 0.1s, height 0.1s, background-color 0.2s',
        }}
      />

      {/* Lagging outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? '50px' : clicking ? '30px' : '40px',
          height: hovering ? '50px' : clicking ? '30px' : '40px',
          borderRadius: '50%',
          border: hovering
            ? '1.5px solid rgba(255,255,255,0.9)'
            : '1.5px solid rgba(71,19,150,0.85)',
          boxShadow: hovering
            ? '0 0 12px rgba(255,255,255,0.3), inset 0 0 8px rgba(255,255,255,0.05)'
            : '0 0 10px rgba(71,19,150,0.5), inset 0 0 6px rgba(71,19,150,0.1)',
          background: hovering
            ? 'rgba(255,255,255,0.04)'
            : 'rgba(71,19,150,0.06)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
          marginLeft: hovering ? '-5px' : clicking ? '5px' : '0px',
          marginTop: hovering ? '-5px' : clicking ? '5px' : '0px',
        }}
      />
    </>
  );
};

export default CursorEffect;
