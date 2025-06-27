    const starCount = 60;
    const space = document.getElementById("space");
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      space.appendChild(star);
    }

    const planets = [
      { id: 'mercury', speed: 0.045 },
      { id: 'venus',   speed: 0.035 },
      { id: 'earth',   speed: 0.029 },
      { id: 'mars',    speed: 0.024 },
      { id: 'jupiter', speed: 0.013 },
      { id: 'saturn',  speed: 0.009 },
      { id: 'uranus',  speed: 0.007 },
      { id: 'neptune', speed: 0.005 },
      { id: 'pluto',   speed: 0.003 }
    ];

    function animatePlanets() {
      const time = Date.now();
      planets.forEach(planet => {
        const el = document.getElementById(planet.id);
        const orbitRadius = el.parentElement.offsetWidth / 2;
        const angle = time * planet.speed * 0.001;
        const x = Math.cos(angle) * orbitRadius;
        const y = Math.sin(angle) * orbitRadius;
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

        if (planet.id === 'earth') {
          const moon = document.getElementById("moon");
          const moonAngle = time * 0.1 * 0.001;
          const moonX = Math.cos(moonAngle) * 20;
          const moonY = Math.sin(moonAngle) * 20;
          moon.style.transform = `translate(calc(-50% + ${moonX}px), calc(-50% + ${moonY}px))`;
        }
      });
      requestAnimationFrame(animatePlanets);
    }

    animatePlanets();

    let scale = 1;
    function zoom(factor) {
      scale *= factor;
      space.style.transform = `scale(${scale})`;
    }

    function resetZoom() {
      scale = 1;
      space.style.transform = `scale(1)`;
    }
