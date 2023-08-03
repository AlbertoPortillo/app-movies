
type checkType = {
  onclickCheck: () => void
}

export default function CheckLogin({ onclickCheck }: checkType) {
  return (
    <div className='login-check-body'>
        <input onClick={() => onclickCheck()} type="checkbox" name="" id="" />
        <p>He leido y acepto los terminos y condiciones</p>
    </div>
  )
}
