const initialState = [
    {
        handle: "@nathanf",
        type: "facebook",
        number: 1987,
        gain: 12,
        link: "https://www.nicolasjacquet.be",
    },
    {
        handle: "@nathanf",
        type: "twitter",
        number: 1044,
        gain: 99,
        link: "https://www.nicolasjacquet.be",
    },
    {
        handle: "@nathanf",
        type: "instagram",
        number: 11276,
        gain: 1099,
        link: "https://www.nicolasjacquet.be",
    },
    {
        handle: "Nathan F.",
        type: "youtube",
        number: 8239,
        lost: 144,
        link: "https://www.nicolasjacquet.be",
    },
];

const followersReducer = (followers = initialState) => {
    return followers;
};

export default followersReducer;
