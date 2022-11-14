import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';

function handlePress1() {
  console.log("The Subtle Art of Not Giving a Fuck read");
}
function handlePress2() {
  console.log("Overprikkeld brein");
}
function handlePress3() {
  console.log("It Starts with Us");
}
function handlePress4() {
  console.log("Onbespreekbaar");
}


export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading1}>Bookshop</Text>
      <Image style={styles.tileImg} source={require('./assets/shopping-cart.png')}/>
      <View style={styles.tilesContainer}></View>
      <View style={styles.tile}>
      </View>
    <View style={styles.tiles}>
        <Text style={styles.tileTitle}>The Subtle Art of Not Giving a Fuck</Text>
        <Text style={styles.tileSubtitle}>By Mark Manson</Text>
        <Text style={styles.tilAlinea}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
        <Text style={styles.tileISBN}>ISBN 978-0-0624-5771-4</Text>
    </View>
    <TouchableNativeFeedback onPress={() => handlePress1()}>
          <View style={styles.tileMini}>
            <Text style={styles.tileButton}>READ</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.tiles}>
        <Text style={styles.tileTitle1}>Overprikkeld brein</Text>
        <Text style={styles.tileSubtitle1}>By Charlotte Labee</Text>
        <Text style={styles.tilAlinea1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
        <Text style={styles.tileISBN1}>ISBN 978-9-0439-2488-7</Text>
    </View>
    <TouchableNativeFeedback onPress={() => handlePress2()}>
          <View style={styles.tileMini}>
            <Text style={styles.tileButton1}>READ</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.tiles}>
        <Text style={styles.tileTitle2}>It Starts with Us</Text>
        <Text style={styles.tileSubtitle2}>By Colleen Hoover</Text>
        <Text style={styles.tilAlinea2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
        <Text style={styles.tileISBN2}>ISBN 978-1-3985-1817-9</Text>
    </View>
    <TouchableNativeFeedback onPress={() => handlePress3()}>
          <View style={styles.tileMini}>
            <Text style={styles.tileButton2}>READ</Text>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.tiles}>
        <Text style={styles.tileTitle3}>Omdat we hier niet genoeg over praten</Text>
        <Text style={styles.tileSubtitle3}>By Onbespreekbaar</Text>
        <Text style={styles.tilAlinea3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Text>
        <Text style={styles.tileISBN3}>ISBN 978-9-4014-8226-4</Text>
    </View>
    <TouchableNativeFeedback onPress={() => handlePress4()}>
          <View style={styles.tileMini}>
            <Text style={styles.tileButton3}>READ</Text>
          </View>
        </TouchableNativeFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading1: {
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
  tileImg: {
    width: 30,
    height: 30,
    marginTop: -35,
    marginLeft: 350,
  },
  tilesContainer: {
    marginTop: 50,
  },
  tile: {
    flexBasis: '46%',
    height: 220,
    backgroundColor: "#fff",
    marginVertical: '1.25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
  },
  tiles: {
    marginTop: -230,
    margin: 20,
  },
  tileTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tilAlinea: {
    marginTop: 15,
  },
  tileISBN: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  tileButton: {
    marginTop: -40,
    marginLeft: 300,
    marginRight: 70,
    fontWeight: 'bold',
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 2,
  },
  tileTitle1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 250,
  },
  tilAlinea1: {
    marginTop: 15,
  },
  tileISBN1: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  tileButton1: {
    marginTop: -40,
    marginLeft: 300,
    marginRight: 70,
    fontWeight: 'bold',
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 2,
  },
  tileTitle2: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 250,
  },
  tilAlinea2: {
    marginTop: 15,
  },
  tileISBN2: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  tileButton2: {
    marginTop: -40,
    marginLeft: 300,
    marginRight: 70,
    fontWeight: 'bold',
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 2,
  },
  tileTitle3: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 250,
  },
  tilAlinea3: {
    marginTop: 15,
  },
  tileISBN3: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  tileButton3: {
    marginTop: -40,
    marginLeft: 300,
    marginRight: 70,
    fontWeight: 'bold',
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 2,
  },
})
