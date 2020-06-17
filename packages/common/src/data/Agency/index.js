import BlogImage1 from '../../assets/image/agency/blog/blog-img1.png';
import BlogImage2 from '../../assets/image/agency/blog/blog-img2.jpg';
import BlogImage3 from '../../assets/image/agency/blog/blog-img3.png';
import Member1 from '../../assets/image/agency/team/member-1.jpg';
import Member2 from '../../assets/image/agency/team/member-2.jpg';
import Member3 from '../../assets/image/agency/team/member-3.jpg';

const data = {
  menuItems: [
    {
      label: 'Feature',
      path: '#featureSection',
      offset: '80',
    },
    {
      label: 'Work History',
      path: '#workHistorySection',
      offset: '67',
    },
    {
      label: 'Portfolio',
      path: '#blogSection',
      offset: '67',
    },
    {
      label: 'Quality feature',
      path: '#qualitySection',
      offset: '67',
    },
    {
      label: 'Testimonial',
      path: '#testimonialSection',
      offset: '100',
    },
    {
      label: 'Team Member',
      path: '#teamSection',
      offset: '67',
    },
    {
      label: 'FAQ',
      path: '#faqSection',
      offset: '67',
    },
  ],
  aboutus: [
    {
      id: 1,
      title: 'Amazing communication experience.',
      icon: 'flaticon-next',
    },
    {
      id: 2,
      title: 'Best designing experience with trending tools and sizes.',
      icon: 'flaticon-next',
    },
    {
      id: 3,
      title: 'Training and communication method remotely.',
      icon: 'flaticon-next',
    },
    {
      id: 4,
      title: '24/7 Hour onine supports.',
      icon: 'flaticon-next',
    },
  ],
  qualityFeature: [
    {
      id: 1,
      icon: 'flaticon-flask',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 2,
      icon: 'flaticon-pencil-case',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 3,
      icon: 'flaticon-ruler',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      id: 4,
      icon: 'flaticon-briefing',
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ],
  blog: [
    {
      id: 1,
      title: 'Teal.Garden',
      thumbnail_url: BlogImage1,
      date:
        'DISCOVER PROCESSES AND TOOLS FOR SELFMANAGED AND DISTRIBUTED TEAMS',
      postLink: '#1',
    },
    {
      id: 2,
      title: 'Habitat',
      thumbnail_url: BlogImage2,
      date:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      postLink: '#2',
    },
    {
      id: 3,
      title: 'VotingApp',
      thumbnail_url: BlogImage3,
      date:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      postLink: '#3',
    },
  ],
  teamMember: [
    {
      id: 1,
      name: 'Jessica Fanddy',
      thumbnail_url: Member1,
      designation: 'Co Founder',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 2,
      name: 'Devid Justingul',
      thumbnail_url: Member2,
      designation: 'Senior Ui/UX Designer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
    {
      id: 3,
      name: 'Handdy Albuzz',
      thumbnail_url: Member3,
      designation: 'Article Writer',
      social_links: [
        {
          id: 1,
          icon: 'flaticon-facebook-logo',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-twitter-logo-silhouette',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-instagram',
          url: '#',
        },
        {
          id: 1,
          icon: 'flaticon-dribble-logo',
          url: '#',
        },
      ],
    },
  ],
  faq: [
    {
      id: 1,
      expend: true,
      title: 'How to contact with Customer Service?',
      description:
        'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
    },
    {
      id: 2,
      title: 'App installation failed, how to update system information?',
      description:
        'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
    },
    {
      id: 3,
      title: 'Website reponse taking time, how to improve?',
      description:
        'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
    },
    {
      id: 4,
      title: 'New update fixed all bug and issues?',
      description:
        'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
    },
  ],
  menuWidget: [
    {
      id: 1,
      title: 'Products',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Habitat',
        },
        {
          id: 2,
          url: '#2',
          text: 'Teal.Garden',
        },
        {
          id: 3,
          url: '#3',
          text: 'Voting App',
        },
      ],
    },
    {
      id: 2,
      title: 'Our Information',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'About us',
        },
        {
          id: 2,
          url: '#2',
          text: 'Contact',
        },
        {
          id: 3,
          url: '#3',
          text: 'Privacy Policy',
        },
        {
          id: 4,
          url: '#4',
          text: 'Legal Policy',
        },
      ],
    },
    {
      id: 3,
      title: 'Deora',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Section 1',
        },
        {
          id: 2,
          url: '#2',
          text: 'Section 2',
        },
        {
          id: 3,
          url: '#3',
          text: 'Section 3',
        },
        {
          id: 4,
          url: '#4',
          text: 'Section 4',
        },
        {
          id: 5,
          url: '#5',
          text: 'Section 5',
        },
      ],
    },
    {
      id: 4,
      title: 'Principles',
      menuItems: [
        {
          id: 1,
          url: '#1',
          text: 'Deora Purpose',
        },
        {
          id: 2,
          url: '#2',
          text: 'Our Vision',
        },
        {
          id: 3,
          url: '#3',
          text: 'Teal Organisations',
        },
        {
          id: 4,
          url: '#4',
          text: 'Solarpunk',
        },
      ],
    },
  ],
  social_profile: [
    {
      id: 1,
      icon: 'flaticon-facebook-logo',
      link: '#1',
    },
    {
      id: 2,
      icon: 'flaticon-twitter-logo-silhouette',
      link: '#2',
    },
    {
      id: 3,
      icon: 'flaticon-instagram',
      link: '#3',
    },
    {
      id: 4,
      icon: 'flaticon-tumblr-logo',
      link: '#4',
    },
    {
      id: 5,
      icon: 'flaticon-dribble-logo',
      link: '#5',
    },
  ],
};
export default data;
