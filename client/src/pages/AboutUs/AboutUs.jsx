import React from "react";
import AboutUsLeftbar from "../../components/AboutUsLeftbar/AboutUsLeftbar";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
const AboutUs = () => {
    const sectionStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      };
    
      const containerStyle = {
        maxWidth: "800px",
        padding: "0 10px",
        textAlign: "center",
      };
    
      const titleStyle = {
        fontSize: "2.5rem",
        marginBottom: "30px",
      };
    
      const contentStyle = {
        marginBottom: "40px",
      };
    
      const descriptionStyle = {
        fontSize: "1.2rem",
        marginBottom: "20px",
        lineHeight: "1.6",
      };
    return (
    <>
        <div>
              <Navbar />
        </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="px-6"><AboutUsLeftbar /></div>
                    <div className="col-span-2 px-5">
                        <section style={sectionStyle}>
                            <div style={containerStyle}>
                                <h2 style={titleStyle}>About Us</h2>
                                    <div style={contentStyle}>
                                        <p style={descriptionStyle}>
                                            We are a young team of web developers.
                                        </p>
                                        <p style={descriptionStyle}>
                                            People love learning new things, but often they do not 
                                            have the posibility to do it. 
                                        </p>
                                        <p style={descriptionStyle}>
                                            This is the reason which stands 
                                            behind our website creation.
                                        </p>
                                        <p style={descriptionStyle}>
                                            This website is intended to help the persons who have
                                            the desire to learn more about a particular thing, skill
                                            or simply something that they are passionate about.
                                            In exchange for it, they will share their knowledge 
                                            about a thing that they are good at. 
                                        </p>
                                        <SocialMedia/>

                                    </div>
                            </div>
                        </section>
                    </div>
            
            </div>


    
            
    </>
        );
};

export default AboutUs;