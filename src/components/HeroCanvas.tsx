import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;
    
    // 创建场景
    const scene = new THREE.Scene();
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // 清除可能存在的子元素
    currentCanvas.innerHTML = '';
    currentCanvas.appendChild(renderer.domElement);
    
    // 粒子配置 - 减少粒子数量以提高性能
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // 粒子材质
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });
    
    // 创建粒子系统
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // 动画函数
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // 响应式调整
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      if (currentCanvas) {
        currentCanvas.innerHTML = '';
      }
    };
  }, []);
  
  return <div ref={canvasRef} className="absolute inset-0 z-0"></div>;
};

export default HeroCanvas;