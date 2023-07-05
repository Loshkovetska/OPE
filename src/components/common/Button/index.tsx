import classNames from 'classnames'
import Link from 'next/link'
import { ReactNode } from 'react'
import Boom from '../../../assets/boomerang.svg'
const Button = ({
  isLink = false,
  isTarget,
  content,
  link,
  classStr,
  isSubmit = false,
  onClick,
}: {
  isLink?: boolean
  isTarget?: boolean
  content: string | ReactNode
  link?: string
  classStr: string
  isSubmit?: boolean
  onClick?: () => void
}) => {
  if (isSubmit) {
    return (
      <button className={classNames('button', classStr)} type="submit">
        <span> {content}</span>
        <Boom className="button__anim" />
      </button>
    )
  }
  if (isLink && link) {
    return (
      <Link
        href={link}
        className={classNames("button", classStr)}

      >
        <span> {content}</span>
        <Boom className="button__anim" />
      </Link>
    );
  }
  return (
    <div className={classNames('button', classStr)} onClick={onClick}>
      <span> {content}</span>
      <Boom className="button__anim" />
    </div>
  )
}

export default Button
