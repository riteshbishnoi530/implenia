import Redbox from "../../public/assets/images/red-box.webp";
import Bluebox from "../../public/assets/images/blue-box.webp";
import Goldbox from "../../public/assets/images/gold-box.webp";
import Family from "../../public/assets/images/family-friendly.webp";
import Mobile from "../../public/assets/images/mobile-sos.webp";
import Hps from "../../public/assets/images/hps-eps.webp";
import Profile from "../../public/assets/images/profile.webp";

interface StoriesItem {
  image: any;
  title: string;
  cardBoxClass: string;
  boxContent: string;
}

interface KickboxProcessItem {
  image: any;
  imageAlt: string;
  subTitle: string;
  title: string;
  description: string;
  boxDuration: string;
  budget: string;
}
export const HEADER_LIST = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Stories",
      link: "#stories",
    },
    {
      title: "Community",
      link: "#community",
    },
    {
      title: "Contact",
      link: "#contact",
    }
  ];

  export const KICK_BOX_LIST = [
    {
        number:"+155",
        ideas: "Ideas submitted"
    },
    {
        number:"+325",
        ideas: "Active Platform users"
    },
    {
        number:"+250",
        ideas: "Community Members"
    }
  ]

  export const KICKBOX_PROCESS_LIST: KickboxProcessItem[] = [
    {
      image: Redbox,
      imageAlt: "red box",
      subTitle: "Validate",
      title: "RedBox",
      description:
        "You’ve taken the first step -welcome to the RedBox phase! In this phase, you’ll validate your idea and test its business potential. The RedBox concludes with you pitching your idea to internal sponsors to secure funding for the BlueBox phase.",
      boxDuration: "Duration: 2 months",
      budget: "Start Budget: 700 CHF/EUR 20% of your working time",
    },
    {
      image: Bluebox,
      imageAlt: "blue box",
      subTitle: "Pilot",
      title: "BlueBox",
      description:
        "This phase begins once you’ve secured a sponsor. Here, you’ll test your pilot with real customers, gather insights, and make improvements. Upon successful testing, you’ll receive support to secure a sponsor for the final implementation phase.",
      boxDuration: "Duration: 4-6 months",
      budget: "Budget: According to funding 20% of  your working time",
    },
    {
      image: Goldbox,
      imageAlt: "gold box",
      subTitle: "Implement",
      title: "GoldBox",
      description:
        "Once you've proven that your idea has real business potential, you'll move to the GoldBox phase. Congratulations! This is your opportunity to scale and implement your idea within the organization, as a separate project, or even as a spin-off.",
      boxDuration: "Duration: ongoing",
      budget: "Budget: According to funding 20-100% of your working time",
    },
  ];

  export const STORIES_LIST: StoriesItem[] = [
    {
      image: Family,
      title: "Family Friendly Implenia",
      cardBoxClass: "bg-lightBlue",
      boxContent: "BlueBox",
    },
    {
      image: Mobile,
      title: "Mobile SOS-Station",
      cardBoxClass: "bg-orange",
      boxContent: "GoldBox",
    },
    {
      image: Hps,
      title: "HPS-EPS Tunnelelement",
      cardBoxClass: "bg-orange",
      boxContent: "GoldBox",
    },
  ];

  export const COMMUNITY_LIST = [
    {
      heading:
        "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
      profile: Profile,
      post: "Head Division Buildings",
      name: "Jens Vollmar",
    },
    {
      heading:
        "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
      profile: Profile,
      post: "Head Division Buildings",
      name: "Jens Vollmar",
    },
    {
      heading:
        "With innovative and efficient solutions we can surprise our customers and increase our chances of success - I experienced this in many projects. Take the time to be courageous and active with new ideas!",
      profile: Profile,
      post: "Head Division Buildings",
      name: "Jens Vollmar",
    },
  ];