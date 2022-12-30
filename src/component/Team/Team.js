import React from "react"
import { Link } from "gatsby"

import Image from "../Images/Images"
import GroupsIcon from '@mui/icons-material/Groups';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const Team = () => {
  return (
    <> 
<section id="team" class="pb-5">
<div className="container my-4" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

<h6 className="text-primary"><i>Yogmaya</i></h6>
      <h1 className="text-md"><GroupsIcon fontSize="large"  color="secondary"></GroupsIcon>  OUR TEAM</h1>
      <hr style={{ margin: "20px 0" }} />
        <div class="row">
         
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                  
                                    <p> <Image class="img-fluid"   filename={`1.jpeg`}
                                   alt="1"/></p> <h4 class="card-title text-muted">VERSHA KUMARI</h4>
                                   <p className="text-center text-muted"><i>Web developer </i></p>
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4 ">
                                    <h4 class="card-title">VERSHA KUMARI</h4>
                                    <p class="card-text align-items-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p> <Image class="img-fluid"   filename={`2.jpg`}
                                   alt="1"/></p>
                                    <h4 class="card-title text-muted">ISHITA GUPTA</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                              
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">ISHITA GUPTA</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                                 </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <p><Image class="img-fluid"   filename={`4.jpg`}
                                   alt="1"/></p>
                                    <h4 class="card-title text-muted">TANYA GOSWAMI</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                             
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">TANYA GOSWAMI</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <div class="col-xs-12 col-sm-6 col-md-5 m-auto" >
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center ">
                                    <p> <Image class="img-fluid"   filename={`3.jpeg`}
                                   alt="1" style={{
                        
                                    margin: "0 auto",
                                   height: "270px",
                                   width: "320px",
                                  
                           }}/></p>
                                    <h4 class="card-title text-muted">VIDISHA MANGAL</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                                
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">VIDISHA MANGAL</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
            <div class="col-xs-12 col-sm-6 col-md-5 m-auto ">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                <p><Image class="img-fluid"   filename={`5.png`}
                                   alt="1"/></p>
                                    <h4 class="card-title text-muted">MUSKAN</h4>
                                    <p className="text-center text-muted"><i>Web developer </i></p>
                                 
                                    <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">MUSKAN</h4>
                                    <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

                                       </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
  

        </div>
    </div>
</section>
<div className="container">


    <div className="container my-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h6 className="text-primary">Yogmaya</h6>
      <h2 className="text-md"><QuestionAnswerIcon></QuestionAnswerIcon>  <i>Frequently Asked Questions  </i></h2>
 
    </div>
    <hr style={{ margin: "10px 0" }} />
<div className="row featurette">
  <div className="col-md-7 order-md-2">
  <div class="accordion container" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
             🔹 How often and for how long should I do the asanas?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              In the beginning, try to do it three times a week, each session lasting for about 45 minutes. After some practice, increase it to five times a week, for an hour each time.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                🔹 Do I need to be on a vegetarian diet to benefit from yoga?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              No. You can derive benefit from yoga without a special vegetarian diet. However, for the most complete yoga experience, a vegetarian diet is preferred. Vegetarian yogic foods are felt to calm the mind and sharpen the intellect. These foods supply the utmost energy and are digested easily.

              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header " id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                🔹 What is Hatha Yoga?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              “HA” means sun and “THA” means moon. Branches of the yoga practice that involve physical exercise, breathing practices, and movement. These exercises are designed to have a salutary effect on posture, flexibility, and strength and are intended ultimately to prepare the body to remain still for long periods of meditation.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                🔹 How often should I practice to have the best results?
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body ">
              When first starting out try going twice a week then after one month start going three times per week. If you add up to going 5-6 days a week make sure you always have at least one day off so your body can recouperate. Also if you are practicing yoga almost everyday its good idea to mix up the style (i.e. power yoga one day, yin the next…)
              </div>
            </div>
          </div>
  
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                🔹 What is Vinyasa or Power Yoga?
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Power yoga is a vinyasa style of yoga in which one pose is linked to the next by breath. It is a vigorous class and often modeled after poses in ashtanga yoga.
              </div>
            </div>
          </div>
       
          <div class="accordion-item">
            <h2 class="accordion-header" id="headinSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                🔹  What is Ashtanga Yoga?
              </button>
            </h2>
            <div
              id="collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              Patanjali's eight-limbed path, also called Raja Yoga. This yoga contains or should contain eight components: morality; ethics; posture; breath control; sense control; concentration; meditation; absorption. Also the "brand" name for the style of yoga developed and taught by Sri K. Pattabhi Jois with a set sequence of yoga postures that take a student from A-Z in Asana.
              </div>
            </div>
          </div>
          </div>
    
  </div>
  <div className="col-md-5 order-md-1">
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="data:image/jpeg;base64,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" />
  <img alt="Card image cap"   width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-lg" src="data:image/jpeg;base64,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" />
  
  </div>
</div>
</div>
    </>
    // <div className="container text-center py-5">
    //   <h2 className="pb-2 border-bottom text-center">Team Members</h2>
    //   <div className="row justify-content-center py-5">
    //     {Items.map((item, i) => {
    //       return (
    //         <div key={i} className="col-lg-4 col-md-6 col-sm-12">
    //           <div
    //             className="card card-body shadow mb-4 "
    //             style={{ height: "500px" }}
    //           >
    //             <Image
    //               className="d-block mx-lg-auto img-fluid"
    //               style={{
    //                 margin: "0 auto",
    //                 height: "200px",
    //                 width: "200px",
    //                 borderRadius: "10%",
    //               }}
    //               filename={`${item.img}.jpeg`}
    //               alt="1"
    //             />
    //             <h3 className="m-2">{item.name}</h3>

    //             <ul className="list-unstyled justify-content-center d-flex mb-0">
    //               <Link className="m-3" to={item.facebook}>
    //                 <Facebook />
    //               </Link>
    //               <Link className="m-3" to={item.instagram}>
    //                 <Instagram />
    //               </Link>
    //               <Link className="m-3" to={item.linkedin}>
    //                 <Linkedin />
    //               </Link>
    //             </ul>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

export default Team
