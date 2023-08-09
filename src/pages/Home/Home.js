import './Home.css'
import React from 'react'
import img1 from "../../static/images/profile-1.jpg";
import img2 from "../../static/images/profile-2.jpg";
import img3 from "../../static/images/profile-3.jpg";
import img4 from "../../static/images/logo.png";


export default function Home() {

  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up" />
      </div>
      <nav className="navbar">
        <div className="max-width">
          
          <div className="logo"><a href="#"><img src={img4} /> Yoga<span>AI.</span></a></div>
          <ul className="menu">
            {/* <li><a href="#home" className="menu-btn">Home</a></li> */}
            <li><a href="#about" className="menu-btn">About</a></li>
            <li><a href="#services" className="menu-btn">Services</a></li>
            <li><a href="#skills" className="menu-btn">Tutorial</a></li>
            <li><a href="#teams" className="menu-btn">Team</a></li>
            <li><a href="#contact" className="menu-btn">Contact</a></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars" />
          </div>
        </div>
      </nav>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, there</div>
            <div className="text-2">Welcome to Yoga<span>AI.</span></div>
            <div className="text-3">I'm a Bot that will help you perform Yoga efficiently.<span className="typing" /></div>
            <a href="/start">Get Started</a>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About</h2>
          <div className="about-content">
            <div className="column right">
              <p>This is a realtime AI based Yoga Trainer which detects your pose and how well you are doing. We created this as a college project, and we have also deployed this project so that people can use it and the developers who are learning AI can also learn from this project and make their own AI project or they can also make improvements in this project. AI first predicts keypoints or coordinates of different parts of the body (basically where they are present in an image) and then it uses another classification model to classify the poses, if someone is doing a pose and the AI detects that the pose is around 95% or more accurate then it will notify you that you are doing it correctly (by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the Keypoints and building a neural network on top of that which uses these coordinates and classify a yoga pose. We have trained the model in python because of tensorflowJS we can leverage the support of browser so we converted the keras/tensorflow model to tensorflowJS.</p>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      {/* services */}
      <section className="services" id="services">
        <div className="max-width">
          <h2 className="title">Our Services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fas fa-paint-brush" />
                <div className="text">Children Yoga</div>
                <p>Kids are taught yoga exercises that help them deal with fluctuating emotions. Focus, concentration and confidence is enhanced.</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-chart-line" />
                <div className="text">Meditation</div>
                <p>Meditation will inspire & help you in managing mental health and overcoming anxiety and depression and provide more energy & efficiency</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fas fa-code" />
                <div className="text">Aerial Yoga</div>
                <p>It is an amazing addition to the practice as it provides the action of pulling, a movement that is lacking in the traditional yoga practice.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">Tutorial</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">Basic Tutorials</div>
              <p>1. When App ask for permission of camera, allow it to access to capture pose.</p>
              <p>2. Select what pose you want to do in the dropdown.</p>
              <p>3. Read Instrctions of that pose so you will know how to do that pose.</p>
              <p>4. Click on Start pose and see the image of the that pose in the right side and replecate that image in front of camera.</p>
              <p>5. If you will do correctly the skeleton over the video will become green in color and sound will start playing</p>

              {/* <a href="#">Read more</a> */}
            </div>
            <div className="column right">
              <div className="text">Camera Not Working?</div>
              <p>1. Check if the lens on the camera is clean or not. It should be completely clean so that the machine could get the input.</p>
              <p>2. Check if permission for camera is allowed or not, allow it to access to capture pose.</p>
              <p>3. Check if the webcam is connected to your pc or not.</p>
              <p>4. Restart your device.</p>
              <p>5. Check your webcam on another device, if it is working or not.</p>
              <p>6. Get your hardware checked by a certified Technician.</p>
            </div>
          </div>
        </div>
      </section>
      {/* teams  */}
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">Our Team</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <img src={img1} />
                <div className="text">Vijay Shankar Mishra</div>
                <p>Full Stack Web Developer, App Developer, Software Engineer </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={img2} />

                <div className="text">Abhishek Singh</div>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <img src={img3} />
                <div className="text">Mrityunjai Shukla</div>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact  */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Us</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>If you want to get in touch, please either use the below details to reach out to us or drop the details in the block to the right, we will reach out to you.</p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user" />
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">YogaAI. Community</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Shri Ramswaroop Memorial University, Lucknow</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">yogaai@xyz.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message us</div>
              <p>Please fill all the details below -</p>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea cols={30} rows={10} placeholder="Describe" required defaultValue={""} />
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* footer  */}
      <footer>
        <span><a href="#">Copyright </a><span className="far fa-copyright" /> 2023 | All rights reserved.</span>
      </footer>
    </div>
  )
}