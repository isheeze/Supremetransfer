import { defineField } from "sanity";
import { QueueListIcon } from '@heroicons/react/24/outline'

const about = {
  name: "about",
  title: "About",
  type: "document",
  icon: QueueListIcon,
  fields: [
    defineField({
        name: "sections",
        title: "Sections",
        type: "array",
        of: [
            {
                type: "object", // This specifies the type of values in the array
                fields: [
                    {
                        name: "heading",
                        type: "string",
                        title: "Heading",
                    },
                    {
                        name: "subheading",
                        type: "string",
                        title: "Subeading",
                    },
                    {
                        name: "description",
                        type: "text",
                        rows: 4,
                        title: "Description",
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: { hotspot: true },
                    },
                    {
                        name: "leftimage",
                        type: "boolean",
                        title: "Image on left side",
                    },
                    {
                        name: "gap",
                        type: "number",
                        title: "Gap Between points",
                    },
                    defineField({
                        name: "blocks",
                        title: "Text blocks",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "heading",
                                        type: "string",
                                        title: "Heading",
                                    },
                                    {
                                        name: "description",
                                        type: "text",
                                        rows: 4,
                                        title: "Description",
                                    },
                                ],
                            },
                        ],
                    }),
                    defineField({
                        name: "points",
                        title: "Points",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "icon",
                                        type: "iconPicker",
                                        title: "Icon",
                                        options: {
                                        storeSvg: true
                                        }
                                    },
                                    {
                                        name: "heading",
                                        type: "string",
                                        title: "Heading",
                                    },
                                    {
                                        name: "description",
                                        type: "text",
                                        rows: 4,
                                        title: "Description",
                                    },
                                ],
                            },
                        ],
                    })
                ],
            },
        ],
    })
  ]
};

export default about;