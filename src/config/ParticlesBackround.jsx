import { useCallback } from "react";
import Particles from "react-tsparticles";
import particlesOptions from './particlesjs-config.json'
import { loadSlim } from "tsparticles-slim";


export function ParticlesBackground() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {}, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    );
};
