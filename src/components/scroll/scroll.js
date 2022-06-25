import {  ScrollView } from "react-native";
import Card from '../card/Card'


export default function Scroll() {

  const cards = [
    {
      img: 'https://m.media-amazon.com/images/I/51O2VDOG81L._AC_SX342_.jpg',
      title: 'camisa',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLs-KeLlSvrGv407axcCEYsGHgMuCqsoyxA&usqp=CAU',
      title: 'calça',
    },

    {
      img: 'data:image/jpeg;base64,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',
      title: 'telefone',
    },

    {
      img: 'data:image/jpeg;base64,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',
      title: 'fone',
    },

    {
      img: 'data:image/jpeg;base64,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',
      title: ' carregador',
    }
    
  ]
  return (
    <ScrollView contentContainerStyle={{paddingBottom:"20%"}}>
      
      {cards.map((card, i) =>
        <Card key={i} title={card.title} imageLink={card.img} />
      )}
    </ScrollView>
  );
}