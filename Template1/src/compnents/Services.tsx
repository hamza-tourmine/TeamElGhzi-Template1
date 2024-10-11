import '../style/Services.css';
import logo1 from '../../public/images/icon-11.png';
import logo2 from '../../public/images/icon-21.png'
import logo3 from '../../public/images/icon-31.png'
export default function Services(){
    return <div className="container_services">
        <div className='first_Section'>
            <div className='sctionA'>
                <img src={logo1} alt="" />
                <div>
                    <h1>2,513</h1>
                    <span>2K+ Projects Completed</span>
                </div>
            </div>
            <div className='sctionB'>
                <img src={logo2} alt="" />
                <div>
                    <h1>85%</h1>
                    <span>85% Client Satisfaction Rate</span>
                </div>
            </div>
            <div className='sctionC'>
                <img src={logo3} alt="" />
                <div>
                    <h1>30,456</h1>
                    <span>30K users Egaged</span>
                </div>
            </div>
        </div>
        <div className='Main_title'>
            <h1 >Our Services</h1>
        </div>
        <div className='under_title'>
            <span>Creative Solutions for Your Business.</span>
        </div>

        <div className='Carld_container'>
            <div className='Carld1'>
                <span className='cartd_title'>Graphic Design</span>
                <ol>
                    <li>Logo Design.</li>
                    <li>Branding Identity</li>
                    <li>Stationery Design:</li>
                    <li>Print Design</li>
                    <li>Digital Design</li>
                </ol>
                <button className='cartd_BTN'>Discover More</button>
            </div>
            <div className="cartd2">
                <span className='cartd_title'>Motion Graphic</span>
                <ol>
                    <li>Logo Animation:</li>
                    <li>Explainer Videos</li>
                    <li>Social Media Content</li>
                    <li>Video Editing</li>
                    <li>Animation:</li>
                </ol>
                <button className='cartd_BTN'>Discover More</button>
            </div>
            <div className='cartd3'>
                <span className='cartd_title'>3D Design</span>
                <ol>
                    <li>3D Modeling</li>
                    <li>Texturing and Materials</li>
                    <li>3D Rendering</li>
                    <li>3D Animation</li>
                    <li>3D Environment Design</li>
                </ol>
                <button className='cartd_BTN'>Discover More</button>
            </div>
        </div>
    </div>
}