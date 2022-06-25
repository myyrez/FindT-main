import { View, Text, TouchableHighlight} from "react-native";
import { Entypo } from '@expo/vector-icons';
import Scroll from "../../components/scroll/scroll";
import styles from '../../style/home/home'


export default function Home({navigation}) {

  return (
    <View >
      <Scroll/>
      <TouchableHighlight style={styles.btn_plus }  onPress={() => navigation.navigate('Post')}>
     <Entypo name="plus" size={35} color="white" />
     </TouchableHighlight>
    </View>
  );
}
