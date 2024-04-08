
import profile from './profile.png';
import workImg from './workImg.png';
import work2Img from './work2Img.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Birol",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Testimonials",
      link: "#projects",
    }
    // {
    //   title: "Links",
    //   link: "/links",
    // }
    // {
    //   title: "Blog",
    //   link: "https://medium.com/@hashirshoaeb",
    // }
  ],
}
export const intro = {
  title: "Hey, I'm Birol",
  description: "Experienced full-stack software engineer with a passion for empowering the next generation of tech innovators through personalized and engaging computer science tutoring.",
  image: profile.src,
  workImage: workImg.src,
  work2Image: work2Img.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "With a rich background as a senior full-stack software engineer at industry giants like Ford Motor Company and J.P. Morgan, I possess a profound understanding of computer science's practical and theoretical aspects.",
    "This experience allows me to offer students a unique perspective on how computer science principles are applied in real-world, high-stakes environments.",
    "I am passionate about sharing my knowledge and skills to foster the development of aspiring programmers, offering them personalized, insight-driven learning experiences. My blend of industry experience, technical proficiency, and educational commitment positions me as an unparalleled resource for those seeking to excel in computer science and make impactful contributions to the tech world.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Ultimate Convenience ",
      description: "Through personalized and interactive sessions via Zoom, I meet students where they are, both physically and conceptually. Those who work with me benefit from individualized assistance with assignments, test preparation, lab work, and more. My flexible scheduling offers convenience and value unmatched by other tutors. I provide instruction in programming languages such as Java and Python, meticulously tailoring my approach to the AP® Computer Science curricula.",
      icons: null,
    },
    {
      title: "Highest Value ",
      description: "Leveraging my industry experience and familiarity with AP® Computer Science A (and Principles), I offer highly effective and comprehensive support in real-time tutoring. My approach is to build meaningful relationships with my students, fostering a sense of investment and unlocking a work ethic many may not realize they possess. By making challenging concepts accessible and providing timely formative assessments, I can tailor my instruction to address specific areas of need, thereby maximizing both value and time efficiency.",
      icons: null,
    },
    {
      title: "Continuous Feedback and Improvement",
      description: "I maintain an open line of communication for feedback and continuously adapt my teaching methods to maximize effectiveness and student satisfaction.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Testimonials",
  cards: [
    {
      //title: "StarBook",
      //description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
      //image: profile.src,
    },
    {
      //title: "QuranTalk",
      //description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
      // icons: [
      //   {
      //     icon: faAppStore,
      //     link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
      //   },
      //   {
      //     icon: faGooglePlay,
      //     link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
      //   },
      // ]
    },
    {
      //title: "Portfolio",
      //description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
      // icons: [
      //   {
      //     icon: faGithub,
      //     link: "https://github.com/hashirshoaeb/portfolio",
      //   },
      // ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Ready to elevate your computer science skills and unlock your potential? Feel free to reach out directly by email at birolguldal@gmail.com or call/text at (734)-972-2928.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:birolguldal@gmail.com",
      isPrimary: true,
    },
    {
      title: "Call Me",
      link: "tel:+17349722928",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Birol Guldal | tutor | computer science | michigan | ann arbor",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
  workImage: workImg.src,
  work2Image: work2Img.src,
}

export const links = {
  image: profile.src,
  workImage: workImg.src,
  work2Image: work2Img.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ]
}