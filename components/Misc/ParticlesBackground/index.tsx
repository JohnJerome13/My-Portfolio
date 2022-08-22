// tsparticles
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import particlesConfig from './particles.json';
import styles from './styles.module.css';

const particlesInit = async (engine: Engine) => {
	// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// starting from v2 you can add only the features you need reducing the bundle size
	await loadFull(engine);
};

const ParticlesBackground: React.FC = () => {
	return (
		<Particles
			options={particlesConfig as ISourceOptions}
			init={particlesInit}
			className={styles.tsParticles}
		/>
	);
};

export default ParticlesBackground;
