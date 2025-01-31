import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/home";
import DetailsScreen from "./screens/details";

export default function App() {
    return <AppContainer />;
}

const appStackNavigator = createStackNavigator(

{
    home:{
        screen:HomeScreen,
        navigationOptions:{
            headerShown:false
        }
    }
    ,
    details:{
        screen:DetailsScreen
    }
},
{
    initialroutname:"home"
}
)