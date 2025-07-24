// 您可以在這裡放置自製的 SVG 圖示

export const DataFlowIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse">
      {/* 數據流動效果 */}
      <circle cx="20" cy="50" r="3" fill="currentColor">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="50" r="3" fill="currentColor">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="3" fill="currentColor">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="50" r="3" fill="currentColor">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="0.9s" repeatCount="indefinite" />
      </circle>
      <circle cx="80" cy="50" r="3" fill="currentColor">
        <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.2s" repeatCount="indefinite" />
      </circle>

      {/* 連接線 */}
      <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" opacity="0.3" />

      {/* 數據節點 */}
      <rect x="5" y="40" width="20" height="20" rx="4" fill="currentColor" opacity="0.7" />
      <rect x="75" y="40" width="20" height="20" rx="4" fill="currentColor" opacity="0.7" />
    </g>
  </svg>
)

export const AIBrainIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="hover:animate-spin" style={{ transformOrigin: "50% 50%" }}>
      {/* AI 大腦輪廓 */}
      <path
        d="M30 25 Q50 15 70 25 Q80 35 75 50 Q80 65 70 75 Q50 85 30 75 Q20 65 25 50 Q20 35 30 25 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* 神經網絡節點 */}
      <circle cx="40" cy="35" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="35" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="50" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" begin="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="50" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="65" r="2" fill="currentColor">
        <animate attributeName="r" values="2;4;2" dur="3s" begin="2.5s" repeatCount="indefinite" />
      </circle>

      {/* 連接線 */}
      <line x1="40" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="60" y1="35" x2="50" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="35" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="65" y1="50" x2="50" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="50" x2="45" y2="65" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </g>
  </svg>
)

export const EcommerceIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 購物車 */}
    <path
      d="M20 20 L25 20 L35 60 L75 60 L80 40 L30 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* 購物車輪子 */}
    <circle cx="40" cy="75" r="5" fill="currentColor">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 40 75;360 40 75"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="70" cy="75" r="5" fill="currentColor">
      <animateTransform
        attributeName="transform"
        type="rotate"
        values="0 70 75;360 70 75"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>

    {/* 數位元素 */}
    <rect x="45" y="35" width="8" height="8" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
    </rect>
    <rect x="55" y="35" width="8" height="8" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.5s" repeatCount="indefinite" />
    </rect>
    <rect x="65" y="35" width="8" height="8" fill="currentColor" opacity="0.7">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
    </rect>
  </svg>
)

export const CustomSolutionIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 齒輪 */}
    <g className="hover:animate-spin" style={{ transformOrigin: "50% 50%" }}>
      <path
        d="M50 15 L55 25 L65 20 L70 30 L80 35 L75 45 L85 50 L75 55 L80 65 L70 70 L65 80 L55 75 L50 85 L45 75 L35 80 L30 70 L20 65 L25 55 L15 50 L25 45 L20 35 L30 30 L35 20 L45 25 Z"
        fill="currentColor"
        opacity="0.7"
      />
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
    </g>

    {/* 中心點 */}
    <circle cx="50" cy="50" r="4" fill="currentColor">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* 工具圖示 */}
    <line x1="35" y1="35" x2="40" y2="40" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    <line x1="60" y1="60" x2="65" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.8" />
  </svg>
)
