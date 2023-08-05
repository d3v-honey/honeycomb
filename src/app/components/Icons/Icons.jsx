import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Icons = ({ icon, ...props }) => {
  const icons = {
    chevronDown: faChevronDown,
    facebook: faFacebook,
    github: faGithub,
    instagram: faInstagram,
    linkedin: faLinkedin,
    twitter: faTwitter,
  };

  return <FontAwesomeIcon icon={icons[icon]} {...props} />;
};

export default Icons;
