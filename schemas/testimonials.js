export default {
    name: 'testimonials',
    tittle: 'Testimonials',
    type: "document",
    fields: [
        {
            name:"name",
            title: "Name",
            type: "string"
    },
        {
            name:"company",
            title: "Company",
            type: "string"
    },

    {
        name:"imageUrl",
        title: "ImgURL",
        type: "image",
        options: {
            hotspot: true,
        }
},

{
    name:"feedback",
    title: "Feedback",
    type: "string"
},

],
}