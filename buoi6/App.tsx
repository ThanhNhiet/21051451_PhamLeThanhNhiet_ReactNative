import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const DATA = [
  {
    id: '01',
    img: require('./assets/cooker.png'),
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: '02',
    img: require('./assets/khoGa.png'),
    title: 'Khô gà',
    shop: 'LTD Food',
  },
  {
    id: '01',
    img: require('./assets/cooker.png'),
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: '02',
    img: require('./assets/khoGa.png'),
    title: 'Khô gà',
    shop: 'LTD Food',
  },
  {
    id: '01',
    img: require('./assets/cooker.png'),
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: '02',
    img: require('./assets/khoGa.png'),
    title: 'Khô gà',
    shop: 'LTD Food',
  },
  {
    id: '01',
    img: require('./assets/cooker.png'),
    title: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Devang',
  },
  {
    id: '02',
    img: require('./assets/khoGa.png'),
    title: 'Khô gà',
    shop: 'LTD Food',
  },
];

type ItemProps = {
  title: string;
  img: any;
  shop: string;
};

const Item = ({ title, img, shop }: ItemProps) => (
  <View style={styles.itemContainer}>
    <Image source={img} style={styles.itemImage} />
    <View style={styles.itemInfo}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.shopText}>Shop: {shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

export default function App({ goBack }: { goBack: () => void }) {
  return (
    <View style={styles.container}>
   <View style={styles.topNavigation}>
  <Image style={styles.icon} source={require("./assets/back.png")} />
  <Text style={styles.chatTitle}>Chat</Text>
  <Image style={styles.icon} source={require("./assets/cart.png")} />
</View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} img={item.img} shop={item.shop} />
        )}
        keyExtractor={item => item.id}
      />

      <View style={styles.topNavigation}>
        <Image style={styles.icon} source={require("./assets/recent.png")} />
        <Image style={styles.icon} source={require("./assets/home.png")} />
        <Image style={styles.icon} source={require("./assets/return.png")} />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    flexDirection: "row",
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#1ba9ff',
    height: 50,
    marginTop: 40,
  },
  chatTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
  icon: {
    height: 40,
    width: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 10,
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray'
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  shopText: {
    fontSize: 14,
    color: 'gray',
  },
  chatButton: {
    backgroundColor: 'red',
    height: 60,
    width: 100,
    justifyContent: 'center',
    marginLeft: 10,
  },
  chatButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  },
});
