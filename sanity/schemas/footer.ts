import { QueueListIcon } from '@heroicons/react/24/outline'
import { defineField } from 'sanity';

const footer = {
  name: "footer",
  title: "Footer",
  type: "document",
  icon: QueueListIcon,
  fields: [
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "object", // This specifies the type of values in the array
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "alt",
              type: "string",
              title: "Alt",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "Menus",
      title: "Menus",
      type: "array",
      of: [
        {
          type: "object", // This specifies the type of values in the array
          fields: [
            {
              name: "title",
              title: "Heading",
              type: "string"
            },
            defineField({
              name: "menu",
              title: "Menu",
              type: "array",
              of: [
                {
                  type: "object", // This specifies the type of values in the array
                  fields: [
                    {
                      name: "label",
                      title: "Label",
                      type: "string"
                    },
                    {
                      name: "url",
                      type: "string",
                      title: "Url",
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
      name: "titleColorCode",
      type: "string",
      title: "Title Color Code",
    },
    {
      name: "menuColorCode",
      type: "string",
      title: "Menu Color Code",
    }
  ]
};

export default footer;