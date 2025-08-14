import React, { useEffect, } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';


function Skills() {
   

useEffect(() => {
AOS.init({ duration: 1200 });
;
}, []);

return (
<div className="home-container">
<h1 data-aos="fade-up">Le mie Competenze</h1>

<div className="skills-section">

<div className="skill" data-aos="fade-right">
<span><FaHtml5 style={{ color: '#e44d26', marginRight: '8px' }}/> HTML</span>
<div className="bar fill html"></div>
<p>Linguaggio per la creazione di pagine web, strutturando i contenuti in modo semantico.</p>
</div>

<div className="skill" data-aos="fade-left">
<span><FaCss3Alt style={{ color: '#264de4', marginRight: '8px' }}/> CSS</span>
<div className="bar fill css"></div>
<p>Styling avanzato per creare interfacce responsive, animate e moderne.</p>
</div>

<div className="skill" data-aos="fade-right">
<span><FaJs style={{ color: '#f0db4f', marginRight: '8px' }}/> JavaScript</span>
<div className="bar fill js"></div>
<p>Logica di programmazione per rendere interattive e dinamiche le applicazioni web.</p>
</div>

<div className="skill" data-aos="fade-left">
<span><FaReact style={{ color: '#61dafb', marginRight: '8px' }}/> React</span>
<div className="bar fill react"></div>
<p>Libreria JavaScript per lo sviluppo di interfacce moderne, performanti e riutilizzabili.</p>
</div>

</div>

</div>
);
}

export default Skills;