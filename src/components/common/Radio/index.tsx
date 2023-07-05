import classNames from 'classnames'

const Radio = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <div className={classNames('radio-but', isSelected && 'selected')}></div>
  )
}

export default Radio
