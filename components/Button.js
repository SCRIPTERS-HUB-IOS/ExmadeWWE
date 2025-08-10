import Link from 'next/link'

export default function Button({ href, external, children, className, glass }) {
  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          glass ? 'glass-button' : 'neon-button'
        } inline-block text-center w-full max-w-xs`}
      >
        {children}
      </a>
    )
  return (
    <Link href={href}>
      <a className={`${glass ? 'glass-button' : 'neon-button'} inline-block w-full max-w-xs`}>
        {children}
      </a>
    </Link>
  )
}
