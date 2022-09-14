import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import styled from 'styled-components';

const proj = () =>{
  return (
    <ScrollView>
      <View>
        <Text
    style={{
      fontsize: 45,
      alignSelf: "center",
      color:"green",
    }}
    >
    
    </Text>
    {/* <Image source={{URL"https://www.magazineluiza.com.br/adaptador-wireless-usb-2-0-d-link-dwa-123/p/hf4cf3c585/in/apwf/"}}> </Image>  */}
    </View>
    </ScrollView>
  )};
  


export default function App() {
  return (
    <View style={styles.container}>
      <Text>dwaqomwadlssssssssssssssssss</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
);

