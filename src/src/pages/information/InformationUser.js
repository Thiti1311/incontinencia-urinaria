import React, { useState, useRef } from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassWaterDroplet } from '@fortawesome/free-solid-svg-icons';
import { GiDroplets, GiBodyHeight } from "react-icons/gi";
import { PiToiletDuotone } from "react-icons/pi";
import { LiaWeightSolid } from "react-icons/lia";
import { BsSoundwave } from "react-icons/bs";
import Image1 from "./../../assets/rins1.jpeg";
import Image2 from "./../../assets/rins2.jpeg";
import { styles } from "./InformationUserStyle";

export default function InformationUser(){
    const navigation = useNavigation();
    const [waterCups, setWaterCups] = useState("");
    const [bathroomVisits, setBathroomVisits] = useState("");
    const [involuntaryUrination, setInvoluntaryUrination] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
  
    function navigateToBack() {
      navigation.navigate("Login");
    }

    function navigateToTest() {
        navigation.navigate("");
    }

    function navigateToNext() {
        navigation.navigate("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={Image1} style={styles.image} />
                <Image source={Image2} style={styles.image} />
            </View>
            <Text style={styles.quest}>
                Para concluir responda as perguntas:
            </Text>
            <View style={styles.containerButtons}>
                <View>
                    <View style={styles.textButtonWithIcon}>
                        <FontAwesomeIcon style={styles.iconButton} icon={faGlassWaterDroplet} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Quantos copos de água você bebe em um dia?"
                            value={waterCups}
                            onChangeText={text => setWaterCups(text)}
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} />
                </View>
                <View>
                    <View style={styles.textButtonWithIcon}>
                        <GiDroplets style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Quantas vezes você vai ao banheiro em um dia?"
                            value={bathroomVisits}
                            onChangeText={text => setBathroomVisits(text)}
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} />
                </View>
                <View>
                    <View style={styles.textButtonWithIcon}>
                        <PiToiletDuotone style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Você perde xixi sem querer?"
                            value={involuntaryUrination}
                            onChangeText={text => setInvoluntaryUrination(text)}
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} />
                </View>
                <View>
                    <View style={styles.textButtonWithIcon}>
                        <LiaWeightSolid style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Peso (Em KG - Quilogramas)"
                            value={weight}
                            onChangeText={text => setWeight(text)}
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} /> 
                </View>
                <View>
                    <View style={styles.textButtonWithIcon}>
                        <GiBodyHeight style={styles.iconButton} />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Altura (Em M - Metros)"
                            value={height}
                            onChangeText={text => setHeight(text)}
                        />
                    </View>
                    <BsSoundwave style={styles.iconSound} />
                </View>
            </View>
            <TouchableOpacity onPress={navigateToTest}>
                <Text style={styles.buttonTest}>Não sabe informar? Participe do teste durante 7 dias!</Text>
            </TouchableOpacity>

            {waterCups && bathroomVisits && involuntaryUrination && weight && height && (
                <TouchableOpacity onPress={navigateToNext}>
                    <Text style={styles.buttonTest}>Continuar</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
