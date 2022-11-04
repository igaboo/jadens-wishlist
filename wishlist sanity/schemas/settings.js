export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Profile Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Page Title",
      type: "string",
    },
    {
      name: "description",
      title: "Page Description",
      type: "string",
    },
    {
      name: "colors",
      title: "Site Colors",
      type: "object",
      fields: [
        { name: "bgColor", type: "color", title: "Background Color" },
        { name: "cardColor", type: "color", title: "Card Color" },
        { name: "linkColor", type: "color", title: "Link Color" },
        { name: "darkFont", type: "boolean", title: "Dark Text Color?" },
      ],
    },
  ],
};
