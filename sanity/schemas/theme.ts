import { defineField } from "sanity";
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const theme = {
  name: "theme",
  title: "Theme",
  type: "document",
  icon: WrenchScrewdriverIcon,
  fields: [
    {
      name: "websiteName",
      title: "Website Name",
      type: "string"
    },
    {
      name: "websiteDescription",
      title: "Website Description",
      type: "text",
      rows: 4,
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "favicon",
      title: "Favicon",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      description: "Add your social media links:",
      fields: [
        {
          name: "phone",
          title: "Phone Number",
          type: "string",
          initialValue: "+442080732199",
        },
        {
          name: "whatsapp",
          title: "Whatsapp Number",
          type: "string",
          initialValue: "+442080732199",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
          initialValue: "https://facebook.com/",
        },
        {
          name: "linkedin",
          title: "Linkedin URL",
          type: "url",
          initialValue: "https://linkedin.com/in/",
        },
        {
          name: "twitter",
          title: "TwitterX URL",
          type: "url",
          initialValue: "https://twitter.com/",
        },
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
          initialValue: "https://instagram.com/",
        },
        {
          name: "email",
          title: "Email",
          type: "email",
          initialValue: "info@supremetransfer.co.uk",
        },
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    }
  ],
  initialValue: {
    websiteName: "Supreme Transfer"
  }
};

export default theme;