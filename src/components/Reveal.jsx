import { useInView } from '../hooks';

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
