import React from 'react';
import {  Text, SafeAreaView, View, StyleSheet, ScrollView, Linking, TouchableOpacity, ImageBackground, Dimensions, Image  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './Details'
import photos from '../data/intervention.js'
import {GridItem} from '../components/GridItem';

// video 
const paddingElement = 20;
const windowWidth = Dimensions.get('window').width - paddingElement;
const originalHeightElement = 450;
const originalWidthElement = 800;
const ratio = originalWidthElement / windowWidth;
const heightElement = originalHeightElement / ratio ;

// image grid
const imagePadding = 5;
const imagePaddingCount = 6;
const windowWidthForGrid = Dimensions.get('window').width - (imagePadding * imagePaddingCount);
const numberElements = 3;
const imageWidth = windowWidthForGrid / numberElements;
const imageHeight = 170;
const containerHeight = (imageHeight * 2) + (4 * imagePadding);
 


function InterventionScreen({ navigation }) {
  
  const ImageGrid = ({photos,episode}) => {
    const gridData = React.useMemo(() => photos.filter((photo) => photo.episode === episode), [episode]);
    return (
      <View style={styles.imageGrid}>
        {gridData.map((item,index)=>(
          <GridItem 
                  key={index}
                  item={item} 
                  itemContainer={styles.itemContainer} 
                  image={styles.image} 
                  navigation={navigation}/>             
        ))}
      </View>
    )
  }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Text style={styles.header}>Intervention Theory</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Did life on Earth evolve over millions of years, or was it created in the blink of an eye by god? That's the question at the core of the creation evolution debate. It is an ongoing, cultural, political, and theological dispute about the origins of the Earth, humanity, and life.
            </Text>
            <Text style={styles.sectionText}>
              Intervention theory puts an end to the dispute by harmonizing apparently two conflicting points of view. Intervention theory embraces both creationism and biological evolution by adding critical information from a variety of fields such as archeology, anthropology, astronomy, religion and biology, to name but a few.
            </Text>
            <Text style={styles.sectionText}>
              So what is intervention theory? to put it briefly, It is the theory that aliens “intervened” in the development of life on earth.
            </Text>                           
          </View>

          <Text style={styles.chapterHeader}>Episode 1</Text>
          <Text style={styles.chapterSubHeader}>The Fallen Alien</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode discusses the phenomenon of the elongated skulls.
            </Text>
            <Text style={styles.sectionText}>
            We present the Paracas skulls, artificial cranial deformation, DNA test, and physical analysis.
            </Text>
            <Text style={styles.sectionText}>
            Finally, we present ancient Egypt's dynastic rulers that had elongated skulls and necks, demigods and the Bible's concept of the Nephilim.
            </Text>                           
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=zoFTK9Mo0JM&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=1' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep1.jpg')}></ImageBackground>  
          </TouchableOpacity>
        
          <ImageGrid photos={photos} episode={1}/>

          <Text style={styles.chapterHeader}>Episode 2</Text>
          <Text style={styles.chapterSubHeader}>The Forgotten Mother</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode focuses on ancient Sumer, the first civilization, our forgotten mother culture. 
            </Text>
            <Text style={styles.sectionText}>
            We show how advanced and influential it was upon our modern civilization, and that it had been given out-of-place knowledge by their gods, the Anunnaki. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=JD3GSVAQzQM&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=2' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep2.jpg')}></ImageBackground>  
          </TouchableOpacity>   

          <ImageGrid photos={photos} episode={2}/>

          <Text style={styles.chapterHeader}>Episode 3</Text>
          <Text style={styles.chapterSubHeader}>The Super-Earth that Came Home for Dinner</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode focuses on the anomalies of the Solar System and NASA's resolution, namely, Planet Nine. 
            </Text>
            <Text style={styles.sectionText}>
            Furthermore, The Sumerians identified Planet Nine with Nibiru, the abode of the Anunnaki. We present its ancient depictions of nibiru and we reveal the original name of planet Earth and its depictions.
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=2WAUgkbX5DE&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=3' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep3.jpg')}></ImageBackground>  
          </TouchableOpacity>

          <ImageGrid photos={photos} episode={3}/>

          <Text style={styles.chapterHeader}>Episode 4</Text>
          <Text style={styles.chapterSubHeader}>Those who from Heaven to Earth came</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode focuses on the Anunnaki, their depiction in Sumerian cylinder seals, their symbology and their influence on other religions.
            </Text>
            <Text style={styles.sectionText}>
            The episode includes the Triad of Heaven, The gods Enlil and Enki, The Hindu Trimurti, The Anunnaki Sages, The Tree of Life, The winged chamber, The symbol of the entwined cables (Infinity knot), Teleportation, The flying ring and much more. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=n7Go-AWvMqs&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=4' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep4.jpg')}></ImageBackground>  
          </TouchableOpacity>

          <ImageGrid photos={photos} episode={4}/>

          <Text style={styles.chapterHeader}>Episode 5</Text>
          <Text style={styles.chapterSubHeader}>The Shiny Herd</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode focuses on the Zodiac, the Celestial Time.
            </Text>
            <Text style={styles.sectionText}>
            We present the division of Time, the Sundial, the Solar Day, the Astrological Week, the Lunar Month, the Equinox & Solstice, the Solar Year, the Constellations, the Shiny Herd, Precession of the Equinoxes, Human Life Expectancy, Sumerian Kings List, Nibiru’s Solar Year, Astrological Numbers, Golden Ratio, and Divine Time. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=AvH3K58xvf8&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=5' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep5.jpg')}></ImageBackground>  
          </TouchableOpacity>

          <ImageGrid photos={photos} episode={5}/>

          <Text style={styles.chapterHeader}>Episode 6</Text>
          <Text style={styles.chapterSubHeader}>Set in Stone</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode focuses on the concept of megalithic stones and structures. 
            </Text>
            <Text style={styles.sectionText}>
            Including The Giza Complex, The Great Sphinx, The Sphinx Water Erosion hypothesis, Mohs scale of mineral hardness, Göbekli Tepe, Baalbek's Trilithon, Stone of the Pregnant Woman, Sacsayhuamán, Cusco, Ollantaytambo, stone knobs, The Pyramid of Menkaure's casing stones, Puma Punku, Giza’s Basalt Floor, Core Drill Holes, The Unfinished Obelisk, Scoop marks, Corner Stones, The Serapeum of Saqqara, Chullpa and The Osirion Temple. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=bqRuHZRGN1o&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=6' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep6.jpg')}></ImageBackground>  
          </TouchableOpacity> 

          <ImageGrid photos={photos} episode={6}/>

          <Text style={styles.chapterHeader}>Episode 7</Text>
          <Text style={styles.chapterSubHeader}>The Fruits of Knowledge</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode analyzes the concept of divine chariots, divine weapons and sacred symbols. 
            </Text>
            <Text style={styles.sectionText}>
            Including the Vedas, the Mahābhārata, the Ramayana, Sumerian dragons, Vimana, Astra, Trident, Trishula, Sudarshana Chakra, Vajra, the Infinity Knot, Yin-Yang, Swastika, Toroidal Fields, Torus, Double Torus, Vesica Piscis, Triquetra, Trinity knot, Seed of Life, Six Petal Rosette, Flower of Life, Sacred geometry, Guardian Lions.
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=YhAf3LeG7IQ&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=7' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep7.jpg')}></ImageBackground>  
          </TouchableOpacity> 

          <ImageGrid photos={photos} episode={7}/>

          <Text style={styles.chapterHeader}>Episode 8</Text>
          <Text style={styles.chapterSubHeader}>The Prehistory Mystery</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode discusses the creation of mankind and the flood. 
            </Text>
            <Text style={styles.sectionText}>
            This episode shows that the biblical account has been influenced by earlier Mesopotamian texts, including the Atrahasis, the Epic of Gilgamesh, the Enuma Elish and many more sources. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=skahbTDWxiA&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=8' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep8.jpg')}></ImageBackground>  
          </TouchableOpacity> 

          <ImageGrid photos={photos} episode={8}/>

          <Text style={styles.chapterHeader}>Episode 9</Text>
          <Text style={styles.chapterSubHeader}>Unnatural Selection</Text>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
            This episode discusses the concept of evolution (micro-evolution and macro-evolution), human DNA and evidence of genetic engineering. 
            </Text>
            <Text style={styles.sectionText}>
            This episode also analyzes the physical differences between chimpanzees and humans. 
            </Text>
          </View>                    
          <TouchableOpacity style={styles.video} onPress={() => { Linking.openURL( 'https://www.youtube.com/watch?v=om8ZSI4vR6k&list=PLbd-yCGYHip0TDXxb4NmKelBUQJ-odshp&index=9' );}} >
              <ImageBackground style={styles.imageBackground} source={require('../assets/images/videos/ep9.jpg')}></ImageBackground>  
          </TouchableOpacity>                    

          <ImageGrid photos={photos} episode={9}/>

        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    }, 
    header: {
      fontSize: 25,
      textAlign:'center',
      marginTop:15,
      textDecorationLine: 'underline'
    }, 
    chapterHeader: {
      fontSize: 25,
      textAlign:'center',
      marginTop:10
    },    
    chapterSubHeader: {
      fontSize: 25,
      textAlign:'center',
      marginTop:5,
      textDecorationLine: 'underline'
    },
    video: {
      marginBottom:20,
      justifyContent: 'center',
      alignItems: 'center',
    },                     
    sectionText: {
      fontSize: 20,
      textAlign:'justify',
      paddingBottom:10    
    },     
    section: {
      padding:10,
    }, 
    imageBackground: {
      width: windowWidth, 
      height:heightElement,
      resizeMode: "cover",
    }, 
    itemContainer: {
      margin:imagePadding,
      width: imageWidth, 
      height:imageHeight,       
    },
    image: {
      width: imageWidth, 
      height:imageHeight,
      resizeMode: "cover",
    },    
    imageGrid:{
      flex: 1,
      width: windowWidthForGrid,
      height: containerHeight,
      alignItems: 'baseline',
      flexWrap: 'wrap',
    }    
  });

const InterventionStack = createStackNavigator();

export function InterventionStackScreen() {
  return (
    <InterventionStack.Navigator initialRouteName="Intervention">
      <InterventionStack.Screen name="Intervention" component={InterventionScreen} options={{ title: 'Human History Revisited' }} />
      <InterventionStack.Screen name="Details" component={DetailsScreen} />
    </InterventionStack.Navigator>
  );
}