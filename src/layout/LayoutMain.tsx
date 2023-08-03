import "../style/layout.css";
import HeadComponent from './components/HeadComponent';
import BottomComponent from './components/BottomComponent';
export const LayoutMain = ({children}: any) => {
  return (
    <div className='layout-main'>
        <HeadComponent/>
        {children}
        <BottomComponent />
    </div>
  )
}
