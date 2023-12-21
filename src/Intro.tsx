import React from 'react';
import Header from './Header';
import './App.css';

function Intro() {
  return (
    <>
      <Header />
      
      <h2 id="anounce" style={{ margin: '0 10%', zIndex: 2, position: 'relative', textAlign: 'center', fontSize: '2.5rem', color: 'brown', initialLetter: 2 }}>
        Talysis have set themselves a challenging target of raising £15,000 for good causes during 2023, their 15th anniversary year and are giving you the opportunity to win £2,000 in the process!
      </h2>
      <section className="how-it-works">
        <h1 style={{ textAlign: 'center', fontSize: '60px', margin: '20px 0' }}>How it works</h1>
        <div className="work-process">
          <div className="work-process-item">
            <div className="work-process-svg">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="sketch" width="100px" height="100px" fill="#A0522D" aria-hidden="true">
                <path d="M925.6 405.1l-203-253.7a6.5 6.5 0 00-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 00.2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1 1.8 0 3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 00.2-8.3zM645.2 206.4l34.4 133.9-132.5-133.9h98.1zm8.2 178.5H370.6L512 242l141.4 142.9zM378.8 206.4h98.1L344.3 340.3l34.5-133.9zm-53.4 7l-44.1 171.5h-93.1l137.2-171.5zM194.6 434.9H289l125.8 247.7-220.2-247.7zM512 763.4L345.1 434.9h333.7L512 763.4zm97.1-80.8L735 434.9h94.4L609.1 682.6zm133.6-297.7l-44.1-171.5 137.2 171.5h-93.1z"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: '40px' }}>1. Buy your squares (at £2.00 each)</h2>
            <a id="buyBtn" href="/buy">Buy Now</a>
          </div>
          <div className="work-process-item">
            <div className="work-process-svg">
              <svg viewBox="0 0 1024 1024" focusable="false" data-icon="shopping-cart" width="100px" height="100px" fill="#A0522D" aria-hidden="true">
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: '40px' }}>2. Add them to your basket and make your payment (to our charitable cause)</h2>
          </div>
          <div className="work-process-item">
            <div className="work-process-svg">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="trophy" width="100px" height="100px" fill="#A0522D" aria-hidden="true">
                <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: '30px' }}>3. At 2pm on 31st October 2023, the contestants will be lined up on the starting line and released into the field to do…. what dogs do naturally! The owner of the square which receives the first pile of muck wins £2,000!</h2>
          </div>
        </div>
        <div className="center-content" style={{ textAlign: 'center' }}>
          <img src="emoji.png" alt="emoji" width="45px" height="45px" />
          <span style={{ fontSize: '50px', color: '#A0522D' }}> YOU COULD WIN £2,000 </span>
          <img src="emoji.png" alt="emoji" width="45px" height="45px" />
        </div>
      </section>
      <section style={{ marginTop: '35px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '60px', margin: '10px 0' }}>Contestants</h1>
        <div style={{ display: 'flex', alignItems: 'stretch', height: '80px' }}>
          <hr style={{ display: 'inline-block', flexGrow: 4, margin: '0 20px', alignSelf: 'center', border: '2px solid #A0522D' }} />
          <h5 style={{ color: '#A0522D', textAlign: 'center', flexGrow: 2, fontSize: '25px', display: 'inline-block', margin: 'auto' }}>Meet the dogs</h5>
          <hr style={{ display: 'inline-block', flexGrow: 4, margin: '0 20px', alignSelf: 'center', border: '2px solid #A0522D' }} />
        </div>
      </section>
      <section className="" style={{ width: '80%', margin: '0 auto', display: 'flex', flexWrap: 'wrap' }}>
        <div className="contestant">
          <img className="contestant-image" alt='charlie' src="charlie.jpg" style={{ height: '600px' }} />
          <div id="info1" className="contestant-info" style={{ display: 'block1', textAlign: 'center' }}>
            <h3>Charlie:</h3>
            <p>Breed: Working Cocker Spaniel</p>
            <p>Age: 12</p>
            <p>Tipsters Advice: Very obedient & loyal, always willing to please. Definitely in with a chance</p>
          </div>
        </div>
        <div className="contestant">
          <img className="contestant-image" alt='boo' src="boo.jpg" height="600px" />
          <div id="info2" className="contestant-info" style={{ display: 'block1' }}>
            <h3>Boo</h3>
            <p>Breed: Maltes-shitz-poo</p>
            <p>Age: 11</p>
            <p>Tipsters Advice: A small, well fed with 2 poos in his breed name; surely stands a great chance</p>
          </div>
        </div>
        <div className="contestant">
          <img className="contestant-image" alt='molly' src="molly.jpg" style={{ height: '600px' }} />
          <div id="info4" className="contestant-info" style={{ display: 'block1' }}>
            <h3>Molly</h3>
            <p>Breed: Labrodor</p>
            <p>Age: 8</p>
            <p>Tipsters Advice: Always fast out of the blocks, despite a strong field she’s favoured</p>
          </div>
        </div>
        <div className="contestant2" style={{ display: 'inline-block', width: '51%' }}>
          <img className="contestant-image" alt='betty' src="betty.jpg" style={{ height: '600px' }} />
          <div id="info3" className="contestant-info" style={{ display: 'block1' }}>
            <h3>Betty</h3>
            <p>Breed: Labrador</p>
            <p>Age: 9</p>
            <p>Tipsters Advice: Woa oa big Betty! Big dog, big appetite, big chance!</p>
          </div>
        </div>
        <div className="contestant2" style={{ display: 'inline-block', width: '40%' }}>
          <img className="contestant-image" alt='gus-poppy' src="gus-poppy.jpg" style={{ height: '600px' }} />
          <div id="info5" className="contestant-info" style={{ display: 'block1' }}>
            <div style={{ float: 'left', width: '50%' }}>
              <h3>Gus</h3>
              <p>Breed: Labrador</p>
              <p>Age: 4</p>
              <p>Tipsters Advice: The alpha male of the pack – he never likes to lose!</p>
            </div>
            <div style={{ float: 'left', width: '50%' }}>
              <h3>Poppy</h3>
              <p>Breed: Labrador</p>
              <p>Age: 2</p>
              <p>Tipsters Advice: The youngster; great pace, great attitude and keen to please. She could prove herself in this challenge!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="charity-partners" style={{ backgroundImage: 'linear-gradient(to right, #816c32 , #493d1d)', padding: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-block', margin: '50px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '50px', color: '#DAA520' }}>Our Charity Partners</h2>
            <a href="https://www.yorkshirecancerresearch.org.uk/" target="_blank" rel="noopener noreferrer"><img src="charity1.png" alt="Charity 1" /></a>
            <a href="https://www.dementiaforward.org.uk/" target="_blank" rel="noopener noreferrer"><img src="charity2.jpg" alt="Charity 2" /></a>
            <a href="https://www.leedshospitalscharity.org.uk/donate/mnd-centre-appeal" target="_blank" rel="noopener noreferrer"><img src="charity3.jpg" alt="Charity 3" /></a>
          </div>
          <div style={{ textAlign: 'center', margin: '50px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '50px', color: '#DAA520' }}>Contact us</h2>
            <a href="https://www.talysis.co.uk" target="_blank" rel="noopener noreferrer"><img src="logo3.png" width="200" height="200" alt="logo 2" /></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
