import {
  Laptop,
  Moon,
  SunMedium,
  Twitter,
  type Icon as LucideIcon,
  type LucideProps,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  twitter: Twitter,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  wrapper: () => (
    <svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_402_6)">
        <path
          d="M63.3333 0.416656H16.6667C7.46192 0.416656 0 7.87858 0 17.0833V63.75C0 72.9547 7.46192 80.4167 16.6667 80.4167H63.3333C72.5381 80.4167 80 72.9547 80 63.75V17.0833C80 7.87858 72.5381 0.416656 63.3333 0.416656Z"
          fill="white"
          fillOpacity="0.1"
        />
        <path
          d="M63.3333 0.416656H16.6667C7.46192 0.416656 0 7.87858 0 17.0833V63.75C0 72.9547 7.46192 80.4167 16.6667 80.4167H63.3333C72.5381 80.4167 80 72.9547 80 63.75V17.0833C80 7.87858 72.5381 0.416656 63.3333 0.416656Z"
          fill="url(#paint0_radial_402_6)"
          fillOpacity="0.2"
        />
        <path
          d="M63.3333 0.833344H16.6667C7.69204 0.833344 0.416672 8.10872 0.416672 17.0833V63.75C0.416672 72.7246 7.69204 80 16.6667 80H63.3333C72.308 80 79.5833 72.7246 79.5833 63.75V17.0833C79.5833 8.10872 72.308 0.833344 63.3333 0.833344Z"
          stroke="url(#paint1_linear_402_6)"
          strokeOpacity="0.1"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_402_6"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(40 0.416656) rotate(90) scale(80)"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id="paint1_linear_402_6"
          x1="5.07886e-06"
          y1="0.416677"
          x2={80}
          y2="80.4167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </linearGradient>
        <clipPath id="clip0_402_6">
          <rect width={80} height={80} fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.658 5.225a9.956 9.956 0 00-3.639-3.64C13.487.693 11.814.246 10 .246c-1.813 0-3.487.447-5.019 1.34a9.955 9.955 0 00-3.639 3.64C.447 6.757 0 8.43 0 10.245c0 2.178.636 4.138 1.908 5.878 1.271 1.74 2.914 2.945 4.928 3.613.234.044.408.013.52-.09a.51.51 0 00.17-.391l-.007-.703a116.53 116.53 0 01-.006-1.16l-.3.053c-.19.035-.432.05-.723.045a5.504 5.504 0 01-.904-.09 2.021 2.021 0 01-.873-.391 1.652 1.652 0 01-.573-.8l-.13-.3a3.255 3.255 0 00-.41-.664c-.187-.243-.375-.408-.566-.495l-.091-.065a.957.957 0 01-.17-.157.713.713 0 01-.117-.182c-.026-.06-.004-.11.065-.15.07-.04.195-.058.378-.058l.26.039c.174.034.389.138.645.312s.466.4.631.677c.2.356.44.627.723.814.282.186.566.28.853.28.286 0 .533-.022.742-.065a2.59 2.59 0 00.586-.196c.078-.581.29-1.028.638-1.34a8.894 8.894 0 01-1.335-.235 5.311 5.311 0 01-1.224-.508 3.506 3.506 0 01-1.048-.873c-.278-.347-.506-.803-.684-1.367-.177-.564-.266-1.215-.266-1.953 0-1.05.343-1.944 1.028-2.682-.321-.79-.29-1.675.091-2.656.252-.078.625-.02 1.12.176.495.195.857.362 1.087.5.23.14.415.257.554.352a9.245 9.245 0 012.5-.338c.859 0 1.693.113 2.5.338l.495-.312a7.01 7.01 0 011.197-.573c.46-.173.812-.221 1.055-.143.39.98.426 1.866.104 2.656.686.738 1.03 1.632 1.03 2.682 0 .738-.09 1.391-.268 1.96-.178.569-.407 1.024-.69 1.367a3.64 3.64 0 01-1.054.866c-.421.234-.83.403-1.224.508-.396.104-.84.182-1.335.234.451.39.677 1.007.677 1.85v2.746c0 .156.054.287.163.39.108.105.28.135.514.092 2.014-.669 3.657-1.873 4.928-3.613 1.272-1.74 1.908-3.7 1.908-5.88 0-1.813-.448-3.486-1.342-5.018z"
        fill="#fff"
      />
    </svg>
  ),
};
