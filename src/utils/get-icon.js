import iconInstagram from "./../assets/images/icon-instagram.svg";
import iconFacebook from "./../assets/images/icon-facebook.svg";
import iconTwitter from "./../assets/images/icon-twitter.svg";
import iconYoutube from "./../assets/images/icon-youtube.svg";

const getIcon = (type) => {
    switch (type) {
        case "instagram":
            return iconInstagram;
        case "youtube":
            return iconYoutube;
        case "twitter":
            return iconTwitter;
        default:
            return iconFacebook;
    }
};

export default getIcon;
