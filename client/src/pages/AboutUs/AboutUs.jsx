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
                    <div className="col-span-2 border-t-slate-1500 px-6">
                        <section style={sectionStyle}>
                            <div style={containerStyle}>
                                <h2 style={titleStyle}>About Us</h2>
                                    <div style={contentStyle}>
                                        <p style={descriptionStyle}>
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                        </p>
                                        <p style={descriptionStyle}>
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                        </p>
                                        <p style={descriptionStyle}>
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                        </p>
                                        <p style={descriptionStyle}>
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
                                            bla bla blabla bla blabla bla blabla bla blabla bla bla
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