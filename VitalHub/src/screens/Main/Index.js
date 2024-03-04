export const Main = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route, iconName, color }) => ({
                tabBarIcon: ({ focused }) => {

                    if (route.name === "Agenda") {
                        iconName = 'calendar-check';
                        color = focused ? "#607EC5" : "#4E4B59"
                    } else if (route.name === 'Perfil') {
                        iconName = 'user-large'
                        color = focused ? "#607EC5" : "#4E4B59"
                    }

                    // You can return any component that you like here!
                    return <FontAwesome6 name={iconName} size={18} color={color} />;
                },
                tabBarActiveTintColor: "#607EC5",
                headerShown: false
            })}
        >
            <Tab.Screen name="Agenda" component={MedicoConsultas} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    )
}