import img1 from '../../assets/img/banner.jpg';
import img2 from '../../assets/img/conserver.jpg';
import img3 from '../../assets/img/distribuer_et_transporter.jpg';
import img4 from '../../assets/img/acheminer.jpg';
import '../../assets/style/styleSlide.css';


const SlideShow = () => {
    let counter = 1;
    setInterval(function(){
        document.getElementById('radio'+counter).checked = true;
        counter++;
        if(counter>4){
            counter = 1;
        }
    },5000);
    return (
        <div>
            
            <div class="slider">
            <h1 className="bannerTitle">Bienvenue sur l'intranet Conhexa</h1>
                <div class="slides">
                    
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                
                    <div class="slide first">
                        <img src={img1} alt=""/>
                    </div>
                    <div class="slide">
                        <img src={img2} alt=""/>
                    </div>
                    <div class="slide">
                        <img src={img3} alt=""/>
                    </div>
                    <div class="slide">
                        <img src={img4} alt=""/>
                    </div>
                    <div class="navigation-auto">
                        <div class="auto-btn1"></div>
                        <div class="auto-btn2"></div>
                        <div class="auto-btn3"></div>
                        <div class="auto-btn4"></div>
                    </div>
                </div>
                <div class="navigation-manual">
                    <label for="radio1" class="manual-btn"></label>
                    <label for="radio2" class="manual-btn"></label>
                    <label for="radio3" class="manual-btn"></label>
                    <label for="radio4" class="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}
export default SlideShow;