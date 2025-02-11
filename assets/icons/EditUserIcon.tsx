interface EditUserIconProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}

function EditUserIcon({ width = 24, height = 24, title, ...rest }: EditUserIconProps) {
  return (
    <svg {...rest} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>{title}</title>
      <path d="M11.5 15H7a4 4 0 0 0-4 4v2"></path>
      <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
      <circle cx="10" cy="7" r="4"></circle>
    </svg>
  )
}

export default EditUserIcon