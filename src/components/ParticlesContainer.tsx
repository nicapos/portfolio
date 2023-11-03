'use client';

import React from 'react';
import Particles from 'react-particles';
import type { Engine } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

export class ParticlesContainer extends React.PureComponent {
  async customInit(engine: Engine): Promise<void> {
    await loadLinksPreset(engine);
  }

  render() {
    const options = {
      preset: 'links',
    };

    return (
      <Particles
        className="relative -z-10 hidden opacity-30 md:block"
        options={options}
        init={this.customInit}
      />
    );
  }
}
