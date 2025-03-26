interface DocumentIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

function DocumentIcon({ width = 24, height = 24, title, ...rest }: DocumentIconProps) {
  return (
    <svg {...rest} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {title && <title>{title}</title>}
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
      <path d="M10 9H8"></path><path d="M16 13H8"></path>
      <path d="M16 17H8"></path>
    </svg>
  )
}

export default DocumentIcon