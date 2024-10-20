import React, { Suspense, lazy } from 'react';

import Home from '../../sections/Home'
const About = lazy(() => import('../../sections/About'));
const Projects = lazy(() => import('../../sections/Projects'));

const Index = () => {
  return (
    <div>
      <Home />
      <Suspense>
        <About />
        <Projects />
      </Suspense>
    </div>
  );
};

export default Index;