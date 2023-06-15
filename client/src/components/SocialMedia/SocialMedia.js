import { useContext } from "react";
import { ThemeContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  const theme = useContext(ThemeContext);

  const socialMediaIcons = [
    { icon: faFacebookF, url: "https://facebook.com" },
    { icon: faTwitter, url: "https://twitter.com" },
    { icon: faInstagram, url: "https://instagram.com" },
  ];

  return socialMediaIcons.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-media-link ${theme === "dark" ? "dark" : ""}`}
    >
      <FontAwesomeIcon
        icon={item.icon}
        size="2x"
        className={`social-media-icon ${theme === "dark" ? "dark" : "light"}mr-2 justify-center` }

      />
    </a>
  ));
}

export default SocialMedia;