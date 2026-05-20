export default function WeddingSchedule() {
  const schedule = [
    {
      time: "10:00",
      lines: [
        "Орталық мешітте жиналып бақилық болған",
        "мұғалім, сыныптастарға құран бағыштау.",
      ],
      side: "right",
      cy: 200,
      dotCx: 160,
    },
    {
      time: "11:00",
      lines: ["Қаланың көрікті жерлеріне бару.", ""],
      side: "left",
      cy: 310,
      dotCx: 160,
    },
    {
      time: "14:00",
      lines: ["Мейрамханада салтанатты кештің", "басталуы."],
      side: "right",
      cy: 420,
      dotCx: 160,
    },
    {
      time: "21.06",
      lines: ["Табиғат аясында демалу.", ""],
      side: "left",
      cy: 530,
      dotCx: 160,
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
      }}
    >
      <svg
        viewBox="0 0 320 680"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          maxWidth: 360,
          display: "block",
          fontFamily: "Georgia, serif",
        }}
      >
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
          d="M160,138 C160,170 95,190 95,240 C95,285 225,305 225,355 C225,400 95,420 95,465 C95,510 225,530 225,570"
          fill="none"
          stroke="url(#blueGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        <defs>
          <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#185FA5" />
            <stop offset="60%" stopColor="#378ADD" />
            <stop offset="100%" stopColor="#5DCAA5" />
          </linearGradient>
        </defs>

        <circle cx="160" cy="138" r="5" fill="#185FA5" opacity="0.9" />

        {schedule.map(({ time, lines, side, cy }, idx) => {
          const isRight = side === "right";
          const textX = isRight ? 270 : 55;
          const isLast = idx === schedule.length - 1;

          return (
            <g key={time}>
              <text
                x={textX}
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
                  x={textX}
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
            </g>
          );
        })}

        <circle
          cx="225"
          cy="574"
          r="4"
          fill="none"
          stroke="#5DCAA5"
          strokeWidth="1.5"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
