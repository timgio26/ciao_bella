import {Text,View,StyleSheet, FlatList, ScrollView} from 'react-native'
import { SitterTile } from './SitterTile';

export type dogsitter = {
    name: string;
    rating: number;
    profileUrl: string;
    city: string;
    description: string;
    pricePerDay: number;
}

const dogSitters:dogsitter[] = [
    {
      name: "Justyna Kowalska",
      rating: 4.5,
      profileUrl: "https://dog-sitter.com/justyna",
      city: "Sopot",
      description: "Friendly and experienced dog lover providing personalized dog sitting services in Sopot.",
      pricePerDay: 30
    },
    {
      name: "Marcin Lewandowski",
      rating: 4.3,
      profileUrl: "https://petsitting.com/marcin",
      city: "Gdansk",
      description: "Reliable pet sitter with a passion for dogs, available for both short and long-term assignments.",
      pricePerDay: 35
    },
    {
      name: "Anna Nowak",
      rating: 4.7,
      profileUrl: "https://dogcare.com/anna",
      city: "Sopot",
      description: "Offering professional and nurturing dog sitting services, ensuring your pet feels at home.",
      pricePerDay: 32
    },
    {
      name: "Piotr Zielinski",
      rating: 4.0,
      profileUrl: "https://pets.com/piotr",
      city: "Gdansk",
      description: "Dedicated dog sitter with years of experience, committed to providing the best care for your furry friend.",
      pricePerDay: 28
    },
    {
      name: "Katarzyna Wisniewska",
      rating: 4.6,
      profileUrl: "https://pupsitter.com/kasia",
      city: "Gdynia",
      description: "Enthusiastic dog lover offering reliable and loving dog sitting services in Gdynia.",
      pricePerDay: 34
    },
    {
      name: "Tomasz Kaczmarek",
      rating: 3.9,
      profileUrl: "https://dogwalker.com/tomasz",
      city: "Gdynia",
      description: "Trustworthy dog sitter with a focus on providing a safe and enjoyable experience for your pet.",
      pricePerDay: 29
    },
    {
      name: "Magdalena Baran",
      rating: 4.4,
      profileUrl: "https://petsitting.com/magdalena",
      city: "Gdansk",
      description: "Experienced and compassionate dog sitter, ensuring your pet is well taken care of and happy.",
      pricePerDay: 31
    },
    {
      name: "Bartosz Wojcik",
      rating: 3.8,
      profileUrl: "https://dogcare.com/bartosz",
      city: "Sopot",
      description: "Reliable and friendly dog sitter offering personalized care and attention for your dog.",
      pricePerDay: 27
    },
    {
      name: "Ewa Szymanska",
      rating: 4.2,
      profileUrl: "https://dog-sitting.com/ewa",
      city: "Gdynia",
      description: "Professional dog sitter with a love for animals, providing top-notch care for your pets.",
      pricePerDay: 33
    },
    {
      name: "Pawel Marek",
      rating: 4.1,
      profileUrl: "https://petsitting.com/pawel",
      city: "Sopot",
      description: "Dedicated dog sitter with a focus on creating a comfortable and loving environment for your pet.",
      pricePerDay: 30
    }
  ];
  

  

export function SitterList(){
    return(
        <ScrollView>
            {dogSitters.map((each,index)=>{return(
              <SitterTile key={index} data={each}/>
            )})}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header1:{
        fontSize:20,
        fontWeight:'bold'
    }
})
