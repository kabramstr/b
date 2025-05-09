import React from 'react';
import { Home } from './pages/Home';
import { Facilities } from './pages/Facilities';
import { Visit } from './pages/Visit';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Donate } from './pages/Donate';

function App() {
  // A simple router
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', onLocationChange);

    // Handle navigation without page reload
    document.addEventListener('click', (e) => {
      if (e.target instanceof HTMLAnchorElement) {
        const href = e.target.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          setCurrentPath(href);
          window.scrollTo(0, 0);
        }
      }
    });

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  // Add the following to the head of the document
  React.useEffect(() => {
    // Set the page title based on the current path
    let title = 'Nature Playground';
    if (currentPath !== '/') {
      // Extract the page name from the path and capitalize it
      const pageName = currentPath.substring(1);
      title = `${pageName.charAt(0).toUpperCase() + pageName.slice(1)} | Nature Playground`;
    }
    document.title = title;

    // Add a keyframe animation for fade-in effect
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animation-delay-100 {
        animation-delay: 0.1s;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [currentPath]);

  // Render the appropriate page based on the current path
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/facilities':
        return <Facilities />;
      case '/visit':
        return <Visit />;
      case '/gallery':
        return <Gallery />;
      case '/contact':
        return <Contact />;
      case '/donate':
        return <Donate />;
      default:
        return <Home />;
    }
  };

  return renderPage();
}

export default App;