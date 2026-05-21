import { useState, useEffect } from "react";
import School from "./assets/school.png";
import vogue from "./assets/vogue.png";
import LeafDecor from "./assets/flower1.png";
import Schedule from "./schedule";
import CurvedLoop from "./CurvedLoop";
import pic1 from "./assets/pic1.png";
import pic2 from "./assets/pic2.mp4";
import soundtrack from "./assets/Abdizhappar-Alkozha-Tulekter-sagynyshy-agugai.kz_.mp3";

export function ScreenHeight(percent: number) {
  return (window.innerHeight * percent) / 100;
}
export function ScreenWidth(percent: number) {
  return (window.innerWidth * percent) / 100;
}

const GeoFrame = () => (
  <svg
    viewBox="0 0 300 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
  >
    <polygon
      points="150,8 270,60 290,180 270,300 150,372 30,300 10,180 30,60"
      fill="none"
      stroke="#B5D4F4"
      strokeWidth="1.5"
      opacity="0.8"
    />
    <polygon
      points="150,20 258,68 276,180 258,292 150,360 42,292 24,180 42,68"
      fill="none"
      stroke="#85B7EB"
      strokeWidth="0.8"
      opacity="0.5"
    />
    <line
      x1="10"
      y1="180"
      x2="30"
      y2="180"
      stroke="#B5D4F4"
      strokeWidth="1"
      opacity="0.6"
    />
    <line
      x1="270"
      y1="180"
      x2="290"
      y2="180"
      stroke="#B5D4F4"
      strokeWidth="1"
      opacity="0.6"
    />
  </svg>
);

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const handleFirstInteraction = () => {
      if (audio) return; // уже запустили

      // Создаём и запускаем ВНУТРИ обработчика — это ключевое для Android
      audio = new Audio(soundtrack);
      audio.loop = true;
      audio.volume = 0.4;

      // Нужен для разблокировки AudioContext на Android
      type AudioContextConstructor = typeof window.AudioContext;
      const AudioContext: AudioContextConstructor | undefined =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: AudioContextConstructor }).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        ctx.resume();
      }

      audio.play().catch(() => {});

      document.removeEventListener("touchend", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };

    // touchend надёжнее touchstart на Android
    document.addEventListener("touchend", handleFirstInteraction);
    document.addEventListener("click", handleFirstInteraction);

    return () => {
      audio?.pause();
      document.removeEventListener("touchend", handleFirstInteraction);
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  if (!isMobile) return null;
  const sectionStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <>
      {isMobile && (
        <div
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(160deg, #E6F1FB 0%, #d9efff 40%, #dceefb 70%, #E1F5EE 100%)",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: "#042C53",
          }}
        >
          <section
            id="hero"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "60px 20px",
              marginBottom: -ScreenHeight(10),
            }}
          >
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                left: ScreenWidth(-15),
                width: "230px",
                transform: "rotate(350deg)",
              }}
            />
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                right: ScreenWidth(-15),
                width: "230px",
                transform: "scaleX(-1) rotate(350deg)",
              }}
            />

            <div
              style={{
                ...sectionStyle(0.2),
                position: "relative",
                width: "min(300px, 85vw)",
                height: "380px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GeoFrame />
              <div
                style={{
                  textAlign: "center",
                  position: "relative",
                  zIndex: 2,
                  padding: "40px 30px",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(72px, 18vw, 96px)",
                    fontWeight: "700",
                    background:
                      "linear-gradient(135deg, #185FA5 0%, #378ADD 50%, #5DCAA5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                    letterSpacing: "-2px",
                    marginBottom: "4px",
                  }}
                >
                  40
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    letterSpacing: "6px",
                    color: "#185FA5",
                    fontFamily: "'Arial', sans-serif",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginBottom: "32px",
                  }}
                >
                  ЖЫЛДЫҚ
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, #378ADD, transparent)",
                    margin: "0 auto 20px",
                  }}
                />
                <p
                  style={{
                    fontSize: "clamp(15px, 4vw, 18px)",
                    color: "#0C447C",
                    lineHeight: 1.6,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  Құрметті ұстаздар,
                  <br />
                  сыныптастар!
                </p>
              </div>
            </div>
          </section>
          <section>
            <CurvedLoop
              marqueeText="40 ✦ ЖЫЛДЫҚ ✦"
              speed={2}
              curveAmount={400}
              direction="right"
              interactive
              className="text-[#4693bd]"
            />
            <img
              src={pic1}
              alt="Group Photo"
              style={{
                width: ScreenWidth(50),
                objectFit: "cover",
                rotate: "270deg",
                border: "1.5px solid #B5D4F4",
                marginBottom: ScreenHeight(15),
                padding: "4px",
                display: "block",
                margin: "0 auto",
              }}
              className="rounded-xl border-2 border-[#B5D4F4]"
            />
          </section>
          <section
            id="invite"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "80px 24px",
              marginTop: ScreenHeight(10),
            }}
          >
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                left: ScreenWidth(-15),
                width: "230px",
                transform: "rotate(350deg)",
              }}
            />
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                right: ScreenWidth(-15),
                width: "230px",
                transform: "scaleX(-1) rotate(350deg)",
              }}
            />

            <div
              className="rounded-xl"
              style={{
                ...sectionStyle(0.1),
                width: "min(340px, 90vw)",
                marginTop: ScreenHeight(20),
                marginBottom: "40px",
                overflow: "hidden",
                border: "1.5px solid #B5D4F4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <img
                src={School}
                className="rounded-xl"
                alt="School"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                ...sectionStyle(0.3),
                width: "min(380px, 92vw)",
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                border: "1px solid rgba(181,212,244,0.6)",
                padding: "40px 32px",
                textAlign: "center",
                position: "relative",
              }}
            >
              {[
                {
                  top: "12px",
                  left: "12px",
                  borderTop: "2px solid #378ADD",
                  borderLeft: "2px solid #378ADD",
                },
                {
                  top: "12px",
                  right: "12px",
                  borderTop: "2px solid #378ADD",
                  borderRight: "2px solid #378ADD",
                },
                {
                  bottom: "12px",
                  left: "12px",
                  borderBottom: "2px solid #378ADD",
                  borderLeft: "2px solid #378ADD",
                },
                {
                  bottom: "12px",
                  right: "12px",
                  borderBottom: "2px solid #378ADD",
                  borderRight: "2px solid #378ADD",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    ...s,
                  }}
                />
              ))}

              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#378ADD",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                — ШАҚЫРУ —
              </div>

              <p
                style={{
                  fontSize: "clamp(14px, 3.5vw, 16px)",
                  lineHeight: 1.9,
                  color: "#0C447C",
                  margin: 0,
                }}
              >
                Сіздерді{" "}
                <strong style={{ color: "#042C53" }}>
                  Нұрмақов атындағы ММИ-ның
                </strong>{" "}
                <strong style={{ color: "#042C53" }}>
                  1986 жылғы түлектерінің
                </strong>{" "}
                мектеп бітіргеніне{" "}
                <strong
                  style={{
                    fontSize: "20px",
                    background: "linear-gradient(135deg, #185FA5, #5DCAA5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  40 жыл
                </strong>{" "}
                тойлауына орай жайылған салтанатты ақ дастарханымыздың{" "}
                <em>қадірлі қонағы болуға шақырамыз</em>
              </p>
            </div>
          </section>
          <section
            className="items-center justify-center mb-[4vh]"
            style={{ marginBottom: ScreenHeight(5) }}
          >
            <Schedule />
          </section>
          <section
            id="venue"
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              padding: "80px 24px",
            }}
          >
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                left: ScreenWidth(-15),
                width: "230px",
                transform: "rotate(350deg)",
              }}
            />
            <img
              src={LeafDecor}
              alt="Leaf"
              style={{
                position: "absolute",
                top: -ScreenHeight(5),
                right: ScreenWidth(-15),
                width: "230px",
                transform: "scaleX(-1) rotate(350deg)",
              }}
            />

            <button
              onClick={() =>
                window.open(
                  "https://2gis.kz/karaganda/firm/70000001020299483",
                  "_blank",
                )
              }
              style={{ all: "unset", cursor: "pointer", borderRadius: "12px" }}
            >
              <div
                className="rounded-xl"
                style={{
                  ...sectionStyle(0.1),
                  width: "min(340px, 90vw)",
                  marginBottom: "40px",
                  overflow: "hidden",
                  border: "1.5px solid #B5D4F4",
                  marginTop: ScreenHeight(20),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "10px",
                  background: "rgba(255,255,255,0.5)",
                }}
              >
                <img
                  src={vogue}
                  className="rounded-xl"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <button
                  style={{ all: "unset", cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://2gis.kz/karaganda/firm/70000001020299483?m=73.155401%2C49.779425%2F16",
                      "_blank",
                    )
                  }
                >
                  <div
                    style={{
                      ...sectionStyle(0.35),
                      width: "min(360px, 90vw)",
                      backdropFilter: "blur(12px)",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontStyle: "italic",
                        background:
                          "linear-gradient(135deg, #185FA5 0%, #378ADD 60%, #5DCAA5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        letterSpacing: "1px",
                      }}
                    >
                      "Vogue" Мейрамханасы
                    </div>
                    <div className="flex justify-center items-center mx-auto text-center px-4">
                      Степной-1 шағынауданы, ст2/2
                    </div>
                    <div
                      style={{
                        background: "#9ac4db",
                        borderRadius: 8,
                        padding: "5px 20px",
                        display: "flex",
                        width: ScreenWidth(25),
                        marginTop: ScreenHeight(2),
                        margin: "auto",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 14,
                          fontFamily: "'Jost',sans-serif",
                          color: "#fff",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                        }}
                      >
                        2GIS ↗
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </button>
          </section>
          <section className="items-center justify-center mb-[4vh]">
            <CurvedLoop
              marqueeText="✦ 40 ✦ ЖЫЛДЫҚ"
              speed={2}
              curveAmount={400}
              direction="right"
              interactive
              className="text-[#4693bd]"
            />
            <div
              style={{
                width: "100%",
                height: ScreenWidth(80),
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                background: "transparent",
              }}
            >
              <video
                autoPlay
                loop
                muted
                src={pic2}
                style={{
                  width: ScreenHeight(50),
                  marginTop: ScreenHeight(5),
                  maxWidth: "90vw",
                  objectFit: "cover",
                  rotate: "0deg",
                  padding: "4px 5px",
                  display: "block",
                  margin: "0 auto",
                }}
                className="rounded-xl border-2 border-[#B5D4F4]"
              />
            </div>
          </section>
          <style>{`
  html, body {
    overflow-x: hidden;
    margin: 0;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  button { outline: none; }
`}</style>
        </div>
      )}
    </>
  );
}
