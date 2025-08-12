import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type Props = {
  href?: string;
  tone?: 'accent' | 'neutral';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ href, tone='accent', children, ...rest }: Props){
  const cls = `btn ${tone==='accent' ? 'btn-accent' : 'btn-neutral'}`;
  if(href) return <Link className={cls} href={href}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}
