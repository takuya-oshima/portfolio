"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import styles from "./index.module.css";


export default function BackgroundParticle() {
  const [init, setInit] = useState(false);


  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    })
    .then(() => setInit(true))
    .catch(e => {
      console.error("tsparticles engine init error:", e);
    });
  }, []);


  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => (
      {
        "autoPlay": true,
        "clear": true,
        "delay": 0,
        "fullScreen": {
          "enable": true,
          "zIndex": 0
        },
        "detectRetina": true,
        "fpsLimit": 120,
        "interactivity": {
          "detectsOn": "window",
          "events": {
            "onClick": {
              "enable": true,
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 2,
                "smooth": 10
              }
            },
            "resize": {
              "delay": 0.5,
              "enable": true
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "mix": false,
              "opacity": 0,
              "size": 0,
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
                "selectors": {}
              }
            },
            "repulse": {
              "distance": 400,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "divs": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
                "selectors": {}
              }
            },
          },
        },
        "particles": {
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "color": {
            "value": "#ffffff",
            "animation": {
              "h": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "s": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              },
              "l": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "delay": 0,
                "sync": true,
                "offset": 0
              }
            }
          },
          "move": {
            "angle": {
              "offset": 0,
              "value": 90
            },
            "attract": {
              "distance": 200,
              "enable": false,
              "rotate": {
                "x": 3000,
                "y": 3000
              }
            },
            "center": {
              "x": 50,
              "y": 50,
              "mode": "percent",
              "radius": 0
            },
            "decay": 0,
            "direction": "top-right",
            "drift": 0,
            "enable": true,
            "gravity": {
              "acceleration": 9.81,
              "enable": false,
              "inverse": false,
              "maxSpeed": 50
            },
            "outModes": {
              "default": "out",
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": false,
            "size": false,
            "speed": {
              "min": 0.1,
              "max": 2
            },
            "straight": false,
            "vibrate": false,
            "warp": false
          },
          "number": {
            "density": {
              "enable": true,
              "width": 1920,
              "height": 1080
            },
            "limit": {
              "mode": "delete",
              "value": 0
            },
            "value": 80
          },
          "opacity": {
            "value": {
              "min": 0.1,
              "max": 1
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "shadow": {
            "blur": 10,
            "color": {
              "value": "rgba(255,255,255,0.2)"
            },
            "enable": true,
            "offset": {
              "x": 0.5,
              "y": 0.5
            }
          },
          "shape": {
            "close": true,
            "fill": true,
            "options": {},
            "type": "circle"
          },
          "size": {
            "value": {
              "min": 1,
              "max": 8
            },
            "animation": {
              "count": 0,
              "enable": true,
              "speed": 7,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "mode": "auto",
              "startValue": "random",
              "destroy": "none"
            }
          },
          "stroke": {
            "width": 0
          },
          "zIndex": {
            "value": 0,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
          },
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "responsive": [],
        "smooth": false,
        "zLayers": 100,
        "motion": {
          "disable": false,
          "reduce": {
            "factor": 4,
            "value": true
          }
        }
      }
      ),
    [],
  );

  if (init) {
    return (
      <Particles id="backgroun-tsparticles" className={styles.backgroundTsparticles} particlesLoaded={particlesLoaded} options={options} />
    );
  }

  return null;

};
