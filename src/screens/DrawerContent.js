import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/Context';

export function DrawerContent(props) {

// const [isDarkTheme , setIsDarkTheme] = React.useState(false);
// const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
// }

  const paperTheme = useTheme();

//  const { signOut } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'data:image/jpeg;base64,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'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Campus Recruitment System</Title>
                                <Caption style={styles.caption}>@campus_recruitment.com</Caption>
                            </View>
                        </View>

                        {/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100000</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Vacancies"
                            onPress={() => {props.navigation.navigate('Vacancies')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Companies"
                            onPress={() => {props.navigation.navigate('Companies')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Student"
                            onPress={() => {props.navigation.navigate('StudentScreen')}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingScreen')}}
                        /> */}
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        /> */}
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });