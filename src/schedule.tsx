import mosqueImg from "./assets/mosque.png";
import { ScreenWidth, ScreenHeight } from "./App";
import limuzin from "./assets/limuzin.png";
import vogueImg from "./assets/vogueImg.png";
import city from "./assets/city.png";
export default function WeddingSchedule() {
  const imgW = ScreenWidth(34);
  const imgH = ScreenHeight(10);

  const schedule = [
    {
      time: "10:00",
      lines: [
        "Орталық мешітте жиналып бақилық болған",
        "мұғалім, сыныптастарға құран бағыштау.",
      ],
      side: "left",
      cy: 185,
      cx: 100,
      img: mosqueImg,
    },
    {
      time: "11:00",
      lines: ["Қаланың көрікті жерлеріне бару."],
      side: "right",
      cy: 380,
      cx: 240,
      img: limuzin,
    },
    {
      time: "14:00",
      lines: ["Мейрамханада салтанатты кештің", "басталуы."],
      side: "left",
      cy: 570,
      cx: 100,
      img: vogueImg,
    },
    {
      time: "21.06",
      lines: ["Табиғат аясында демалу."],
      side: "center",
      cy: 800,
      cx: 100,
      img: city,
    },
  ];

  const dates = ["18", "19", "20", "21", "22"];
  const boxSize = 28;
  const gap = 8;
  const totalWidth = dates.length * boxSize + (dates.length - 1) * gap;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "2rem 0",
        minHeight: "100vh",
        overflow: "visible",
      }}
    >
      <svg
        viewBox="0 0 320 920"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          maxWidth: 360,
          display: "block",
          fontFamily: "Georgia, serif",
        }}
      >
        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#185FA5" />
            <stop offset="60%" stopColor="#378ADD" />
            <stop offset="100%" stopColor="#5DCAA5" />
          </linearGradient>
          {schedule.map(({ time }, idx) => (
            <clipPath key={time} id={`clip-${idx}`}>
              <rect rx="8" ry="8" width={imgW} height={imgH} />
            </clipPath>
          ))}
        </defs>

        <text
          x="160"
          y="30"
          textAnchor="middle"
          fontSize="14"
          fontStyle="italic"
          fill="#185FA5"
          letterSpacing="1"
        >
          40 жылдыққа арналған іс шара
        </text>
        <text
          x="160"
          y="48"
          textAnchor="middle"
          fontSize="11"
          fill="#378ADD"
          letterSpacing="2"
        >
          20.06.2026 ж.
        </text>
        <line
          x1="100"
          y1="56"
          x2="220"
          y2="56"
          stroke="#B5D4F4"
          strokeWidth="0.8"
          opacity="0.8"
        />

        <g transform="translate(160,84)">
          {dates.map((label, i) => {
            const x = i * (boxSize + gap) - totalWidth / 2;
            const isActive20 = label === "20";
            const isActive21 = label === "21";
            const isActive = isActive20 || isActive21;
            return (
              <g key={label} transform={`translate(${x + boxSize / 2}, 0)`}>
                <g transform={isActive20 ? "scale(1.2)" : "scale(1)"}>
                  <rect
                    x={-boxSize / 2}
                    y={-boxSize / 2}
                    width={boxSize}
                    height={boxSize}
                    rx="6"
                    fill={
                      isActive20 ? "#185FA5" : isActive21 ? "#5DCAA5" : "none"
                    }
                    stroke={isActive ? "none" : "#B5D4F4"}
                    strokeWidth="1.2"
                    opacity={isActive ? 1 : 0.7}
                  />
                  <text
                    x="0"
                    y="0"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={isActive20 ? "14" : "13"}
                    fontWeight={isActive ? "bold" : "normal"}
                    fill={isActive ? "white" : "#8ab4d4"}
                  >
                    {label}
                  </text>
                </g>
              </g>
            );
          })}
        </g>

        <text
          x="160"
          y="124"
          textAnchor="middle"
          fontSize="10"
          fill="#85B7EB"
          letterSpacing="3"
        >
          МАУСЫМ · СЕНБІ
        </text>

        <path
          d={`M160,138 C160,170 270,200 240,260 C240,310 80,330 80,390 C80,440 270,460 240,510 C240,560 80,580 80,630 C80,680 240,700 240,750 C240,800 160,820 160,860`}
          fill="none"
          stroke="url(#blueGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        <circle cx="160" cy="138" r="5" fill="#185FA5" opacity="0.9" />

        {schedule.map(({ time, lines, side, cy, cx, img }, idx) => {
          const isRight = side === "right";
          const textX = isRight ? 240 : 110;
          const isLast = idx === schedule.length - 1;
          const linesCount = lines.filter(Boolean).length;
          const lastTextY = cy + 6 + Math.max(linesCount - 1, 0) * 14;
          const imgY = lastTextY + 12;
          const imgX =
            time === "21.06" ? 85 : time === "14:00" ? 10 : textX - imgW / 2;

          return (
            <g key={time}>
              <text
                x={time === "21.06" ? 160 : time === "14:00" ? 90 : cx}
                y={cy - 12}
                textAnchor="middle"
                fontSize="18"
                fontStyle="italic"
                fill={isLast ? "#5DCAA5" : "#185FA5"}
                fontWeight="600"
              >
                {time}
              </text>

              {lines.filter(Boolean).map((line, i) => (
                <text
                  key={i}
                  x={time === "21.06" ? 160 : time === "14:00" ? 90 : textX}
                  y={cy + 6 + i * 14}
                  textAnchor="middle"
                  fontSize="9.5"
                  fill="#2a6da8"
                  letterSpacing="0.5"
                  opacity="0.85"
                >
                  {line}
                </text>
              ))}

              <g transform={`translate(${imgX}, ${imgY})`}>
                <image
                  href={img}
                  width={imgW}
                  height={imgH}
                  clipPath={`url(#clip-${idx})`}
                  preserveAspectRatio="xMidYMid slice"
                />
                <rect
                  width={imgW}
                  height={imgH}
                  rx="8"
                  ry="8"
                  fill="none"
                  stroke={isLast ? "#9FE1CB" : "#B5D4F4"}
                  strokeWidth="1"
                  opacity="0.8"
                />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
