interface DataIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string
}

function DataIcon({ width = 24, height = 24, title, ...rest } : DataIconProps) {
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>{title}</title>
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  )
}

export default DataIcon