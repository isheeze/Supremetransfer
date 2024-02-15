import { defineField } from "sanity";
import { QueueListIcon } from '@heroicons/react/24/outline'

const header = {
  name: "header",
  title: "Header",
  type: "document",
  icon: QueueListIcon,
  fields: [
    defineField({
        name: "menu",
        title: "Menu Items",
        type: "array",
        of: [
            {
                type: "object", // This specifies the type of values in the array
                fields: [
                    {
                        name: "label",
                        type: "string",
                        title: "Label",
                    },
                    {
                        name: "url",
                        type: "string",
                        title: "URL",
                    },
                    defineField({
                        name: "submenu",
                        title: "Submenu",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "label",
                                        type: "string",
                                        title: "Label",
                                    },
                                    {
                                        name: "url",
                                        type: "string",
                                        title: "URL",
                                    },
                                ],
                            },
                        ],
                    })
                ],
            },
        ],
    }),
    {
      name: "menuColor",
      title: "Color Code for menu items",
      description: "like #000000 for black color.",
      type: "string",
      initialValue: "#000000",
    },
    {
      name: "phoneBG",
      title: "Color Code for Background of phone number",
      description: "like #000000 for black color.",
      type: "string",
      initialValue: "#000000",
    },
    {
      name: "phoneColor",
      title: "Color Code for phone number",
      type: "string",
      initialValue: "#333333",
    }
  ]
};

export default header;