interface DotIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

function DotIcon({ width = 24, height = 24, title, ...rest } : DotIconProps) {
  return (
    <svg {...rest} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {title && <title>{title}</title>}
      <circle cx="12.1" cy="12.1" r="1"></circle>
    </svg>
  )
}

export default DotIcon