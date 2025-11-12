import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const WalkingTraveler = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        if (prev >= 100) return -10;
        return prev + 0.3;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Using a reliable walking animation from LottieFiles
  const walkingAnimation = {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 60,
    w: 200,
    h: 200,
    nm: "Walking Person",
    ddd: 0,
    assets: [],
    layers: [
      {
        ddd: 0,
        ind: 1,
        ty: 4,
        nm: "Body",
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [100, 100, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [40, 60] },
                p: { a: 0, k: [0, 0] },
                r: { a: 0, k: 10 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.2, 0.4, 0.8, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      },
      {
        ddd: 0,
        ind: 2,
        ty: 4,
        nm: "Left Leg",
        parent: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 0, s: [-20] },
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 15, s: [20] },
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 30, s: [-20] },
              { t: 60, s: [-20] }
            ]
          },
          p: { a: 0, k: [-8, 30, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [12, 35] },
                p: { a: 0, k: [0, 17] },
                r: { a: 0, k: 6 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.15, 0.3, 0.6, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      },
      {
        ddd: 0,
        ind: 3,
        ty: 4,
        nm: "Right Leg",
        parent: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: {
            a: 1,
            k: [
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 0, s: [20] },
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 15, s: [-20] },
              { i: { x: [0.42], y: [1] }, o: { x: [0.58], y: [0] }, t: 30, s: [20] },
              { t: 60, s: [20] }
            ]
          },
          p: { a: 0, k: [8, 30, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "rc",
                d: 1,
                s: { a: 0, k: [12, 35] },
                p: { a: 0, k: [0, 17] },
                r: { a: 0, k: 6 }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.15, 0.3, 0.6, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      },
      {
        ddd: 0,
        ind: 4,
        ty: 4,
        nm: "Head",
        parent: 1,
        sr: 1,
        ks: {
          o: { a: 0, k: 100 },
          r: { a: 0, k: 0 },
          p: { a: 0, k: [0, -40, 0] },
          a: { a: 0, k: [0, 0, 0] },
          s: { a: 0, k: [100, 100, 100] }
        },
        ao: 0,
        shapes: [
          {
            ty: "gr",
            it: [
              {
                ty: "el",
                d: 1,
                s: { a: 0, k: [25, 25] },
                p: { a: 0, k: [0, 0] }
              },
              {
                ty: "fl",
                c: { a: 0, k: [0.95, 0.85, 0.75, 1] },
                o: { a: 0, k: 100 }
              }
            ]
          }
        ]
      }
    ]
  };

  return (
    <div
      className="fixed bottom-20 md:bottom-8 z-10 transition-all duration-75 ease-linear"
      style={{ left: `${position}%` }}
    >
      <Lottie
        animationData={walkingAnimation}
        loop={true}
        className="w-20 h-20 md:w-24 md:h-24 drop-shadow-lg"
      />
    </div>
  );
};

export default WalkingTraveler;
