import pulse from './images/cardiogram.png';
import thermometer from './images/thermometer.png';
import blood from './images/blood.png';
import glucose from './images/glucose-meter.png';
import arrow from './images/right-arrow.png';
import {Outlet, Link} from 'react-router-dom';
import {useState} from 'react';

export default function HomePage() {
  const [clicked, setClicked] = useState(true);

  function change(){
    setClicked(false);
  }


    const dashContent = [
        {title: 'Heart Rate', points:'102 bpm', img:pulse, text:'Your heart rate is normal, Pulse is the most important physiological indicator of your health. It is the number of times your heart beats per minute.'},
        {title: 'Temperature', points:'308.5K', img:thermometer, text:'Your temperature is normal, Temperature is the measure of the average kinetic energy of the particles in a substance. Temperature below 35.5C is considered low and indicate a serious illness.'},
        {title: 'Blood Pressure', points:'120/80', img:blood, text:'Your blood pressure is normal, Blood pressure is the force of blood pushing against the walls of your arteries. High blood pressure is a major risk factor for heart disease and stroke.'},
        {title: 'Glucose', points:'85mg/dl', img:glucose, text:'The normal glucose level for a fasting person is between 70 to 100 mg/dl. A fasting blood sugar level of 100 to 125 mg/dl is considered prediabetes.'},
    ]

    const dashItem = dashContent.map((item, index) => {
        return(
            <div key={index} className={`${item.title}s`}>
                <aside>
                    <span className={item.title}>
                        <img src={item.img} alt={item.altText} />
                    </span>
                    <p>{item.points}</p>
                </aside>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        )
    })

  return (
    <section className="homepage">
      <div>
        <p>Welcome Dear <b>Sizu Money,</b> </p>
        <p><b>HSPN:</b> 123412341234</p>
        <p>Have a nice day and don't forget to take care of your health!</p>
        {clicked ? <Link to="more" className='more' onClick={change}>Read More <img src={arrow} alt="arrow" /></Link> : ""}
        <Outlet />
      </div>

      <aside>
        {dashItem}
      </aside>
    </section>
  );
}