import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
export default (props) => {

	 const navigation = navigation();

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
					}}>
					
					<Image
						source = {'/src/assets/images/Logo.png'} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 5,
							left: 44,
							width: 40,
							height: 41,
						}}
					/>
					
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

