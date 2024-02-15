import { QueueListIcon } from '@heroicons/react/24/outline'

const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  icon: QueueListIcon,
  fields: [
    {
      name: "menuColor",
      title: "Color Code for menu items",
      description: "like #000000 for black color.",
      type: "string"
    },
    {
      name: "phoneBG",
      title: "Color Code for Background of phone number",
      description: "like #000000 for black color.",
      type: "string"
    },
    {
      name: "phoneColor",
      title: "Color Code for Background of phone number on hover",
      description: "When mouse goes over phone number it's background color.",
      type: "string"
    }
  ],
  initialValue: {
    websiteName: "#000000",
    phoneBG: "#000000",
    phoneColor: "#FFFFFF"
  }
};

export default footer;