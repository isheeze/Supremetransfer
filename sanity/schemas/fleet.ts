import { defineField } from "sanity";
import { QueueListIcon } from '@heroicons/react/24/outline'

const fleet = {
  name: "fleet",
  title: "Fleet",
  type: "document",
  icon: QueueListIcon,
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
    defineField({
        name: "fleets",
        title: "Fleets",
        type: "array",
        of: [
            {
                type: "object", // This specifies the type of values in the array
                fields: [
                    {
                        name: "name",
                        type: "string",
                        title: "Name",
                    },
                    {
                        name: "factor",
                        type: "number",
                        title: "Price Factor",
                        description: "Leave it empty if you want {get quote} button on this."
                    },
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: { hotspot: true },
                    },
                    defineField({
                        name: "properties",
                        title: "Properties",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "property",
                                        type: "string",
                                        title: "Property",
                                    },
                                    {
                                        name: "icon",
                                        type: "iconPicker",
                                        title: "Icon",
                                        options: {
                                        storeSvg: true
                                        }
                                    }
                                ],
                            },
                        ],
                    }),
                ],
            },
        ],
    })
  ]
};

export default fleet;