interface inputtype{
    type: string,
    name: string,
    value: string,
    change: (e: string) => void,
    textLabel?: string
}
export const InputLogin = ({ name, value, change, type, textLabel }:inputtype) => {
  return (
    <div className='login-input'>
      { textLabel && <label className='text-normal' htmlFor="">{textLabel}</label>}
      <input type={type} name={name} value={value} onChange={e => change(e.target.value)} />
    </div>
  )
}
