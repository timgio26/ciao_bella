export type dogsitter = {
    id: string;
    name: string;
    rating: number;
    profileUrl: string;
    city: string;
    description: string;
    pricePerDay: number;
  };


  export type Review = {
    review_id: string;
    rating: number;
    review: string;
    customer_name: string;
    order_date: string;
}
  
  export let dogSitters: dogsitter[] = [
    {
      id: "1",
      name: "Justyna Kowalska",
      rating: 4.5,
      profileUrl: "https://dog-sitter.com/justyna",
      city: "Sopot",
      description:
        "Friendly and experienced dog lover providing personalized dog sitting services in Sopot.",
      pricePerDay: 30,
    },
    {
      id: "2",
      name: "Marcin Lewandowski",
      rating: 4.3,
      profileUrl: "https://petsitting.com/marcin",
      city: "Gdansk",
      description:
        "Reliable pet sitter with a passion for dogs, available for both short and long-term assignments.",
      pricePerDay: 35,
    },
    {
      id: "3",
      name: "Anna Nowak",
      rating: 4.7,
      profileUrl: "https://dogcare.com/anna",
      city: "Sopot",
      description:
        "Offering professional and nurturing dog sitting services, ensuring your pet feels at home.",
      pricePerDay: 32,
    },
    {
      id: "4",
      name: "Piotr Zielinski",
      rating: 4.0,
      profileUrl: "https://pets.com/piotr",
      city: "Gdansk",
      description:
        "Dedicated dog sitter with years of experience, committed to providing the best care for your furry friend.",
      pricePerDay: 28,
    },
    {
      id: "5",
      name: "Katarzyna Wisniewska",
      rating: 4.6,
      profileUrl: "https://pupsitter.com/kasia",
      city: "Gdynia",
      description:
        "Enthusiastic dog lover offering reliable and loving dog sitting services in Gdynia.",
      pricePerDay: 34,
    },
    {
      id: "6",
      name: "Tomasz Kaczmarek",
      rating: 3.9,
      profileUrl: "https://dogwalker.com/tomasz",
      city: "Gdynia",
      description:
        "Trustworthy dog sitter with a focus on providing a safe and enjoyable experience for your pet.",
      pricePerDay: 29,
    },
    {
      id: "7",
      name: "Magdalena Baran",
      rating: 4.4,
      profileUrl: "https://petsitting.com/magdalena",
      city: "Gdansk",
      description:
        "Experienced and compassionate dog sitter, ensuring your pet is well taken care of and happy.",
      pricePerDay: 31,
    },
    {
      id: "8",
      name: "Bartosz Wojcik",
      rating: 3.8,
      profileUrl: "https://dogcare.com/bartosz",
      city: "Sopot",
      description:
        "Reliable and friendly dog sitter offering personalized care and attention for your dog.",
      pricePerDay: 27,
    },
    {
      id: "9",
      name: "Ewa Szymanska",
      rating: 4.2,
      profileUrl: "https://dog-sitting.com/ewa",
      city: "Gdynia",
      description:
        "Professional dog sitter with a love for animals, providing top-notch care for your pets.",
      pricePerDay: 33,
    },
    {
      id: "10",
      name: "Pawel Marek",
      rating: 4.1,
      profileUrl: "https://petsitting.com/pawel",
      city: "Sopot",
      description:
        "Dedicated dog sitter with a focus on creating a comfortable and loving environment for your pet.",
      pricePerDay: 30,
    },
  ];



 export const ReviewList : Review[] = [
    {
      "review_id": "001",
      "rating": 5,
      "review": "The best dog sitter ever! My dog absolutely loves them. They took amazing care and even sent me daily updates.",
      "customer_name": "Jan Kowalski",
      "order_date": "2025-01-20"
    },
    {
      "review_id": "002",
      "rating": 4,
      "review": "Very good care for the dog, my dog was happy. Only a slight delay in communication.",
      "customer_name": "Anna Nowak",
      "order_date": "2025-01-18"
    },
    {
      "review_id": "003",
      "rating": 5,
      "review": "Great sitter! My dog felt safe and happy.",
      "customer_name": "Marek Wiśniewski",
      "order_date": "2025-01-15"
    },
    {
      "review_id": "004",
      "rating": 5,
      "review": "Great sitter! My dog felt safe and happy.",
      "customer_name": "Marek Wiśniewski",
      "order_date": "2025-01-15"
    }
  ]


export type Orderdb = {
  order_id: string;
  order_status: "active"|"canceled"|"finished";
  order_start_date: Date;
  order_end_date: Date;
  dogsitter_name: string;
  num_of_dog: number;
  total_price: number;
}

export let ordersdb:Orderdb[] = [
  {
    order_id: "#20240125121212123",
    order_status: "active",
    order_start_date: new Date("2025-01-15"),
    order_end_date: new Date("2025-01-20"),
    dogsitter_name: "Jan Kowalski",
    num_of_dog: 2,
    total_price: 150
  },
  {
    order_id: "#20240125121212124",
    order_status: "finished",
    order_start_date: new Date("2025-01-10"),
    order_end_date: new Date("2025-01-15"),
    dogsitter_name: "Maria Nowak",
    num_of_dog: 1,
    total_price: 75
  },
  {
    order_id: "#20240125121212125",
    order_status: "canceled",
    order_start_date: new Date("2025-01-05"),
    order_end_date: new Date("2025-01-10"),
    dogsitter_name: "Anna Zielińska",
    num_of_dog: 3,
    total_price: 225
  },
  {
    order_id: "#20240125121212126",
    order_status: "active",
    order_start_date: new Date("2025-01-18"),
    order_end_date: new Date("2025-01-23"),
    dogsitter_name: "Michał Wiśniewski",
    num_of_dog: 2,
    total_price: 150
  },
  {
    order_id: "#20240125121212127",
    order_status: "finished",
    order_start_date: new Date("2025-01-02"),
    order_end_date: new Date("2025-01-07"),
    dogsitter_name: "Anna Kwiatkowska",
    num_of_dog: 1,
    total_price: 75
  }
];
  
  
  