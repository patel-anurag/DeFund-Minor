import Head from "next/head";
import { CreateMember } from "../components/createMember";
import Navbar from "../components/navbar";
import { ProposalList } from "../components/proposalList";
import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init();
  },[])
  const { isMember, loading, account } = useData();

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-2xl font-bold text-gray-500 d-flex justify-center align-center">
          <div id="space">
            <div className={styles.elogo}>
                  <div className={styles.u1}></div>
                  <div className={styles.u2}></div>
                  <div className={styles.u3}></div>
                  <div className={styles.u4}></div>
                  <div className={styles.ct}></div>
                  <div className={styles.l1}></div>
                  <div className={styles.l4}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!account) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="text-2xl font-bold text-gray-500">
          Please connect Metamask Wallet
        </div>
      </div>
    );
  }
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Funding DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div className={styles.home_landing_parent}>
        <div className={styles.first_heading_div}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="10"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <span className={styles.first_heading}>Heading For First Line</span>
        </div>
        <div className={styles.second_heading_div}
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-delay="30"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <span className={styles.second_heading}>Heading For Second Line</span>
        </div>
        <div className={styles.para_span_div}
        >
          <div className="grid grid-cols-2 max-w-9xl justify-center">
            <div className="p-5 flex justify-center align-center"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
              <img src="/img1.png" alt="" style={{width:"50%"}}/>
            </div>
            <div className="p-5"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
            >
                <h1 className="text-xl my-2" style={{"color":"#fff"}}>Heading</h1>
                <span className={styles.para_span}>Heading For Second Line Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ter took a galley of type and scrambled it to make Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.first_div_parent}>
        <div className={styles.fdiv_heading_div}>
          First Div Heading
        </div>
        <div className="grid grid-cols-3 max-w-9xl justify-center">
          <div className={styles.fdiv_card_parent}
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
          >
            <div className={styles.fdiv_card_icon}>
              <img src="/icons8-ethereum-48.png" alt="" />
            </div>
            <div className={styles.fdiv_card_text}>
                Heading For Second Line Lorem Ipsum is simply dummy text Heading For Second Line Lorem Ipsum is simply dummy text
            </div>
          </div>
          <div className={styles.fdiv_card_parent}
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
          >
            <div className={styles.fdiv_card_icon}>
              <img src="/icons8-ethereum-48.png" alt="" />
            </div>
            <div className={styles.fdiv_card_text}>
                Heading For Second Line Lorem Ipsum is simply dummy text Heading For Second Line Lorem Ipsum is simply dummy text
            </div>
          </div>
          <div className={styles.fdiv_card_parent}
            // data-aos="fade-up"
            // data-aos-offset="200"
            // data-aos-delay="50"
            // data-aos-duration="800"
            // data-aos-easing="ease-in-out"
          >
            <div className={styles.fdiv_card_icon}>
              <img src="/icons8-ethereum-48.png" alt="" />
            </div>
            <div className={styles.fdiv_card_text}>
                Heading For Second Line Lorem Ipsum is simply dummy text Heading For Second Line Lorem Ipsum is simply dummy text
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timeline_div_parent} style={{marginTop:"50px"}}>
        <div className={styles.fdiv_heading_div}>
          Second Div Heading
        </div>
        <div className="container1">
                <div className="timeline">
                    <div className="timeline-container primary">
                        <div className="timeline-icon">
                            <i className="far fa-grin-wink"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Primary</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">1 Hours Ago</p>
                        </div>
                    </div>
                    <div className="timeline-container danger">
                        <div className="timeline-icon">
                            <i className="far fa-grin-hearts"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Danger</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">2 Hours Ago</p>
                        </div>
                    </div>
                    <div className="timeline-container success">
                        <div className="timeline-icon">
                            <i className="far fa-grin-tears"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Success</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">6 Hours Ago</p>
                        </div>
                    </div>
                    <div className="timeline-container warning">
                        <div className="timeline-icon">
                            <i className="far fa-grimace"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Warning</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">1 Day Ago</p>
                        </div>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline-icon">
                            <i className="far fa-grin-beam-sweat"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Secondary</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">3 Days Ago</p>
                        </div>
                    </div>
                    <div className="timeline-container info">
                        <div className="timeline-icon">
                            <i className="far fa-grin"></i>
                        </div>
                        <div className="timeline-body">
                            <h4 className="timeline-title"><span className="badge">Info</span></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                            <p className="timeline-subtitle">4 Days Ago</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
    <div className="footer">
  <div className="inner-footer">

    <div className="footer-items">
      <h1>Company Name</h1>
      <p>Description of any product or motto of the company.</p>
    </div>

    <div className="footer-items">
      <h3>Quick Links</h3>
      <div className="border1"></div> 
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Search</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Recipes</h3>
      <div className="border1"></div>  
        <ul>
          <a href="#"><li>Indian</li></a>
          <a href="#"><li>Chinese</li></a>
          <a href="#"><li>Mexican</li></a>
          <a href="#"><li>Italian</li></a>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Contact us</h3>
      <div className="border1"></div>
        <ul>
          <li><i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc</li>
          <li><i className="fa fa-phone" aria-hidden="true"></i>123456789</li>
          <li><i className="fa fa-envelope" aria-hidden="true"></i>xyz@gmail.com</li>
        </ul> 
      
        <div className="social-media">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-google-plus-square"></i></a>
        </div> 
    </div>
  </div>
</div>
  
    </>
  );
}