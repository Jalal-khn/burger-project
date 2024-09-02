
export const loadScrollReveal = () => {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined' && !window.ScrollReveal) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/scrollreveal';
        script.async = true;
        script.onload = () => resolve(window.ScrollReveal);
        script.onerror = () => reject(new Error('Failed to load ScrollReveal script'));
        document.body.appendChild(script);
      } else {
        resolve(window.ScrollReveal);
      }
    });
  };
  