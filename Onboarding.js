import React from "react";
import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/f7jzklob_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 28,
							height: 11,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/1z0jxfr1_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 66,
							height: 11,
						}}
					/>
				</View>
				<View 
					style={{
						paddingBottom: 6,
						paddingHorizontal: 10,
						marginBottom: 72,
						marginHorizontal: 41,
					}}>
					<View >
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/ng7ry6dz_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 260,
							}}
						/>
						<View 
							style={{
								position: "absolute",
								bottom: 0,
								right: -10,
								left: -10,
								height: 189,
								backgroundColor: "#F8F8FF",
								borderRadius: 16,
							}}>
						</View>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/ozc9per3_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 5,
							left: 44,
							width: 40,
							height: 41,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/qu1fg9hs_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 5,
							right: 50,
							left: 50,
							height: 189,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/uox3k9f6_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 0,
							left: 129,
							width: 49,
							height: 48,
						}}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/dwALmg6RKR/5gxd5suh_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							position: "absolute",
							bottom: 4,
							right: 87,
							width: 46,
							height: 37,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 32,
					}}>
					<View 
						style={{
							flexDirection: "row",
						}}>
						<View 
							style={{
								width: 60,
								height: 6,
								backgroundColor: "#3B28CC",
								borderRadius: 2,
								marginRight: 8,
							}}>
						</View>
						<View 
							style={{
								width: 7,
								height: 6,
								backgroundColor: "#7DDE9280",
								borderRadius: 50,
								marginRight: 8,
							}}>
						</View>
						<View 
							style={{
								width: 7,
								height: 6,
								backgroundColor: "#7DDE9280",
								borderRadius: 50,
							}}>
						</View>
					</View>
				</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 28,
						fontWeight: "bold",
						marginBottom: 16,
						marginLeft: 38,
					}}>
					{"Welcome to Shield Wallet!"}
				</Text>
				<Text 
					style={{
						color: "#797979",
						fontSize: 16,
						textAlign: "center",
						marginBottom: 54,
						marginLeft: 25,
						marginRight: 37,
					}}>
					{"Your all-in-one digital wallet for secure transactions, bill payments, savings, and exciting rewards. Simplify your financial management and enjoy convenience at your fingertips. "}
				</Text>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 94,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 16,
							fontWeight: "bold",
						}}>
						{"Get Started"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 68,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#B3B3B3",
								fontSize: 16,
								marginRight: 10,
							}}>
							{"Already have an account? "}
						</Text>
						<Text 
							style={{
								color: "#3B28CC",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Login Here"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}