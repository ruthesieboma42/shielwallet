import React, {useEffect} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default (props) => {

	 const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Onboarding");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#3B28CC",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#3B28CC",
				}}>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						padding: 17,
						marginBottom: 99,
						marginHorizontal: 7,
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						padding: 17,
						marginHorizontal: 7,
					}}>

					
					<Image
						source = {require('./src/assets/images/Logo.png')} 
						resizeMode = {"contain"}
						style={{
							position: "center",
							width: '50%',
							height: undefined,
							aspectRatio: 428 / 926
						}}
					/>
					
				</View>
			</ScrollView>
		</SafeAreaView>
	)
};

