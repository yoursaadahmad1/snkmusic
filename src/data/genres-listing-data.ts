import img1 from '../../public/assets/img/genres/genres-01.jpg';
import img2 from '../../public/assets/img/genres/genres-02.jpg';
import img3 from '../../public/assets/img/genres/genres-03.jpg';
import img4 from '../../public/assets/img/genres/genres-04.jpg';
import img5 from '../../public/assets/img/genres/genres-05.jpg';
import img6 from '../../public/assets/img/genres/genres-06.jpg';
import img7 from '../../public/assets/img/genres/genres-07.jpg';
import img8 from '../../public/assets/img/genres/genres-08.jpg';
import img9 from '../../public/assets/img/genres/genres-09.jpg';
import img10 from '../../public/assets/img/genres/genres-10.jpg';
import { TGenresListing } from '@/types/types';
// genres-details-img
import detailsImg1 from '../../public/assets/img/news/news-02.png';
import detailsImg2 from '../../public/assets/img/work/work-thumb-02.png';
import detailsImg3 from '../../public/assets/img/trending/01.jpg';

const genres_listing_data: TGenresListing[] = [
    //tab-one data
    {
        id: 1,
        image: img1,
        price: 99,
        videoUrl: "3FWSZ6lvaSk",
        title: "The Different Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 2,
        image: img2,
        price: 134,
        videoUrl: "fMcOLvFg5es",
        activeClass: "active",
        title: "The Sweet lockdown",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Chicago",
        ratings: 5,
        ratingNum: 120
    },
    {
        id: 3,
        image: img3,
        price: 45,
        videoUrl: "GPE2qqhrl0M",
        title: "The Sonics Corporate Band",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Trenton",
        ratings: 4,
        ratingNum: 90
    },
    {
        id: 4,
        image: img4,
        price: 45,
        videoUrl: "Lli99OmkPwM",
        title: "The Northern Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Georgia",
        ratings: 5,
        ratingNum: 66
    },
    {
        id: 5,
        image: img5,
        price: 45,
        videoUrl: "lq82yt-Od1U",
        title: "Last Orders",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Concord",
        ratings: 5,
        ratingNum: 78
    },
    {
        id: 6,
        image: img6,
        price: 100,
        videoUrl: "M4lsB-B1O7U",
        title: "The Sweet The Jets",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "NYE City",
        ratings: 5,
        ratingNum: 90
    },
    {
        id: 7,
        image: img7,
        price: 77,
        videoUrl: "GE2jlxW24aI",
        title: "The Super Rollers",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 4,
        ratingNum: 100
    },
    {
        id: 8,
        image: img8,
        price: 129,
        videoUrl: "Pn0rXoW3dWU",
        title: "The Overloads music",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Thailand",
        ratings: 5,
        ratingNum: 69
    },
    {
        id: 9,
        image: img9,
        price: 140,
        videoUrl: "KAca7KQ9p-A",
        title: "The Audiotones vive",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 10,
        image: img10,
        price: 140,
        videoUrl: "URT7m-fJZ5Q",
        title: "The Audiotones vive",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Chicago",
        ratings: 4,
        ratingNum: 168
    },
    {
        id: 11,
        image: img5,
        price: 45,
        videoUrl: "R4AbzwYOmNE",
        title: "Last Orders",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Concord",
        ratings: 5,
        ratingNum: 78
    },
    {
        id: 12,
        image: img6,
        price: 100,
        videoUrl: "GHQcAGBmtSw",
        title: "The Sweet The Jets",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "NYE City",
        ratings: 5,
        ratingNum: 90
    },
    {
        id: 13,
        image: img7,
        price: 77,
        videoUrl: "qVtnGKrfoEY",
        title: "The Super Rollers",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 4,
        ratingNum: 100
    },
    {
        id: 14,
        image: img8,
        price: 129,
        videoUrl: "9Q8K8h7sR-Q",
        title: "The Overloads music",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Thailand",
        ratings: 5,
        ratingNum: 69
    },
    //tab-two data
    {
        id: 15,
        image: img1,
        price: 77,
        videoUrl: "3FWSZ6lvaSk",
        title: "The Different Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 16,
        image: img2,
        activeClass: "active",
        price: 100,
        videoUrl: "fMcOLvFg5es",
        title: "The Sweet lockdown",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Chicago",
        ratings: 5,
        ratingNum: 120
    },
    {
        id: 17,
        image: img3,
        price: 66,
        videoUrl: "GPE2qqhrl0M",
        title: "The Sonics Corporate Band",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Trenton",
        ratings: 4,
        ratingNum: 90
    },
    {
        id: 18,
        image: img4,
        price: 72,
        videoUrl: "Lli99OmkPwM",
        title: "The Northern Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Georgia",
        ratings: 5,
        ratingNum: 66
    },
    {
        id: 19,
        image: img5,
        price: 55,
        videoUrl: "lq82yt-Od1U",
        title: "Last Orders",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Concord",
        ratings: 5,
        ratingNum: 78
    },
    {
        id: 20,
        image: img6,
        price: 167,
        videoUrl: "M4lsB-B1O7U",
        title: "The Sweet The Jets",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "NYE City",
        ratings: 5,
        ratingNum: 90
    },
    {
        id: 21,
        image: img7,
        price: 127,
        videoUrl: "GE2jlxW24aI",
        title: "The Super Rollers",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 4,
        ratingNum: 100
    },
    {
        id: 22,
        image: img8,
        price: 145,
        videoUrl: "URT7m-fJZ5Q",
        title: "The Overloads music",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Thailand",
        ratings: 5,
        ratingNum: 69
    },
    {
        id: 23,
        image: img9,
        price: 140,
        videoUrl: "qVtnGKrfoEY",
        title: "The Audiotones vive",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    //genres-details data
    {
        id: 24,
        image: detailsImg1,
        title: "Ann, Wedding, Harrogate Hilton, Harrogate",
        description: "The group were fantastic, they made the evening go with a blast. Great choice of songs , the dance floor was full the whole time. We would totally recommend them.",
        mapLink: "https://www.google.com/maps",
        ratings: 5,
        date: "March 2023",
        wrapperBorderClass: "ms-border2",
    },
    {
        id: 25,
        image: detailsImg2,
        title: "Kathryn, Wedding, Stock Wedding Barn, Tatton",
        description: "Agent Smith were unbelievable at our wedding. Completely exceeded expectations. The band were engaging, funny and got everyone up and dancing from the first song.",
        mapLink: "https://www.google.com/maps",
        ratings: 4,
        date: "May 2023",
        wrapperBorderClass: "ms-border2",
    },
    {
        id: 26,
        image: detailsImg3,
        title: "Sue & Tom, Wedding, The Ashes Barn Wedding Venue",
        description: "Absolutely awesome. So much energy, great performers and crowd interaction! Agent Smith were so good! Judged the room perfectly - EVERYONE was up dancing all night!! Highly recommend!",
        mapLink: "https://www.google.com/maps",
        ratings: 5,
        date: "Jun 2023"
    },
    //genres-details slider data
    {
        id: 27,
        image: img1,
        price: 140,
        videoUrl: "3FWSZ6lvaSk",
        title: "The Different Lights",
        description: "Outstanding wedding band playing chart,indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 28,
        image: img2,
        price: 140,
        videoUrl: "fMcOLvFg5es",
        title: "The  Sweet lockdow",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Chicago",
        ratings: 4,
        ratingNum: 120
    },
    {
        id: 29,
        image: img3,
        price: 140,
        videoUrl: "GPE2qqhrl0M",
        title: "The Sonics Corporate Band",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Trenton",
        ratings: 5,
        ratingNum: 90
    },
    {
        id: 30,
        image: img4,
        price: 45,
        videoUrl: "Lli99OmkPwM",
        title: "The Northern Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Georgia",
        ratings: 5,
        ratingNum: 66
    },
    {
        id: 31,
        image: img5,
        price: 75,
        videoUrl: "lq82yt-Od1U",
        title: "Last Orders",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Concord",
        ratings: 5,
        ratingNum: 90
    },
    //genres-enquiry-list data
    {
        id: 32,
        image: img1,
        price: 99,
        activeClass: "active",
        videoUrl: "lq82yt-Od1U",
        title: "The Different Lights",
        musicName: "Rock & pop wedding & party band",
        description: " Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards. The group were fantastic, they made the evening go with a blast. Great choice of songs, the dance floor was full the whole time. We would totally recommend them.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 33,
        image: img2,
        price: 89,
        videoUrl: "3FWSZ6lvaSk",
        title: "The Groovy Beats",
        activeClass: "active",
        musicName: "Funk & soul party ensemble",
        description: "A funky and soulful party ensemble that will keep the groove going all night. Their energetic performance is guaranteed to get everyone on the dance floor.",
        mapLink: "https://www.google.com/maps",
        location: "California",
        ratings: 4.5,
        ratingNum: 72
    },
    {
        id: 34,
        image: img3,
        price: 79,
        videoUrl: "example-video-url-3",
        title: "Acoustic Serenity",
        activeClass: "active",
        musicName: "GE2jlxW24aI",
        description: "Create a romantic atmosphere with this acoustic duo. Perfect for small gatherings, weddings, and events where a more intimate musical experience is desired.",
        mapLink: "https://www.google.com/maps",
        location: "New York",
        ratings: 4.8,
        ratingNum: 64
    },
    {
        id: 35,
        image: img4,
        price: 109,
        videoUrl: "URT7m-fJZ5Q",
        title: "Electro Vibes",
        activeClass: "active",
        musicName: "Electronic dance DJ",
        description: "Get the party started with the latest electronic dance beats. This DJ knows how to create an electrifying atmosphere that will keep everyone dancing.",
        mapLink: "https://www.google.com/maps",
        location: "Florida",
        ratings: 4.9,
        ratingNum: 93
    },
    //Ideas Advice Data
    {
        id: 36,
        image: img1,
        price: 99,
        videoUrl: "3FWSZ6lvaSk",
        title: "The Different Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Ohio",
        ratings: 5,
        ratingNum: 85
    },
    {
        id: 37,
        image: img2,
        price: 134,
        videoUrl: "fMcOLvFg5es",
        activeClass: "active",
        title: "The Sweet lockdown",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Chicago",
        ratings: 5,
        ratingNum: 120
    },
    {
        id: 38,
        image: img3,
        price: 45,
        videoUrl: "GPE2qqhrl0M",
        title: "The Sonics Corporate Band",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Trenton",
        ratings: 4,
        ratingNum: 90
    },
    {
        id: 39,
        image: img4,
        price: 45,
        videoUrl: "Lli99OmkPwM",
        title: "The Northern Lights",
        description: "Outstanding wedding band playing chart, indie, rock anthems and Britpop and featuring guitars, keyboards.",
        mapLink: "https://www.google.com/maps",
        location: "Georgia",
        ratings: 5,
        ratingNum: 66
    },
]

export default genres_listing_data;