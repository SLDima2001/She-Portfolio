import React, { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Portfolio() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const sectionsRef = useRef([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const response = await fetch('https://my-port-folio-onn7.vercel.app/send-email/form1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error sending email: ${response.status}`);
      }
        
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();

        if (responseData.success) {
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          
          
        } else {
          alert('Failed to send email.');
        }
        
      } else {
        
      }
    } catch (error) {
      console.alert(error);
      alert('Error');
    }
    window.location.reload(); // Reload the page
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(50px)";
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const styles = {
    app: {
      fontFamily: "'Roboto', sans-serif",
      backgroundColor: "#f7f9fb", // Soft pastel gray-blue background
      color: "#39424e", // Dark grayish teal text color
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      background: "#7fb3b7", // Soft greenish teal header
      padding: "10px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
    },
    nav: {
      display: "flex",
      gap: "20px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "1.2rem",
      transition: "color 0.3s",
    },
    navLinkHover: {
      color: "#f5e1a4", // Light golden yellow hover effect
    },
    heroSection: {
      textAlign: "center",
      padding: "50px 20px",
      background: "#98b3b0", // Soft sage green background
      borderRadius: "10px",
      marginBottom: "40px",
      color: "#fff",
    },
    section: {
      textAlign: "center",
      padding: "40px 20px",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      opacity: 0,
      transform: "translateY(50px)",
    },
    section1: {
      display:isMobile?"":"",
      textAlign: "center",
      padding: "40px 20px",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      opacity: 0,
      transform: "translateY(50px)",
    },
    section3: {
      display:isMobile?'inline-block':'flex',
      textAlign: "center",
      padding: "40px 20px",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      opacity: 0,
      transform: "translateY(50px)",
      gap:'20px',
    },
    aboutContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      marginTop: "20px",
    },
    aboutImage: {
      width: "auto",
      height: "150px",
      borderRadius: "10%",
      marginBottom: "20px",
      border: "4px solid #d1d8e0", // Soft border color
    },
    aboutText: {
      fontSize:'20px',
      textAlign:isMobile? "center":"justify",
      lineHeight: "2",
      maxWidth: "100%",
      color: "black", // Muted gray-blue text
    },
    projectContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 2fr))",
      gap: "20px",
      marginTop: "20px",
    },
    projectCard: {
      backgroundColor: "#f1f6f2", // Soft pastel green background for cards
      borderRadius: "10px",
      padding: "40px",
      textAlign: "center",
      color: "#39424e", // Dark grayish teal text for cards
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s",
    },
    projectCardHover: {
      transform: "scale(1.05)",
    },
    projectImage: {
      width: "100%",
      height: "350px",
      objectFit: "cover",
      borderRadius: "10px 10px 0 0",
    },
    projectTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#2c3e50", // Darker teal for project titles
    },
    formContainer: {
      height:"430px",
      border: "2px solid #7fb3b7",
      maxWidth: "500px",
      margin: "auto",
      backgroundColor: "#f7f9fb", // Light pastel gray-blue for the form
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "12px 0",
      borderRadius: "5px",
      border: "1px solid #ddd",
      backgroundColor: "#fff",
      color: "#333",
    },
    submitButton: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#7fb3b7", // Soft greenish teal button
      border: "none",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    submitButtonHover: {
      backgroundColor: "#6d9b96", // Slightly darker teal for hover
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      background: "#7fb3b7", // Matching footer color with header
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "10px",
    },
    socialIcon: {
      color: "#fff",
      fontSize: "1.5rem",
      transition: "color 0.3s",
    },
    socialIconHover: {
      color: "#f5e1a4", // Golden yellow hover effect for icons
    },
    formimage: {
      width: "100%",
      height: "430px",
      objectFit: "cover",
      borderRadius: "10px 10px 0 0",
    },
  };

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div style={styles.logo}>MyPortfolio</div>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink} onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} onMouseLeave={(e) => (e.target.style.color = '')}>
            About
          </a>
          <a href="#projects" style={styles.navLink} onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} onMouseLeave={(e) => (e.target.style.color = '')}>
            Projects
          </a>
          <a href="#contact" style={styles.navLink} onMouseEnter={(e) => (e.target.style.color = styles.navLinkHover.color)} onMouseLeave={(e) => (e.target.style.color = '')}>
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section
          id="about"
          style={styles.section1}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>About Me</h2>
          <div style={styles.aboutContainer}>
            <div>
            <img
              src="https://github.com/SLDima2001/She-Portfolio/blob/main/frontend/My.jpg?raw=true"
              alt="Shehani Kavindya"
              style={styles.aboutImage}
            />
            </div>

            <div>
            <p style={styles.aboutText}>


            Hello! I'm M.H.A.S.K.Hettiarachchi, a passionate web developer with a strong foundation in creating dynamic and user-friendly web applications. I specialize in front-end development, with expertise in HTML, CSS, JavaScript, and modern frameworks like React.
I am deeply committed to crafting intuitive, aesthetically pleasing, and responsive web interfaces that enhance user experience. I love working on challenging projects that push my boundaries, whether it's building engaging user interfaces or integrating back-end services to deliver fully functional applications.
Outside of coding, I am always learning new technologies and staying up-to-date with the latest trends in the tech world. Whether it's mastering a new JavaScript library or exploring the latest design trends, I'm constantly growing my skill set to deliver cutting-edge web solutions.
With a strong attention to detail and a passion for perfection, I aim to transform ideas into reality by building websites and applications that are both visually appealing and highly functional.
Feel free to explore my portfolio and get in touch if you're interested in collaborating on exciting web projects!


            </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          style={styles.section}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Projects</h2>
          <div style={styles.projectContainer}>
            <a href="https://lahirutours.co.uk/">
            <div style={styles.projectCard} onMouseEnter={(e) => (e.target.style.transform = styles.projectCardHover.transform)} onMouseLeave={(e) => (e.target.style.transform = '')}>
              <img
                src="https://github.com/SLDima2001/My-PortFolio/blob/main/frontend/photo123.png?raw=true"
                alt="Lahiru Tours"
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>Lahiru Tours</h3>
              <p>Personalized travel experiences showcasing beautiful destinations.</p>
            </div>
            </a>
            <a href="https://www.figma.com/proto/0ZqKjHGHQUoh4rqVAu3q1H/HCI?node-id=109-67&node-type=canvas&t=wgjCtr4Sy2AXhhh2-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=109%3A67">
            <div style={styles.projectCard} onMouseEnter={(e) => (e.target.style.transform = styles.projectCardHover.transform)} onMouseLeave={(e) => (e.target.style.transform = '')}>
              <img
                src="https://github.com/SLDima2001/My-PortFolio/blob/main/frontend/Project%202.png?raw=true"
                alt="React App"
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>React Application</h3>
              <p>Dynamic React app with features such as authentication and form submission.</p>
            </div>
            </a>
          
          </div>
        </section>

<div>
  <h1 style={{textAlign:"center",fontSize:"2em",}}>Contact Us</h1>
</div>
        <section
          id="contact"
          style={styles.section3}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
         
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="phone"
                placeholder="Phone"
                style={styles.input}
                value={phone}
                onChange={(e) => setPhone(value.replace(/[^0-9]/g, ''))}
              />
              <textarea
                placeholder="Message"
                style={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                style={styles.submitButton}
                onMouseEnter={(e) => (e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor)}
                onMouseLeave={(e) => (e.target.style.backgroundColor = styles.submitButton.backgroundColor)}
              >
                Send Message
              </button>
            </form>
           
          </div>
          <img style={styles.formimage} src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section>
      </main>

      <footer style={styles.footer}>
        <div>Follow me on social media!</div>
        <div style={styles.socialIcons}>
         
      
        <a
          href="https://www.instagram.com/she_kavi_07/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialIcon}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/shehani-kavindya-hettiarachchi/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.socialIcon}
        >
          <FaLinkedin />
        </a>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
