interface PolicyIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

function PolicyIcon({ width = 24, height = 24, title, ...rest }: PolicyIconProps) {
  return (
    <svg {...rest} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {title && <title>{title}</title>}
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <path d="M8 10h.01"></path><path d="M12 10h.01"></path>
      <path d="M16 10h.01"></path>
    </svg>
  )
}

export default PolicyIcon