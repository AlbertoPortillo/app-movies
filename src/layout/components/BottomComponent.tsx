import __bptc_icon from '../../style/imgs/bptc_logo.png';
import __gptw_icon from '../../style/imgs/gptw_logo.png';
import __efi_icon from '../../style/imgs/efy_logo.png';
import __aws_icon from '../../style/imgs/aws_partner_logo.png';

export default function BottomComponent() {
  return (
    <div className='bottom'>
        <p className='text-header bottom-header-text'>We are coding the world of tomorrow_</p>
        <p className='text-normal bottom-long-text'>DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.</p>
        <div className='bottom-imgs'>
            <img src={__bptc_icon} alt="" />
            <img src={__gptw_icon} alt="" />
            <img src={__efi_icon} alt="" />
            <img src={__aws_icon} alt="" />
        </div>
    </div>
  )
}
