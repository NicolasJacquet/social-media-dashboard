const initialState = [
    {
        id: "876876hgjh",
        label: "Page Views",
        type: "facebook",
        number: 87,
        gain: 3,
    },
    {
        id: "89743de6976qs",
        label: "Likes",
        type: "facebook",
        number: 52,
        lost: 2,
    },
    {
        id: "7863bghjsaz679",
        label: "Likes",
        type: "instagram",
        number: 5462,
        gain: 2257,
    },
    {
        id: "07891dzad675",
        label: "Profile Views",
        type: "instagram",
        number: 52898,
        gain: 1375,
    },
    {
        id: "9821bhgaax786",
        label: "Retweets",
        type: "twitter",
        number: 117,
        gain: 303,
    },
    {
        id: "614562huygudz65",
        label: "Likes",
        type: "twitter",
        number: 507,
        gain: 553,
    },
    {
        id: "0985dez781dza12",
        label: "Likes",
        type: "youtube",
        number: 107,
        lost: 19,
    },
    {
        id: "89756bbnd89qaz67",
        label: "Total Views",
        type: "youtube",
        number: 1407,
        lost: 12,
    },
];

const statsReducer = (stats = initialState) => {
    return stats;
};

export default statsReducer;
